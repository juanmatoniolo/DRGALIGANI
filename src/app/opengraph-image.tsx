import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Estudio Jurídico Dr. Galígani";
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
				alignItems: "center",
				justifyContent: "center",
				padding: "80px",
			}}
		>
			<div
				style={{
					fontSize: 72,
					fontWeight: 700,
					color: "#ffffff",
					textAlign: "center",
					lineHeight: 1.2,
					fontFamily: "serif",
				}}
			>
				Especialista en Derecho de Daños
			</div>
			<div
				style={{
					fontSize: 32,
					color: "#d4a574",
					marginTop: 32,
					fontWeight: 600,
				}}
			>
				Dr. Galígani · +25 años de experiencia
			</div>
		</div>,
		{ ...size },
	);
}
