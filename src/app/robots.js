import { SITE_URL } from "../lib/site";

export default function robots() {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: ["/api/", "/_next/static/chunks/"],
			},
			{
				userAgent: "GPTBot",
				disallow: "/",
			},
		],
		sitemap: `${SITE_URL}/sitemap.xml`,
		host: SITE_URL,
	};
}
