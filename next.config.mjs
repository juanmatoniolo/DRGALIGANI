/** @type {import('next').NextConfig} */
const nextConfig = {
	// React Compiler (experimental, dejalo si lo querés)
	reactCompiler: true,

	// Imágenes remotas y optimización
	images: {
		formats: ["image/avif", "image/webp"],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días
	},

	// Compresión
	compress: true,

	// Powerups de React
	experimental: {
		optimizePackageImports: ["lucide-react", "framer-motion"],
	},

	// Headers de seguridad + SEO
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "SAMEORIGIN",
					},
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
				source: "/og-image.jpg",
				headers: [
					{ key: "Cache-Control", value: "public, max-age=86400" },
				],
			},
		];
	},

	// Redirecciones (por si querés www → apex o similar en el futuro)
	async redirects() {
		return [
			// Ejemplo para cuando compres el dominio real:
			// {
			//   source: '/:path*',
			//   has: [{ type: 'host', value: 'www.drgaligani.com' }],
			//   destination: 'https://drgaligani.com/:path*',
			//   permanent: true,
			// },
		];
	},

	// Silencia warnings de lint en build (Vercel lo agradece)
	eslint: {
		ignoreDuringBuilds: false,
	},
	typescript: {
		ignoreBuildErrors: false,
	},
};

export default nextConfig;
