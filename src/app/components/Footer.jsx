'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const navigation = [
	{ label: 'Inicio', href: '/' },
	{ label: 'Sobre Nosotros', href: '/sobre-nosotros' },
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Contacto', href: '/contacto' },
	{ label: 'FAQ', href: '/#faq' },
];

const services = [
	{ label: 'Responsabilidad Civil', href: '/servicios/responsabilidad-civil' },
	{ label: 'Derecho de Seguros', href: '/servicios/derecho-seguros' },
	{ label: 'Accidentes de Tránsito', href: '/servicios/accidentes-transito' },
	{ label: 'Riesgos del Trabajo', href: '/servicios/riesgos-trabajo' },
];

const legal = [
	{ label: 'Política de Privacidad', href: '/politica-privacidad' },
	{ label: 'Términos de Servicio', href: '/terminos-servicio' },
	{ label: 'Aviso Legal', href: '/aviso-legal' },
];

const socialMedia = [
	{
		name: 'LinkedIn',
		icon: '🔗',
		url: 'https://linkedin.com',
		label: 'Síguenos en LinkedIn',
	},
	{
		name: 'WhatsApp',
		icon: '💬',
		url: 'https://wa.me/5491140000000',
		label: 'Contáctanos por WhatsApp',
	},
	{
		name: 'Instagram',
		icon: '📷',
		url: 'https://instagram.com',
		label: 'Síguenos en Instagram',
	},
	{
		name: 'Facebook',
		icon: '👥',
		url: 'https://facebook.com',
		label: 'Síguenos en Facebook',
	},
];

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			{/* Main Footer Content */}
			<div className={styles.container}>
				{/* Column 1: About */}
				<div className={styles.column}>
					<h3 className={styles.columnTitle}>Estudio Jurídico</h3>
					<p className={styles.columnText}>
						Especialistas en derecho de daños con más de 25 años de experiencia.
						Recuperamos tus derechos.
					</p>
					<div className={styles.socialLinks}>
						{socialMedia.map((social) => (
							<a
								key={social.name}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className={styles.socialIcon}
								aria-label={social.label}
								title={social.label}
							>
								<span>{social.icon}</span>
							</a>
						))}
					</div>
				</div>

				{/* Column 2: Navigation */}
				<div className={styles.column}>
					<h3 className={styles.columnTitle}>Navegación</h3>
					<nav className={styles.navLinks}>
						{navigation.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={styles.link}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>

				{/* Column 3: Services */}
				<div className={styles.column}>
					<h3 className={styles.columnTitle}>Servicios</h3>
					<nav className={styles.navLinks}>
						{services.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={styles.link}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>

				{/* Column 4: Contact */}
				<div className={styles.column}>
					<h3 className={styles.columnTitle}>Contacto</h3>
					<div className={styles.contactInfo}>
						<div className={styles.contactItem}>
							<span className={styles.contactIcon}>📍</span>
							<p className={styles.contactText}>
								Buenos Aires, Argentina
							</p>
						</div>
						<div className={styles.contactItem}>
							<span className={styles.contactIcon}>☎️</span>
							<a href="tel:+5491140000000" className={styles.contactLink}>
								+54 911 4000-0000
							</a>
						</div>
						<div className={styles.contactItem}>
							<span className={styles.contactIcon}>📧</span>
							<a
								href="mailto:consulta@estudio.com"
								className={styles.contactLink}
							>
								consulta@estudio.com
							</a>
						</div>
						<div className={styles.contactItem}>
							<span className={styles.contactIcon}>🕐</span>
							<p className={styles.contactText}>
								Lun-Vie 9:00 - 18:00
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Divider */}
			<div className={styles.divider}></div>

			{/* Bottom Footer */}
			<div className={styles.bottomFooter}>
				<div className={styles.bottomContainer}>
					<div className={styles.copyright}>
						<p>
							© {currentYear} Estudio Jurídico. Todos los derechos
							reservados.
						</p>
					</div>

					<nav className={styles.legalLinks}>
						{legal.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={styles.legalLink}
							>
								{item.label}
							</Link>
						))}
					</nav>
				</div>
			</div>

			{/* CTA Sticky Button Mobile — en Footer.jsx */}
			<div className={styles.mobileCtaBar}>
				<Link href="/#contacto" className={styles.mobileCtaButton}>
					Consultar Ahora
				</Link>
			</div>
		</footer>
	);
}