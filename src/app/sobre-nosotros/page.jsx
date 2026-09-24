import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GalleryCarousel from '../components/GalleryCarousel';
import Reveal from '../components/Reveal';
import styles from './page.module.css';

/* =========================
   SEO
   ========================= */
export const metadata = {
    title: 'Sobre Nosotros',
    description:
        'Conocé al equipo del Estudio Jurídico especializado en derecho de daños, responsabilidad civil y accidentes de tránsito. Más de 25 años de experiencia.',
    alternates: { canonical: 'https://dominio.com/sobre-nosotros' },
    openGraph: {
        title: 'Sobre Nosotros | Estudio Jurídico',
        description:
            'Equipo de abogados especializados en responsabilidad civil y accidentes de tránsito.',
        url: 'https://dominio.com/sobre-nosotros',
        type: 'website',
    },
};

/* =========================
   HELPER: codifica espacios y paréntesis
   ========================= */
const estudioImg = (n) => encodeURI(`/estudio/estudio (${n}).webp`);

/* =========================
   GALERÍA (captions opcionales)
   ========================= */
/* =========================
   GALERÍA — rutas limpias, sin encodeURI
   ========================= */
const gallery = [
    { image: '/estudio/integrante-3.webp', caption: 'Nuestro equipo' },
    { image: '/estudio/integrante-4.webp' },
    { image: '/estudio/ESTUDIO GALIGANI _007.webp', caption: 'Instalaciones' },
    { image: '/estudio/ESTUDIO GALIGANI _013.webp' },
    { image: '/estudio/ESTUDIO GALIGANI _009.webp', caption: 'Sala de reuniones' },
    { image: '/estudio/integrante-2.webp' },
    { image: '/estudio/integrante-8.webp', caption: 'Atención al cliente' },
    { image: '/estudio/integrante-6.webp' },
    { image: '/estudio/integrante-5.webp', },
    { image: '/estudio/integrante-7.webp', },
];
const certifications = [
    { year: '2020', title: 'Magíster en Derecho de Daños', institution: 'Universidad de Buenos Aires' },
    { year: '2015', title: 'Especialización en Responsabilidad Civil', institution: 'Universidad Católica Argentina' },
    { year: '2010', title: 'Posgrado en Derecho de Seguros', institution: 'Universidad Austral' },
    { year: '2000', title: 'Abogado', institution: 'Universidad de Buenos Aires' },
];

/* =========================
   STATS — datos verificables, no promesas infladas
   ========================= */
const stats = [
    { value: '25+', label: 'Años de experiencia' },
    { value: '9', label: 'Profesionales en el equipo' },
    { value: '100%', label: 'Confidencialidad' },
    { value: 'Sin cargo', label: 'Primera consulta' },
];

const values = [
    {
        title: 'Profesionalismo',
        description:
            'Formación continua y rigor técnico en cada caso. Trabajamos con los más altos estándares del ejercicio profesional.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="28" height="28" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
    {
        title: 'Integridad',
        description:
            'Transparencia en cada etapa del proceso. Informamos con honestidad sobre plazos, expectativas y resultados posibles.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="28" height="28" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
    {
        title: 'Compromiso',
        description:
            'Cada caso es tratado con dedicación absoluta. Acompañamos al cliente de principio a fin, con disponibilidad permanente.',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.8" stroke="currentColor" width="28" height="28" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
    },
];

/* =========================
   JSON-LD
   ========================= */
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: 'https://dominio.com/sobre-nosotros',
    mainEntity: {
        '@type': 'LegalService',
        name: 'Estudio Jurídico Dr. Galígani',
        description:
            'Estudio jurídico especializado en derecho de daños, responsabilidad civil y accidentes de tránsito.',
        areaServed: 'AR',
        knowsAbout: ['Derecho de Daños', 'Responsabilidad Civil', 'Accidentes de Tránsito', 'Derecho de Seguros'],
    },
};

/* =========================
   PAGE
   ========================= */
export default function SobreNosotrosPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <Header />

            {/* ============================
                HERO + BREADCRUMBS
                ============================ */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
                        <ol>
                            <li><Link href="/">Inicio</Link></li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page">Sobre Nosotros</li>
                        </ol>
                    </nav>

                    <h1 className={styles.heroTitle}>Sobre Nosotros</h1>
                    <p className={styles.heroSubtitle}>
                        Un equipo de abogados especializados en derecho de daños,
                        comprometidos con la defensa de tus derechos y la obtención
                        del máximo resarcimiento.
                    </p>
                </div>
            </section>

            {/* ============================
                GALERÍA DEL ESTUDIO
                ============================ */}
            <section className={styles.teamSection} aria-labelledby="gallery-title">
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Nuestro Estudio</span>
                        <h2 id="gallery-title" className={styles.sectionTitle}>
                            Conocé nuestro espacio
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Un equipo humano y un espacio pensado para escucharte
                            y acompañarte.
                        </p>
                    </Reveal>

                    <Reveal delay={120}>
                        <GalleryCarousel slides={gallery} />
                    </Reveal>
                </div>
            </section>

            {/* ============================
                BIO
                ============================ */}
            <section className={styles.bioSection} aria-labelledby="about-title">
                <div className={styles.container}>
                    <div className={styles.bioGrid}>
                        <Reveal className={styles.bioImageWrap}>
                            <Image
                                src={encodeURI('/estudio/integrante-1.webp')}
                                alt="Interior del estudio jurídico"
                                fill
                                sizes="(max-width: 1024px) 100vw, 460px"
                                className={styles.bioImage}
                            />
                        </Reveal>

                        <Reveal delay={150} className={styles.bioText}>
                            <span className={styles.sectionTag}>Nuestra Historia</span>
                            <h2 id="about-title" className={styles.bioTitle}>
                                Más de 25 años defendiendo tus derechos
                            </h2>
                            <p>
                                Nuestro estudio fue fundado con la convicción de que
                                toda persona que sufre un daño merece una defensa
                                técnica rigurosa y un trato humano. Desde entonces,
                                hemos acompañado a cientos de clientes en la búsqueda
                                de una reparación justa.
                            </p>
                            <p>
                                Nos especializamos exclusivamente en{' '}
                                <strong>derecho de daños</strong>,{' '}
                                <strong>responsabilidad civil</strong> y{' '}
                                <strong>accidentes de tránsito</strong>, lo que nos
                                permite ofrecer un conocimiento profundo y
                                actualizado de cada materia.
                            </p>
                            <p>
                                Trabajamos con una metodología clara: escuchamos,
                                evaluamos, trazamos una estrategia y comunicamos
                                cada avance al cliente. Sin sorpresas, sin letra chica.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* ============================
                CIFRAS
                ============================ */}
            <section className={styles.statsSection} aria-labelledby="stats-title">
                <div className={styles.container}>
                    <h2 id="stats-title" className="sr-only">
                        Nuestros números
                    </h2>
                    <div className={styles.statsGrid}>
                        {stats.map((item, i) => (
                            <Reveal key={item.label} delay={i * 100}>
                                <div className={styles.statCard}>
                                    <div className={styles.statValue}>{item.value}</div>
                                    <div className={styles.statLabel}>{item.label}</div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================
                CERTIFICACIONES
                ============================ */}
            <section className={styles.certSection} aria-labelledby="cert-title">
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Trayectoria Académica</span>
                        <h2 id="cert-title" className={styles.sectionTitle}>
                            Formación y Certificaciones
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Una trayectoria académica sólida respalda cada caso
                            que tomamos.
                        </p>
                    </Reveal>

                    <ol className={styles.timeline}>
                        {certifications.map((cert, i) => (
                            <Reveal
                                as="li"
                                key={cert.year}
                                delay={i * 120}
                                className={styles.timelineItem}
                            >
                                <span className={styles.timelineDot} aria-hidden="true" />
                                <div className={styles.timelineYear}>{cert.year}</div>
                                <h3 className={styles.timelineTitle}>{cert.title}</h3>
                                <p className={styles.timelineInstitution}>
                                    {cert.institution}
                                </p>
                            </Reveal>
                        ))}
                    </ol>
                </div>
            </section>

            {/* ============================
                VALORES
                ============================ */}
            <section className={styles.valuesSection} aria-labelledby="values-title">
                <div className={styles.container}>
                    <Reveal className={styles.sectionHeader}>
                        <span className={styles.sectionTag}>Lo que nos define</span>
                        <h2 id="values-title" className={styles.sectionTitle}>
                            Nuestros Valores
                        </h2>
                    </Reveal>

                    <div className={styles.valuesGrid}>
                        {values.map((value, i) => (
                            <Reveal
                                as="article"
                                key={value.title}
                                delay={i * 120}
                                className={styles.valueCard}
                            >
                                <div className={styles.valueIcon}>{value.icon}</div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>
                                    {value.description}
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
                            ¿Necesitás asesoramiento?
                        </h2>
                        <p className={styles.ctaText}>
                            Contactanos para una primera consulta sin compromiso.
                            Vamos a escuchar tu caso y orientarte con honestidad.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link href="/#contacto" className={styles.ctaPrimary}>
                                Agendar Consulta
                            </Link>
                            <Link href="/servicios" className={styles.ctaSecondary}>
                                Ver Servicios
                            </Link>
                        </div>
                    </Reveal>
                </div>
            </section>

            <Footer />
        </>
    );
}