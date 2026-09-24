'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!('serviceWorker' in navigator)) return;

        // En desarrollo, Next.js con Turbopack puede chocar con el SW.
        // Registramos solo en producción.
        if (process.env.NODE_ENV !== 'production') return;

        const register = () => {
            navigator.serviceWorker
                .register('/sw.js', { scope: '/' })
                .then((reg) => {
                    console.log('[SW] Registrado:', reg.scope);

                    // Buscar updates cada 60 minutos
                    setInterval(() => reg.update(), 60 * 60 * 1000);
                })
                .catch((err) => {
                    console.error('[SW] Error al registrar:', err);
                });
        };

        if (document.readyState === 'complete') {
            register();
        } else {
            window.addEventListener('load', register);
            return () => window.removeEventListener('load', register);
        }
    }, []);

    return null;
}