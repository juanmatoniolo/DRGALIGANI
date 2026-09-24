/* =========================================================
   Service Worker · Estudio Jurídico Dr. Galígani
   ========================================================= */

const CACHE_VERSION = "v1";
const CACHE_NAME = `drgaligani-${CACHE_VERSION}`;

/* Rutas que se precachean al instalar */
const PRECACHE_URLS = [
	"/",
	"/servicios/",
	"/sobre-nosotros/",
	"/politica-privacidad/",
];

/* =========================================================
   INSTALL
   ========================================================= */
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(PRECACHE_URLS))
			.catch((err) => console.warn("[SW] Precache parcial:", err)),
	);
	// Activa el nuevo SW sin esperar a que se cierren las pestañas
	self.skipWaiting();
});

/* =========================================================
   ACTIVATE
   ========================================================= */
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((key) => key !== CACHE_NAME)
						.map((key) => caches.delete(key)),
				),
			)
			.then(() => self.clients.claim()),
	);
});

/* =========================================================
   FETCH · Estrategia mixta
   ========================================================= */
self.addEventListener("fetch", (event) => {
	const { request } = event;

	// Solo GET
	if (request.method !== "GET") return;

	// Ignorar requests cross-origin (analytics, fuentes externas, etc.)
	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	// Ignorar extensiones de Chrome y otros esquemas
	if (!url.protocol.startsWith("http")) return;

	/* ---------- Navegación (HTML) · Network-first ---------- */
	if (request.mode === "navigate") {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const copy = response.clone();
					caches
						.open(CACHE_NAME)
						.then((cache) => cache.put(request, copy))
						.catch(() => {});
					return response;
				})
				.catch(() =>
					caches
						.match(request)
						.then((cached) => cached || caches.match("/")),
				),
		);
		return;
	}

	/* ---------- Estáticos (_next/static, imágenes) · Cache-first ---------- */
	if (
		url.pathname.startsWith("/_next/static/") ||
		url.pathname.startsWith("/icons/") ||
		url.pathname.startsWith("/estudio/") ||
		url.pathname.startsWith("/imagenes/") ||
		/\.(png|jpg|jpeg|webp|avif|svg|ico|woff2?|ttf|otf)$/.test(url.pathname)
	) {
		event.respondWith(
			caches.match(request).then((cached) => {
				if (cached) return cached;
				return fetch(request)
					.then((response) => {
						// Solo cachear respuestas válidas
						if (!response || response.status !== 200)
							return response;
						const copy = response.clone();
						caches
							.open(CACHE_NAME)
							.then((cache) => cache.put(request, copy))
							.catch(() => {});
						return response;
					})
					.catch(() => cached);
			}),
		);
		return;
	}

	/* ---------- Resto · Network con fallback a caché ---------- */
	event.respondWith(
		fetch(request)
			.then((response) => {
				// Cachear respuestas GET exitosas de mismo origen
				if (response && response.status === 200) {
					const copy = response.clone();
					caches
						.open(CACHE_NAME)
						.then((cache) => cache.put(request, copy))
						.catch(() => {});
				}
				return response;
			})
			.catch(() => caches.match(request)),
	);
});

/* =========================================================
   MENSAJES desde el cliente (opcional, para forzar update)
   ========================================================= */
self.addEventListener("message", (event) => {
	if (event.data && event.data.type === "SKIP_WAITING") {
		self.skipWaiting();
	}
});
