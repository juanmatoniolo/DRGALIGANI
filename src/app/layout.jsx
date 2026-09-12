import { Merriweather, Inter } from 'next/font/google';
import Script from 'next/script';
import '@/app/globals.css';

/* =========================================================
   FUENTES
   ========================================================= */
const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

/* =========================================================
   METADATA GLOBAL
   ========================================================= */
export const metadata = {
  metadataBase: new URL('https://dominio.com'), // ⚠️ reemplazar con tu dominio real
  title: {
    default: 'Especialista en Derecho de Daños - Dr. Galígani',
    template: '%s | Dr. Galígani',
  },
  description:
    'Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros. Más de 25 años de experiencia en Buenos Aires.',
  keywords: [
    'abogado derecho daños',
    'responsabilidad civil',
    'accidentes tránsito',
    'derecho seguros',
    'Buenos Aires',
    'Dr. Galígani',
  ],
  authors: [{ name: 'Dr. Galígani' }],
  creator: 'Dr. Galígani',
  publisher: 'Dr. Galígani',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://dominio.com',
    siteName: 'Estudio Jurídico Dr. Galígani',
    title: 'Especialista en Derecho de Daños - Dr. Galígani',
    description:
      'Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros.',
    images: [
      {
        url: '/og-image.jpg', // ⚠️ crear en /public
        width: 1200,
        height: 630,
        alt: 'Dr. Galígani - Especialista en Derecho de Daños',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Especialista en Derecho de Daños - Dr. Galígani',
    description:
      'Abogado especialista en responsabilidad civil, accidentes de tránsito y derecho de seguros.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://dominio.com',
  },
};

/* =========================================================
   VIEWPORT (separado en Next 14+)
   ========================================================= */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

/* =========================================================
   JSON-LD · Schema LocalBusiness
   ========================================================= */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': 'https://dominio.com/#organization',
  name: 'Estudio Jurídico Dr. Galígani',
  image: 'https://dominio.com/logo.png',
  logo: 'https://dominio.com/logo.png',
  description:
    'Estudio jurídico especializado en derecho de daños, responsabilidad civil y accidentes de tránsito.',
  url: 'https://dominio.com',
  telephone: '+54-11-0000-0000', // ⚠️ reemplazar
  email: 'contacto@dominio.com', // ⚠️ reemplazar
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Dirección]', // ⚠️ reemplazar
    addressLocality: 'Buenos Aires',
    addressRegion: 'CABA',
    postalCode: '[CP]', // ⚠️ reemplazar
    addressCountry: 'AR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -34.6037, // ⚠️ reemplazar con coords reales
    longitude: -58.3816,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/[perfil]', // ⚠️ reemplazar
    'https://www.instagram.com/[perfil]', // ⚠️ reemplazar
  ],
  knowsAbout: [
    'Derecho de Daños',
    'Responsabilidad Civil',
    'Accidentes de Tránsito',
    'Derecho de Seguros',
  ],
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */
export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID; // ⚠️ opcional: configurar en .env.local

  return (
    <html
      lang="es-AR"
      className={`${merriweather.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD · LocalBusiness / LegalService */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>

      <body className="min-h-screen flex flex-col antialiased bg-white text-[#1f2937]">
        {children}

        {/* ============================================
            GOOGLE ANALYTICS 4 (opcional)
            Solo se carga si NEXT_PUBLIC_GA_ID está definido
            ============================================ */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}