'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import styles from './TeamCarousel.module.css';

export default function TeamCarousel({ members = [] }) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const total = members.length;

    const goTo = useCallback(
        (i) => setCurrent(((i % total) + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    // Autoplay (pausa en hover/focus)
    useEffect(() => {
        if (isPaused || total <= 1) return;
        const id = setInterval(next, 6000);
        return () => clearInterval(id);
    }, [isPaused, next, total]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };

    if (total === 0) return null;

    return (
        <div
            className={styles.carouselWrapper}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Integrantes del estudio"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
        >
            <div className={styles.viewport}>
                {members.map((member, i) => {
                    // Distancia relativa al actual (con wrap-around)
                    let offset = i - current;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    const isActive = offset === 0;
                    const abs = Math.abs(offset);
                    const visible = abs <= 1;

                    const scale = isActive ? 1 : 0.85;
                    const opacity = isActive ? 1 : visible ? 0.5 : 0;
                    const zIndex = isActive ? 20 : 10 - abs;

                    return (
                        <article
                            key={member.name}
                            aria-hidden={!isActive}
                            aria-roledescription="slide"
                            aria-label={`${i + 1} de ${total}: ${member.name}`}
                            className={styles.slide}
                            style={{
                                // 'left' es % del CONTENEDOR → centra correctamente.
                                // offset=0 → 50% (centro); offset=±1 → ±62% del contenedor.
                                left: `calc(50% + ${offset * 62}%)`,
                                // translateX(-50%) centra el propio slide sobre ese punto.
                                transform: `translateX(-50%) scale(${scale})`,
                                opacity,
                                zIndex,
                                pointerEvents: isActive ? 'auto' : 'none',
                            }}
                        >
                            <div className={styles.slideInner}>
                                <Image
                                    src={member.image}
                                    alt={`${member.name} — ${member.role}`}
                                    fill
                                    sizes="(max-width: 480px) 85vw, (max-width: 768px) 78vw, 460px"
                                    className={styles.slideImage}
                                    priority={i === 0}
                                />

                                {/* Overlay semitransparente (tono profesional) */}
                                <div className={styles.overlay} aria-hidden="true" />

                                <div className={styles.slideContent}>
                                    <h3 className={styles.name}>{member.name}</h3>
                                    <p className={styles.role}>{member.role}</p>
                                    {isActive && member.bio && (
                                        <p className={styles.bio}>{member.bio}</p>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>

            {/* Controles */}
            <div className={styles.controls}>
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Integrante anterior"
                    className={styles.arrow}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="20" height="20" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className={styles.dots} role="tablist" aria-label="Seleccionar integrante">
                    {members.map((member, i) => (
                        <button
                            key={member.name}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Ir a ${member.name}`}
                            onClick={() => goTo(i)}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente integrante"
                    className={styles.arrow}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="20" height="20" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}