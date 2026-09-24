import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './page.module.css';

export const metadata = {
    title: 'Política de Privacidad',
    description:
        'Política de privacidad del Estudio Jurídico Dr. Galígani. Tratamiento de datos personales conforme a la Ley 25.326 de Protección de Datos Personales.',
    alternates: { canonical: '/politica-privacidad' },
    robots: { index: true, follow: true },
};
export default function PoliticaPrivacidadPage() {
    const lastUpdate = '10 de octubre de 2025';

    return (
        <>
            <Header />

            <section className={styles.hero}>
                <div className={styles.container}>
                    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
                        <ol>
                            <li><Link href="/">Inicio</Link></li>
                            <li aria-hidden="true">/</li>
                            <li aria-current="page">Política de Privacidad</li>
                        </ol>
                    </nav>
                    <h1 className={styles.heroTitle}>Política de Privacidad</h1>
                    <p className={styles.heroSubtitle}>
                        Última actualización: {lastUpdate}
                    </p>
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.container}>
                    <article className={styles.prose}>
                        <h2>1. Responsable del tratamiento</h2>
                        <p>
                            El responsable del tratamiento de los datos personales
                            recopilados a través de este sitio web es el
                            <strong> Estudio Jurídico Dr. Galígani</strong>, con
                            domicilio en la Ciudad Autónoma de Buenos Aires,
                            República Argentina.
                        </p>
                        <p>
                            Correo de contacto:{' '}
                            <a href="mailto:contacto@dominio.com">
                                contacto@dominio.com
                            </a>
                        </p>

                        <h2>2. Marco legal</h2>
                        <p>
                            El tratamiento de los datos personales se realiza en
                            cumplimiento de la <strong>Ley Nacional N° 25.326 de
                                Protección de los Datos Personales</strong>, su Decreto
                            Reglamentario N° 1558/2001 y las disposiciones de la
                            Dirección Nacional de Protección de Datos Personales,
                            órgano de control de la citada ley[reference:0].
                        </p>

                        <h2>3. Datos que recopilamos</h2>
                        <p>
                            A través de los formularios de contacto de este sitio,
                            podemos recopilar los siguientes datos:
                        </p>
                        <ul>
                            <li>Nombre y apellido</li>
                            <li>Dirección de correo electrónico</li>
                            <li>Número de teléfono / WhatsApp</li>
                            <li>Descripción del caso o consulta jurídica</li>
                            <li>Dirección IP y datos de navegación (cookies técnicas)</li>
                        </ul>

                        <h2>4. Finalidad del tratamiento</h2>
                        <p>
                            Los datos personales son utilizados exclusivamente para:
                        </p>
                        <ul>
                            <li>Responder a tu consulta jurídica</li>
                            <li>Coordinar una eventual reunión o consulta profesional</li>
                            <li>Enviarte información relacionada con tu caso</li>
                            <li>Cumplir con obligaciones legales y profesionales</li>
                        </ul>
                        <p>
                            <strong>No utilizamos tus datos para fines publicitarios
                                ni los compartimos con terceros ajenos al estudio</strong>,
                            salvo obligación legal o consentimiento expreso.
                        </p>

                        <h2>5. Confidencialidad profesional</h2>
                        <p>
                            Todos los datos y el contenido de las consultas están
                            amparados por el <strong>secreto profesional
                                abogado-cliente</strong>, conforme a las normas del
                            Código de Ética del Colegio de Abogados de la Ciudad
                            de Buenos Aires.
                        </p>

                        <h2>6. Conservación de los datos</h2>
                        <p>
                            Los datos se conservarán durante el tiempo necesario
                            para atender tu consulta y, en su caso, durante el
                            plazo de prescripción de las acciones legales
                            aplicables. Una vez cumplida la finalidad, los datos
                            serán eliminados de forma segura.
                        </p>

                        <h2>7. Tus derechos (Ley 25.326)</h2>
                        <p>
                            Como titular de los datos personales, tenés derecho a:
                        </p>
                        <ul>
                            <li>
                                <strong>Acceder</strong> a tus datos personales en
                                forma gratuita a intervalos no inferiores a seis
                                meses, salvo que acredites un interés legítimo
                                conforme al artículo 14, inciso 3 de la Ley 25.326[reference:1].
                            </li>
                            <li>
                                <strong>Rectificar</strong> datos inexactos o
                                incompletos.
                            </li>
                            <li>
                                <strong>Suprimir</strong> datos cuando no sean
                                necesarios para la finalidad para la que fueron
                                recopilados.
                            </li>
                            <li>
                                <strong>Confidencialidad</strong> de los datos
                                sensibles.
                            </li>
                        </ul>
                        <p>
                            Para ejercer estos derechos, podés escribirnos a{' '}
                            <a href="mailto:contacto@dominio.com">
                                contacto@dominio.com
                            </a>
                            . La Dirección Nacional de Protección de Datos
                            Personales es el órgano de control de la Ley 25.326.
                        </p>

                        <h2>8. Cookies</h2>
                        <p>
                            Este sitio utiliza cookies técnicas necesarias para
                            su funcionamiento. Para más información, consultá
                            nuestra sección de{' '}
                            <Link href="#cookies">consentimiento de cookies</Link>.
                        </p>

                        <h2>9. Cambios en esta política</h2>
                        <p>
                            Nos reservamos el derecho de actualizar esta política
                            para reflejar cambios normativos o en nuestras
                            prácticas. La fecha de última actualización se indica
                            al inicio de este documento.
                        </p>
                    </article>
                </div>
            </section>

            <Footer />
        </>
    );
}