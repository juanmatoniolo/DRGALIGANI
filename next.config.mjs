// next.config.js — agrega headers para que el sw.js se actualice y registre bien
const nextConfig = {
	async headers() {
		return [
			{
				source: "/sw.js",
				headers: [
					{
						key: "Cache-Control",
						value: "no-cache, no-store, must-revalidate",
					},
					{ key: "Service-Worker-Allowed", value: "/" },
				],
			},
		];
	},
};
module.exports = nextConfig;
