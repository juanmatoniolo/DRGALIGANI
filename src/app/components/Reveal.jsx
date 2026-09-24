'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Envuelve secciones y las revela suavemente al entrar en viewport.
 * Respeta prefers-reduced-motion.
 *
 * @param {number} delay - ms de retraso (para stagger)
 * @param {string} as - etiqueta HTML a renderizar (default: 'div')
 */
export default function Reveal({
    children,
    delay = 0,
    as: Tag = 'div',
    className = '',
}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Si el usuario prefiere menos movimiento, mostrar directo
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`${styles.reveal} ${visible ? styles.visible : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}