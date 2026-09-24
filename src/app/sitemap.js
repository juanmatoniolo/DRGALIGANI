import { SITE_URL } from "../lib/site";

export default function sitemap() {
	const now = new Date();

	const routes = [
		{ path: "", changeFrequency: "weekly", priority: 1.0 },
		{ path: "/sobre-nosotros", changeFrequency: "monthly", priority: 0.8 },
		{ path: "/servicios", changeFrequency: "monthly", priority: 0.9 },
		{
			path: "/servicios/responsabilidad-civil",
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			path: "/servicios/derecho-seguros",
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			path: "/servicios/accidentes-transito",
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			path: "/servicios/riesgos-trabajo",
			changeFrequency: "monthly",
			priority: 0.75,
		},
		{
			path: "/politica-privacidad",
			changeFrequency: "yearly",
			priority: 0.3,
		},
	];

	return routes.map((route) => ({
		url: `${SITE_URL}${route.path}`,
		lastModified: now,
		changeFrequency: route.changeFrequency,
		priority: route.priority,
	}));
}
