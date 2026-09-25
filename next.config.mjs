// next.config.mjs — quitamos trailingSlash: rompe la ruta /opengraph-image que
// generan los bots (redirige a .../ y el crawler no sigue esa redirección → sin imagen ni título)
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactCompiler: true,
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60 * 60 * 24 * 30,
	},
	compress: true,
	experimental: {
		optimizePackageImports: ["lucide-react", "framer-motion"],
	},
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{
						key: "Referrer-Policy",
						value: "strict-origin-when-cross-origin",
					},
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=()",
					},
				],
			},
			{
				source: "/icons/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/estudio/(.*)",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=31536000, immutable",
					},
				],
			},
			{
				source: "/sw.js",
				headers: [
					{
						key: "Cache-Control",
						value: "public, max-age=0, must-revalidate",
					},
					{ key: "Service-Worker-Allowed", value: "/" },
				],
			},
		];
	},
	eslint: { ignoreDuringBuilds: false },
	typescript: { ignoreBuildErrors: false },
};

export default nextConfig;
