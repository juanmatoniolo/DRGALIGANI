import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
	"Dr. Galígani & Asociados - Especialistas en Derecho de Daños";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		<div
			style={{
				background: "linear-gradient(135deg, #0f2a4a 0%, #0a1929 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "center",
				padding: "80px",
				position: "relative",
				fontFamily: "sans-serif",
			}}
		>
			{/* Barra dorada lateral */}
			<div
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					bottom: 0,
					width: 12,
					background: "#d4a574",
				}}
			/>

			{/* Etiqueta superior */}
			<div
				style={{
					fontSize: 24,
					fontWeight: 700,
					color: "#d4a574",
					letterSpacing: "0.15em",
					textTransform: "uppercase",
					marginBottom: 32,
				}}
			>
				Estudio Jurídico
			</div>

			{/* Título principal — más peso */}
			<div
				style={{
					fontSize: 96,
					fontWeight: 900,
					color: "#ffffff",
					lineHeight: 1.05,
					letterSpacing: "-0.03em",
					marginBottom: 24,
					maxWidth: 1000,
				}}
			>
				Dr. Galígani
				<br />
				<span style={{ color: "#d4a574" }}>&amp; Asociados</span>
			</div>

			{/* Subtítulo */}
			<div
				style={{
					fontSize: 32,
					fontWeight: 600,
					color: "rgba(255,255,255,0.85)",
					letterSpacing: "0.01em",
					maxWidth: 900,
				}}
			>
				Especialistas en Derecho de Daños
			</div>

			{/* Línea inferior con datos */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 32,
					marginTop: 48,
					fontSize: 22,
					color: "rgba(255,255,255,0.6)",
					fontWeight: 500,
				}}
			>
				<span>Responsabilidad Civil</span>
				<span style={{ color: "#d4a574" }}>·</span>
				<span>Accidentes de Tránsito</span>
				<span style={{ color: "#d4a574" }}>·</span>
				<span>Derecho de Seguros</span>
			</div>
		</div>,
		{ ...size },
	);
}
