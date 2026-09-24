import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Estudio Jurídico Dr. Galígani",
		short_name: "Galígani Abogados",
		description:
			"Especialistas en derecho de daños, responsabilidad civil y accidentes de tránsito.",
		start_url: "/",
		display: "standalone",
		background_color: "#ffffff",
		theme_color: "#0f2a4a",
		orientation: "portrait",
		lang: "es-AR",
		icons: [
			{ src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
			{ src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
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
