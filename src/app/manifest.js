// src/app/manifest.js
export default function manifest() {
	return {
		name: "Dr. Galígani & Asociados",
		short_name: "Dr. Galígani",
		description:
			"Especialistas en derecho de daños, responsabilidad civil y accidentes de tránsito.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#0f2a4a",
		lang: "es-AR",
		icons: [
			{
				src: "/icons/icon-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "any",
			},
			{
				src: "/icons/icon-maskable-192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "maskable",
			},
			{
				src: "/icons/icon-maskable-512.png",
				sizes: "512x512",
				type: "image/png",
				purpose: "maskable",
			},
		],
	};
}
