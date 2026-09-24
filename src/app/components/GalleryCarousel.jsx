'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GalleryCarousel.module.css';

/*
  slides: [
    { image: '/estudio/estudio%20(1).webp', caption: 'Nuestro equipo' },
    ...
  ]
*/
export default function GalleryCarousel({ slides = [] }) {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const total = slides.length;

    /* ============================================
       ESTADO DEL SWIPE (drag)
       ============================================ */
    const [dragX, setDragX] = useState(0);        // desplazamiento en px mientras arrastra
    const [isDragging, setIsDragging] = useState(false);

    const touchStart = useRef({ x: 0, y: 0, time: 0 });
    const axisLock = useRef(null);                // 'x' | 'y' | null

    const goTo = useCallback(
        (i) => setCurrent(((i % total) + total) % total),
        [total]
    );
    const next = useCallback(() => goTo(current + 1), [current, goTo]);
    const prev = useCallback(() => goTo(current - 1), [current, goTo]);

    /* Autoplay */
    useEffect(() => {
        if (isPaused || isDragging || total <= 1) return;
        const id = setInterval(next, 6000);
        return () => clearInterval(id);
    }, [isPaused, isDragging, next, total]);

    /* Teclado */
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
    };

    /* ============================================
       TOUCH HANDLERS
       ============================================ */
    const handleTouchStart = (e) => {
        const t = e.touches[0];
        touchStart.current = { x: t.clientX, y: t.clientY, time: Date.now() };
        axisLock.current = null;
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        const t = e.touches[0];
        const dx = t.clientX - touchStart.current.x;
        const dy = t.clientY - touchStart.current.y;

        // Bloquea el eje en el primer movimiento dominante
        if (!axisLock.current) {
            if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
                axisLock.current = 'x';
            } else if (Math.abs(dy) > 8) {
                axisLock.current = 'y';
            }
        }

        // Solo interceptamos si el gesto es horizontal
        if (axisLock.current === 'x') {
            // Evita el scroll vertical mientras arrastramos horizontalmente
            e.preventDefault();
            setDragX(dx);
        }
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;

        const dx = dragX;
        const elapsed = Date.now() - touchStart.current.time;
        const velocity = Math.abs(dx) / Math.max(elapsed, 1); // px/ms

        // Umbrales: distancia (60px) o velocidad (0.5 px/ms = swipe rápido)
        const DIST_THRESHOLD = 60;
        const VELOCITY_THRESHOLD = 0.5;

        if (Math.abs(dx) > DIST_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
            if (dx < 0) next();
            else prev();
        }

        setDragX(0);
        setIsDragging(false);
        axisLock.current = null;
    };

    if (total === 0) return null;

    return (
        <div
            className={styles.carouselWrapper}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Galería del estudio"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            /* Touch */
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
        >
            <div className={styles.viewport}>
                {slides.map((slide, i) => {
                    let offset = i - current;
                    if (offset > total / 2) offset -= total;
                    if (offset < -total / 2) offset += total;

                    const isActive = offset === 0;
                    const abs = Math.abs(offset);
                    const visible = abs <= 1;

                    const scale = isActive ? 1 : 0.85;
                    const opacity = isActive ? 1 : visible ? 0.5 : 0;
                    const zIndex = isActive ? 20 : 10 - abs;

                    // El slide activo sigue el dedo; los laterales también, un poco menos
                    const dragOffsetPx = isActive
                        ? dragX
                        : dragX * 0.25;

                    return (
                        <article
                            key={slide.image}
                            aria-hidden={!isActive}
                            aria-roledescription="slide"
                            aria-label={`${i + 1} de ${total}`}
                            className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}
                            style={{
                                left: `calc(50% + ${offset * 62}%)`,
                                transform: `translateX(calc(-50% + ${dragOffsetPx}px)) scale(${scale})`,
                                opacity,
                                zIndex,
                                pointerEvents: isActive ? 'auto' : 'none',
                                // Durante el drag, sin transición para que siga el dedo 1:1
                                transition: isDragging
                                    ? 'none'
                                    : undefined,
                            }}
                        >
                            <div className={styles.slideInner}>
                                <Image
                                    src={slide.image}
                                    alt={slide.caption || `Foto ${i + 1} del estudio jurídico`}
                                    fill
                                    sizes="(max-width: 480px) 85vw, (max-width: 768px) 78vw, 460px"
                                    className={styles.slideImage}
                                    style={{ objectPosition: slide.position || 'center' }}
                                    priority={i === 0}
                                    draggable={false}
                                />

                                <div className={styles.overlay} aria-hidden="true" />

                                {slide.caption && (
                                    <div
                                        className={`${styles.slideCaption} ${isActive ? styles.captionVisible : ''
                                            }`}
                                    >
                                        <p className={styles.captionText}>{slide.caption}</p>
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>

            <div className={styles.controls}>
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Foto anterior"
                    className={styles.arrow}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" width="20" height="20" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <div className={styles.dots} role="tablist" aria-label="Seleccionar foto">
                    {slides.map((slide, i) => (
                        <button
                            key={slide.image}
                            type="button"
                            role="tab"
                            aria-selected={i === current}
                            aria-label={`Ir a la foto ${i + 1}`}
                            onClick={() => goTo(i)}
                            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        />
                    ))}
                </div>

                <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente foto"
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