import { Merriweather, Inter } from "next/font/google";
import "@/app/globals.css";


const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: "Especialista en Derecho de Daños - Dr. Galígani",
  description: "Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${merriweather.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <h1>Hola</h1>
      </body>
    </html>
  );
}