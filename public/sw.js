/* Service Worker — Estudio Jurídico Dr. Galígani */

const CACHE_NAME = "drgaligani-v1";
const PRECACHE_URLS = [
	"/",
	"/servicios/",
	"/sobre-nosotros/",
	"/politica-privacidad/",
];

/* INSTALL: precachea rutas base */
self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)),
	);
	self.skipWaiting();
});

/* ACTIVATE: limpia cachés viejas */
self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys
						.filter((k) => k !== CACHE_NAME)
						.map((k) => caches.delete(k)),
				),
			),
	);
	self.clients.claim();
});

/* FETCH: estrategia mixta */
self.addEventListener("fetch", (event) => {
	const { request } = event;

	// Solo GET
	if (request.method !== "GET") return;

	// Ignorar requests a otros dominios (analytics, etc.)
	const url = new URL(request.url);
	if (url.origin !== self.location.origin) return;

	// Navegación (HTML): network-first con fallback a caché
	if (request.mode === "navigate") {
		event.respondWith(
			fetch(request)
				.then((response) => {
					const copy = response.clone();
					caches
						.open(CACHE_NAME)
						.then((cache) => cache.put(request, copy));
					return response;
				})
				.catch(() =>
					caches.match(request).then((r) => r || caches.match("/")),
				),
		);
		return;
	}

	// Estáticos (_next, imágenes): cache-first
	if (
		url.pathname.startsWith("/_next/") ||
		url.pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|woff2?)$/)
	) {
		event.respondWith(
			caches.match(request).then(
				(cached) =>
					cached ||
					fetch(request).then((response) => {
						const copy = response.clone();
						caches
							.open(CACHE_NAME)
							.then((cache) => cache.put(request, copy));
						return response;
					}),
			),
		);
		return;
	}

	// Resto: network con fallback
	event.respondWith(fetch(request).catch(() => caches.match(request)));
});
