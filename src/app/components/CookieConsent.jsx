'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieConsent.module.css';

const STORAGE_KEY = 'cookie-consent-v1';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) setVisible(true);
        } catch {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                analytics: true,
                timestamp: new Date().toISOString(),
            }));
        } catch { }
        setVisible(false);
    };

    const reject = () => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({
                analytics: false,
                timestamp: new Date().toISOString(),
            }));
        } catch { }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            className={styles.banner}
            role="dialog"
            aria-live="polite"
            aria-label="Consentimiento de cookies"
        >
            <div className={styles.content}>
                <p className={styles.text}>
                    Usamos cookies técnicas y analíticas para mejorar tu
                    experiencia. Podés aceptarlas o rechazar las no esenciales.
                    Más información en nuestra{' '}
                    <Link href="/politica-privacidad" className={styles.link}>
                        Política de Privacidad
                    </Link>
                    .
                </p>
                <div className={styles.actions}>
                    <button
                        type="button"
                        onClick={reject}
                        className={styles.btnReject}
                    >
                        Rechazar
                    </button>
                    <button
                        type="button"
                        onClick={accept}
                        className={styles.btnAccept}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    );
}