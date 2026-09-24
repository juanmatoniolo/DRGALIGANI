'use client';

import Reveal from './Reveal';
import styles from './Credentials.module.css';

/* =========================
   TÍTULOS Y ESPECIALIZACIONES
   ========================= */
const titulos = [
    {
        year: '2009',
        title: 'Especialista en Derecho de Daños',
        institution: 'Universidad Católica Argentina',
        destacado: true,
    },
    {
        year: '2009',
        title: 'Abogado',
        institution: 'Facultad de Derecho',
        destacado: true,
    },
    {
        year: '1993',
        title: 'Perito Mercantil Nacional',
        institution: 'Esc. Gral. Manuel Belgrano',
    },
    {
        year: '1989',
        title: 'Operador-Programador Basic',
        institution: 'CEDI',
    },
];

/* =========================
   CARGOS INSTITUCIONALES
   ========================= */
const cargos = [
    {
        period: '2024 – 2027',
        title: 'Juez del Tribunal de Ética',
        institution: 'Colegio de Abogados',
    },
    {
        period: '2022 – 2023',
        title: 'Presidente Honorario',
        institution: 'Colegio de Abogados',
    },
    {
        period: '2018 – 2019',
        title: 'Presidente Instituto de Derecho de Daños',
        institution: 'Colegio de Abogados',
    },
    {
        period: '2014 – 2015',
        title: 'Presidente Instituto de Derecho de Daños',
        institution: 'Colegio de Abogados',
    },
    {
        period: '2009',
        title: 'Adscripto a la Cátedra Dr. Andrada',
        institution: 'Universidad Católica Argentina',
    },
    {
        period: '2024',
        title: '25 años de matriculación',
        institution: 'Colegio de Abogados',
    },
];

/* =========================
   ÁREAS DE FORMACIÓN CONTINUA
   (chips/badges, no listado año por año)
   ========================= */
const areasFormacion = [
    'Derecho de Daños',
    'Responsabilidad Civil',
    'Derecho de Seguros',
    'Accidentes de Tránsito',
    'Riesgos del Trabajo',
    'Reformas al Código Civil y Comercial',
    'Derecho Procesal',
    'Responsabilidad del Estado',
    'Ética Profesional',
    'Juicio Oral',
];

/* =========================
   COMPONENTE
   ========================= */
export default function Credentials() {
    return (
        <section className={styles.credentials} aria-labelledby="credentials-title">
            <div className={styles.container}>
                <Reveal className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>Respaldo profesional</span>
                    <h2 id="credentials-title" className={styles.sectionTitle}>
                        Trayectoria y credenciales
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Más de tres décadas de formación académica continua y
                        compromiso con la profesión.
                    </p>
                </Reveal>

                {/* --------- TÍTULOS --------- */}
                <div className={styles.block}>
                    <h3 className={styles.blockTitle}>Títulos y especializaciones</h3>
                    <div className={styles.titulosGrid}>
                        {titulos.map((t, i) => (
                            <Reveal
                                key={`${t.year}-${t.title}`}
                                delay={i * 80}
                                className={`${styles.tituloCard} ${t.destacado ? styles.tituloDestacado : ''
                                    }`}
                            >
                                <span className={styles.tituloYear}>{t.year}</span>
                                <h4 className={styles.tituloTitle}>{t.title}</h4>
                                <p className={styles.tituloInstitution}>{t.institution}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* --------- CARGOS --------- */}
                <div className={styles.block}>
                    <h3 className={styles.blockTitle}>Cargos institucionales</h3>
                    <div className={styles.cargosGrid}>
                        {cargos.map((c, i) => (
                            <Reveal
                                key={`${c.period}-${c.title}`}
                                delay={i * 80}
                                className={styles.cargoCard}
                            >
                                <span className={styles.cargoPeriod}>{c.period}</span>
                                <h4 className={styles.cargoTitle}>{c.title}</h4>
                                <p className={styles.cargoInstitution}>{c.institution}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/*  
                <div className={styles.block}>
                    <h3 className={styles.blockTitle}>Formación continua</h3>

                    <Reveal className={styles.formacionCard}>
                        <p className={styles.formacionLead}>
                            Desde <strong>1991</strong> y de manera ininterrumpida,
                            nuestro equipo se capacita en los principales foros
                            académicos del país. A lo largo de más de tres décadas
                            hemos participado en <strong>incontables seminarios,
                                congresos, jornadas y cursos de posgrado</strong>,
                            incluyendo la actualización permanente frente a las
                            reformas del <strong>Código Civil y Comercial</strong>{' '}
                            y del sistema de riesgos del trabajo.
                        </p>
                        <p className={styles.formacionNote}>
                            Algunas de las áreas de actualización más frecuentes:
                        </p>

                        <ul className={styles.areasList}>
                            {areasFormacion.map((area) => (
                                <li key={area} className={styles.areaChip}>
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                </div> */}
            </div>
        </section>
    );
}