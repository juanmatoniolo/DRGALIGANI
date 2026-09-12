'use client';

import { useState } from 'react';
import styles from './Faq.module.css';

const faqData = [
	{
		id: 1,
		category: 'Accidentes de Tránsito',
		question: '¿Me chocaron y no sé qué hacer?',
		answer:
			'Lo primero es documentar todo: fotos del lugar, daños, testigos y patente del otro vehículo. No firmes nada sin asesoría legal. Tienes derecho a indemnización por daños materiales, lesiones y lucro cesante. Nuestro equipo especializado en accidentes de tránsito recupera el máximo posible para ti.',
		icon: '🚗',
	},
	{
		id: 2,
		category: 'Responsabilidad Civil',
		question: '¿Mi vecino dañó mi propiedad y no responde?',
		answer:
			'Eso es responsabilidad civil vecinal. Podés reclamar reparación o resarcimiento económico. Nuestros casos resueltos incluyen filtraciones, roturas de medianera, daños por construcción. El primer paso es una consulta donde evaluamos tu documentación y pruebas.',
		icon: '🏠',
	},
	{
		id: 3,
		category: 'Riesgos del Trabajo',
		question: '¿Tuve un accidente laboral, cuáles son mis derechos?',
		answer:
			'Tienes derecho a indemnización por ART (Aseguradora de Riesgos del Trabajo). Nuestro equipo especializado en riesgos del trabajo negocia para maximizar tu compensación. Incluye cobertura de tratamientos, incapacidad y daño moral. Actuamos rápido para proteger tus derechos.',
		icon: '⚠️',
	},
	{
		id: 4,
		category: 'Daño Emergente',
		question: '¿Puedo recuperar dinero gastado en reparaciones?',
		answer:
			'Sí. El daño emergente cubre todos los gastos reales para reparar o reemplazar lo dañado. El lucro cesante cubre ingresos que dejaste de ganar. La documentación es clave: presupuestos, recibos, comprobantes. Asesoramos sobre qué gastos son recuperables.',
		icon: '💰',
	},
	{
		id: 5,
		category: 'Plazos y Procesos',
		question: '¿Cuánto tiempo lleva resolver un caso de daños?',
		answer:
			'Buscamos acuerdos rápidos sin perder tus derechos. En negociación directa: 2-6 meses. En litigio ante juzgado: 1-3 años según complejidad. Cada caso es distinto. Primera consulta es sin costo y sin compromiso.',
		icon: '⏱️',
	},
	{
		id: 6,
		category: 'Honorarios',
		question: '¿Cuánto cuesta contratar un abogado?',
		answer:
			'Trabajamos con diferentes modalidades: honorarios por hora, porcentaje de la indemnización obtenida, o mixto. No cobras si no ganamos (opciones de contingencia). Primera consulta es gratuita para evaluar tu caso y explicar opciones de pago.',
		icon: '💼',
	},
	{
		id: 7,
		category: 'Derecho de Daños',
		question: '¿Qué cubre exactamente el derecho de daños?',
		answer:
			'Responsabilidad civil (daños causados a terceros), riesgos del trabajo, accidentes de tránsito, daños contractuales, daño ambiental, y daño moral. Si alguien o algo dañó tu patrimonio, salud o familia, podés reclamar indemnización. Evaluamos cada situación en profundidad.',
		icon: '⚖️',
	},
	{
		id: 8,
		category: 'Seguros',
		question: '¿Qué hago si el seguro rechaza mi reclamo?',
		answer:
			'Los seguros a veces rechazan injustamente. Contamos con especialización en derecho de seguros para cuestionar rechazos, negociar cobertura y, si es necesario, litigar. Defendemos tu derecho a la indemnización asegurada.',
		icon: '📋',
	},
];

export default function FAQ() {
	const [openId, setOpenId] = useState(null);

	const toggleAccordion = (id) => {
		setOpenId(openId === id ? null : id);
	};

	const categories = [...new Set(faqData.map((item) => item.category))];

	return (
		<section className={styles.faqSection}>
			<div className={styles.container}>
				{/* Header */}
				<div className={styles.header}>
					<h2 className={styles.title}>Preguntas Frecuentes</h2>
					<p className={styles.subtitle}>
						Resolvemos tus dudas sobre derecho de daños, responsabilidad civil y
						más
					</p>
				</div>

				{/* FAQ Accordion */}
				<div className={styles.faqContainer}>
					{faqData.map((item) => (
						<div
							key={item.id}
							className={`${styles.faqItem} ${
								openId === item.id ? styles.active : ''
							}`}
						>
							<button
								className={styles.faqButton}
								onClick={() => toggleAccordion(item.id)}
								aria-expanded={openId === item.id}
								aria-controls={`faq-${item.id}`}
							>
								<div className={styles.faqHeader}>
									<span className={styles.icon}>{item.icon}</span>
									<div className={styles.questionContainer}>
										<span className={styles.category}>
											{item.category}
										</span>
										<h3 className={styles.question}>{item.question}</h3>
									</div>
								</div>
								<span className={styles.toggleIcon}>
									{openId === item.id ? '−' : '+'}
								</span>
							</button>

							{openId === item.id && (
								<div
									id={`faq-${item.id}`}
									className={styles.faqAnswer}
								>
									<p className={styles.answerText}>{item.answer}</p>
									<a href="/contacto" className={styles.answerCta}>
										Consultar ahora →
									</a>
								</div>
							)}
						</div>
					))}
				</div>

				{/* CTA Final */}
				<div className={styles.ctaSection}>
					<h3 className={styles.ctaTitle}>¿Tu caso no está en la lista?</h3>
					<p className={styles.ctaText}>
						Contactanos para una consulta personalizada. Primera sesión sin costo.
					</p>
					<a href="/contacto" className={styles.ctaButton}>
						Agendar Consulta Gratuita
					</a>
				</div>
			</div>
		</section>
	);
}