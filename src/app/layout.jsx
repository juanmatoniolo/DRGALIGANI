// src/app/layout.js
import { Merriweather, Inter } from 'next/font/google';
import Script from 'next/script';
import CookieConsent from './components/CookieConsent';
import ServiceWorkerRegister from './components/ServiceWorkerRegister';
import {
  SITE_URL,
  SITE_NAME,
  SITE_SHORT_NAME,
  SITE_DESCRIPTION,
  CONTACT,
} from '../lib/site';
import './globals.css';

/* =========================================================
   FUENTES
   ========================================================= */
const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  preload: true,
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
});

/* =========================================================
   METADATA GLOBAL
   ========================================================= */

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Especialista en Derecho de Daños | ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  // ...keywords, authors, creator, publisher, category, formatDetection igual...
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `Especialista en Derecho de Daños | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    // ❌ ELIMINA el array "images" manual: lo genera automáticamente
    // app/opengraph-image.js (file convention) con URL absoluta correcta,
    // tener ambos duplica <meta og:image> y rompe el preview de WhatsApp/FB.
  },
  twitter: {
    card: 'summary_large_image',
    title: `Especialista en Derecho de Daños | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    // ❌ ELIMINA "images": también la resuelve twitter-image.js / opengraph-image.js
  },
  icons: { /* igual */ },
  manifest: '/site.webmanifest',
  robots: { /* igual */ },
  alternates: { canonical: SITE_URL }, // sin trailing slash final en SITE_URL
  // ❌ ELIMINA el bloque "other" con og:image:secure_url, width, height, type:
  // duplica lo que ya inyecta la file convention y genera tags contradictorios.
};

/* =========================================================
   VIEWPORT
   ========================================================= */
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f2a4a' },
    { media: '(prefers-color-scheme: dark)', color: '#0a1929' },
  ],
  colorScheme: 'light',
};

/* =========================================================
   JSON-LD · LegalService + LocalBusiness
   ========================================================= */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LegalService', 'LocalBusiness'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: SITE_SHORT_NAME,
  image: `${SITE_URL}/og-image.jpg`,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.city,
    addressRegion: CONTACT.address.region,
    postalCode: CONTACT.address.postalCode,
    addressCountry: CONTACT.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: CONTACT.geo.latitude,
    longitude: CONTACT.geo.longitude,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Argentina',
  },
  priceRange: '$$',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: CONTACT.hours.days,
      opens: CONTACT.hours.opens,
      closes: CONTACT.hours.closes,
    },
  ],
  sameAs: [
    CONTACT.social.linkedin,
    CONTACT.social.instagram,
  ].filter((url) => url && !url.includes('[perfil]')),
  knowsAbout: [
    'Derecho de Daños',
    'Responsabilidad Civil',
    'Accidentes de Tránsito',
    'Derecho de Seguros',
    'Riesgos del Trabajo',
  ],
  founder: {
    '@type': 'Person',
    name: 'Dr. Galígani',
    jobTitle: 'Abogado Especialista en Derecho de Daños',
  },
};

/* =========================================================
   ROOT LAYOUT
   ========================================================= */
export default function RootLayout({ children }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="es-AR"
      className={`${merriweather.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect a dominios críticos */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* JSON-LD · LegalService / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body
        className="min-h-screen flex flex-col antialiased bg-white text-[#1f2937]"
        suppressHydrationWarning
      >
        {/* Skip to content — accesibilidad */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#0f2a4a] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>

        <div id="main-content" className="flex flex-col min-h-screen">
          {children}
        </div>

        <CookieConsent />
        <ServiceWorkerRegister />

        {/* ============================================
				    GOOGLE ANALYTICS 4
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
									anonymize_ip: true,
								});
							`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}