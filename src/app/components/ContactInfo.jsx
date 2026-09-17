// components/ContactInfo.jsx
'use client';

import styles from './ContactInfo.module.css';

const contactData = [
    {
        id: 1,
        icon: '📍',
        title: 'Dirección',
        content: 'Buenos Aires, Argentina',
    },
    {
        id: 2,
        icon: '📞',
        title: 'Teléfono / WhatsApp',
        content: '+54 911 4000-0000',
        href: 'tel:+5491140000000',
    },
    {
        id: 3,
        icon: '✉️',
        title: 'Email',
        content: 'consulta@estudio.com',
        href: 'mailto:consulta@estudio.com',
    },
    {
        id: 4,
        icon: '🕐',
        title: 'Horario de atención',
        content: 'Lunes a Viernes · 9:00 - 18:00',
    },
];

export default function ContactInfo() {
    return (
        <div className={styles.infoCard}>
            <h3 className={styles.infoTitle}>Información de contacto</h3>
            <p className={styles.infoSubtitle}>
                Podés comunicarte con nosotros por cualquiera de estos medios.
            </p>

            <ul className={styles.infoList}>
                {contactData.map((item) => (
                    <li key={item.id} className={styles.infoItem}>
                        <div className={styles.iconBox}>{item.icon}</div>
                        <div className={styles.infoContent}>
                            <span className={styles.infoLabel}>{item.title}</span>
                            {item.href ? (
                                <a href={item.href} className={styles.infoLink}>
                                    {item.content}
                                </a>
                            ) : (
                                <span className={styles.infoText}>{item.content}</span>
                            )}
                        </div>
                    </li>
                ))}
            </ul>

            <div className={styles.infoFooter}>
                <p>🔒 Tus datos son tratados de forma confidencial.</p>
            </div>
        </div>
    );
}