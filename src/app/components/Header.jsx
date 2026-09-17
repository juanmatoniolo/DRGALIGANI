'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

/*
  Navegación:
  - Inicio             -> /           (página actual)
  - Sobre Nosotros     -> /sobre-nosotros (otra pestaña/página)
  - Servicios          -> /servicios      (otra pestaña/página)
  - Contacto           -> #contacto       (ancla a la sección de la home)
*/
const navigation = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Sobre Nosotros', href: '/sobre-nosotros' },
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Contacto', href: '#contacto' }, // <-- ahora es ancla
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<>
			{/* Navbar Sticky */}
			<nav className={styles.navbar}>
				<div className={styles.navContainer}>
					<Link href="/" className={styles.logo}>
						<span className={styles.logoText}>Estudio Jurídico</span>
					</Link>

					{/* Menu Desktop */}
					<div className={styles.navMenu}>
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={styles.navLink}
							>
								{item.label}
							</Link>
						))}
					</div>

					{/* CTA Button Desktop -> va al ancla de contacto */}
					<Link href="#contacto" className={styles.ctaButton}>
						Consultar
					</Link>

					{/* Hamburger Menu Mobile */}
					<button
						className={styles.hamburger}
						onClick={toggleMobileMenu}
						aria-label="Toggle menu"
						aria-expanded={mobileMenuOpen}
					>
						<span className={styles.hamburgerLine}></span>
						<span className={styles.hamburgerLine}></span>
						<span className={styles.hamburgerLine}></span>
					</button>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className={styles.mobileMenu}>
						<button
							className={styles.closeButton}
							onClick={closeMobileMenu}
							aria-label="Close menu"
						>
							✕
						</button>
						<div className={styles.mobileMenuContent}>
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={styles.mobileNavLink}
									onClick={closeMobileMenu}
								>
									{item.label}
								</Link>
							))}
							<Link
								href="#contacto"
								className={styles.mobileCta}
								onClick={closeMobileMenu}
							>
								Consultar
							</Link>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Banner Section */}
			<header className={styles.hero}>
				<div
					className={styles.heroBg}
					style={{
						backgroundImage:
							"linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(5, 150, 105, 0.85) 100%), url('/imagenes/banner.jpg')",
						backgroundSize: 'cover',
						backgroundPosition: 'center',
					}}
				></div>

				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						Especialista en Derecho de Daños
					</h1>
					<p className={styles.heroSubtitle}>
						Más de 25 años de experiencia profesional
					</p>
					<Link href="#contacto" className={styles.heroCta}>
						Consultar Ahora
					</Link>
				</div>
			</header>
		</>
	);
}