// src/app/opengraph-image.tsx
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
				background:
					"radial-gradient(circle at 20% 20%, #16345c 0%, #0a1929 55%, #050d17 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: "90px 100px",
				position: "relative",
				fontFamily: "Georgia, serif",
			}}
		>
			{/* Marco delgado dorado */}
			<div
				style={{
					position: "absolute",
					inset: 24,
					border: "1px solid rgba(212,165,116,0.35)",
				}}
			/>

			{/* Barra dorada lateral */}
			<div
				style={{
					position: "absolute",
					left: 0,
					top: 0,
					bottom: 0,
					width: 10,
					background:
						"linear-gradient(180deg, #d4a574 0%, #a67c4e 100%)",
				}}
			/>

			{/* Etiqueta superior */}
			<div
				style={{
					display: "flex",
					fontSize: 22,
					fontWeight: 700,
					color: "#d4a574",
					letterSpacing: "0.35em",
					textTransform: "uppercase",
					marginBottom: 36,
					fontFamily: "Arial, sans-serif",
				}}
			>
				Estudio Jurídico
			</div>

			{/* Título principal — serif, mucho peso */}
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					fontSize: 92,
					fontWeight: 700,
					color: "#ffffff",
					lineHeight: 1.08,
					letterSpacing: "-0.01em",
					marginBottom: 28,
					maxWidth: 1000,
				}}
			>
				<span>Dr. Galígani</span>
				<span style={{ color: "#d4a574", fontStyle: "italic" }}>
					&amp; Asociados
				</span>
			</div>

			{/* Línea divisoria fina */}
			<div
				style={{
					display: "flex",
					width: 120,
					height: 3,
					background: "#d4a574",
					marginBottom: 28,
				}}
			/>

			{/* Subtítulo */}
			<div
				style={{
					display: "flex",
					fontSize: 34,
					fontWeight: 400,
					fontStyle: "italic",
					color: "rgba(255,255,255,0.9)",
					letterSpacing: "0.01em",
					maxWidth: 900,
					marginBottom: 44,
				}}
			>
				Especialistas en Derecho de Daños
			</div>

			{/* Línea inferior con datos — sans-serif para contraste */}
			<div
				style={{
					display: "flex",
					alignItems: "center",
					gap: 28,
					fontSize: 21,
					color: "rgba(255,255,255,0.55)",
					fontWeight: 500,
					fontFamily: "Arial, sans-serif",
					letterSpacing: "0.02em",
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
