import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Credentials from '../components/Credentials';
import styles from './page.module.css';

/* =========================
   SEO
   ========================= */
export const metadata = {
    title: 'Servicios',
    description:
        'Servicios jurídicos especializados en responsabilidad civil, derecho de seguros, accidentes de tránsito y riesgos del trabajo. Más de 25 años de experiencia.',
    alternates: { canonical: 'https://dominio.com/servicios' },
    openGraph: {
        title: 'Servicios | Estudio Jurídico Dr. Galígani',
        description:
            'Especialistas en derecho de daños. Conocé nuestras áreas de práctica y respaldá tu caso con un equipo de primer nivel.',
        url: 'https://dominio.com/servicios',
        type: 'website',
    },
};

/* =========================
   SERVICIOS
   ========================= */
const services = [
    {
        slug: 'responsabilidad-civil',
        title: 'Responsabilidad Civil',
        description:
            'Reclamos por daños y perjuicios causados por terceros: daño material, lucro cesante, daño moral y daño emergente.',
        bullets: [
            'Daños por negligencia o impericia',
            'Responsabilidad por cosas riesgosas',
            'Reclamos entre particulares y empresas',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="32" height="32" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
            </svg>
        ),
    },
    {
        slug: 'derecho-seguros',
        title: 'Derecho de Seguros',
        description:
            'Defensa frente a compañías aseguradoras: reclamos por rechazos injustificados, demoras en el pago e incumplimiento de cobertura.',
        bullets: [
            'Rechazos de siniestros',
            'Negociación con aseguradoras',
            'Litigio en caso de incumplimiento',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="32" height="32" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
    },
    {
        slug: 'accidentes-transito',
        title: 'Accidentes de Tránsito',
        description:
            'Reclamos por siniestros viales: lesiones, incapacidad, daño material, gastos médicos y daño moral derivado del hecho.',
        bullets: [
            'Lesiones leves y graves',
            'Indemnización por incapacidad',
            'Reclamos contra aseguradoras',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="32" height="32" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
        ),
    },
    {
        slug: 'riesgos-trabajo',
        title: 'Riesgos del Trabajo',
        description:
            'Asesoramiento y reclamos por accidentes laborales y enfermedades profesionales. Defensa de los derechos del trabajador.',
        bullets: [
            'Accidentes laborales (ART)',
            'Enfermedades profesionales',
            'Indemnización por incapacidad',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="32" height="32" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
        ),
    },
];

/* =========================
   BENEFICIOS
   ========================= */
const benefits = [
    {
        title: 'Atención personalizada',
        description:
            'Cada caso es evaluado y trabajado directamente por el profesional a cargo. Sin intermediarios.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="24" height="24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
        ),
    },
    {
        title: 'Primera consulta sin cargo',
        description:
            'Evaluamos tu caso sin costo y sin compromiso. Te explicamos las opciones reales antes de decidir.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="24" height="24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
        ),
    },
    {
        title: 'Honorarios transparentes',
        description:
            'Modalidades claras: por hora, porcentaje de la indemnización o mixto. Sin sorpresas ni letra chica.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="24" height="24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: 'Confidencialidad',
        description:
            'Todos los datos y el contenido de tu consulta son tratados bajo estricto secreto profesional.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="24" height="24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        ),
    },
];

/* =========================
   JSON-LD (Service + ItemList)
   ========================= */
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Servicios Jurídicos',
    itemListElement: services.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
            '@type': 'Service',
            name: s.title,
            description: s.description,
            provider: {
                '@type': 'LegalService',
                name: 'Estudio Jurídico Dr. Galígani',
            },
            url: `https://dominio.com/servicios/${s.slug}`,
        },
    })),
};

/* =========================
   PAGE
   ========================= */
export default function ServiciosPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            {/* ============================
                HERO
                ============================ */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
                        <ol>
                            <li><Link href="/">Inicio</Link></li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page">Servicios</li>
                        </ol>
                    </nav>

                    <h1 className={styles.heroTitle}>Nuestros Servicios</h1>
                    <p className={styles.heroSubtitle}>
                        Asesoramiento jurídico especializado en derecho de daños.
                        Elegí el área que mejor se ajuste a tu situación y
                        conocé cómo podemos ayudarte.
                    </p>
                </div>
            </section>

            {/* ============================
                SERVICIOS (GRID)
                ============================ */}
            <section className={styles.servicesSection} aria-labelledby="services-title">
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Áreas de práctica</span>
                        <h2 id="services-title" className={styles.sectionTitle}>
                            ¿En qué podemos ayudarte?
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Cuatro áreas de especialización para cubrir las
                            situaciones más frecuentes en derecho de daños.
                        </p>
                    </Reveal>

                    <div className={styles.servicesGrid}>
                        {services.map((service, i) => (
                            <Reveal
                                as="article"
                                key={service.slug}
                                delay={i * 100}
                                className={styles.serviceCard}
                            >
                                <div className={styles.serviceIcon}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>
                                    {service.title}
                                </h3>
                                <p className={styles.serviceDescription}>
                                    {service.description}
                                </p>
                                <ul className={styles.serviceBullets}>
                                    {service.bullets.map((b) => (
                                        <li key={b}>
                                            <span className={styles.bulletCheck} aria-hidden="true">✓</span>
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={`/servicios/${service.slug}`}
                                    className={styles.serviceLink}
                                    aria-label={`Más información sobre ${service.title}`}
                                >
                                    Más información
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="16" height="16" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================
                TRAYECTORIA / CREDENCIALES
                ============================ */}
            <Credentials />

            {/* ============================
                BENEFICIOS
                ============================ */}
            <section className={styles.benefitsSection} aria-labelledby="benefits-title">
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Cómo trabajamos</span>
                        <h2 id="benefits-title" className={styles.sectionTitle}>
                            Por qué elegirnos
                        </h2>
                    </Reveal>

                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, i) => (
                            <Reveal
                                key={benefit.title}
                                delay={i * 100}
                                className={styles.benefitCard}
                            >
                                <div className={styles.benefitIcon}>
                                    {benefit.icon}
                                </div>
                                <h3 className={styles.benefitTitle}>
                                    {benefit.title}
                                </h3>
                                <p className={styles.benefitDescription}>
                                    {benefit.description}
                                </p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================
                CTA FINAL
                ============================ */}
            <section className={styles.ctaSection} aria-labelledby="cta-title">
                <div className={styles.container}>
                    <Reveal>
                        <h2 id="cta-title" className={styles.ctaTitle}>
                            ¿Tu caso no encaja en ninguna categoría?
                        </h2>
                        <p className={styles.ctaText}>
                            Contactanos y evaluamos tu situación sin compromiso.
                            La primera consulta es sin cargo.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/#contacto" className={styles.ctaPrimary}>
                                Agendar Consulta
                            </Link>
                            <Link href="/sobre-nosotros" className={styles.ctaSecondary}>
                                Conocer al equipo
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </>
    );
}