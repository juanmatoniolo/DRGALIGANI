'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegister() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (!('serviceWorker' in navigator)) return;
        // En desarrollo los SW cachean agresivamente y molestan.
        // Solo registramos en producción.
        if (process.env.NODE_ENV !== 'production') return;

        const register = () => {
            navigator.serviceWorker
                .register('/sw.js', { scope: '/' })
                .then((reg) => {
                    console.log('[SW] Registrado:', reg.scope);
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