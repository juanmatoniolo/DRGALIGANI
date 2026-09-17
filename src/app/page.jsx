"use client";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo"; // <-- Importamos el nuevo componente
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import HeaderMain from "./components/Header";
import styles from "./page.module.css"; // <-- Asegurate de crear este archivo

export default function Home() {
	return (
		<>
			<HeaderMain />
			<FAQ />

			{/* ============================
			    SECCIÓN CONTACTO REDISEÑADA
			    ============================ */}
			<section className={styles.contactSection}>
				<div className={styles.container}>
					{/* Encabezado de la sección */}
					<div className={styles.sectionHeader}>
						<span className={styles.sectionTag}>Estamos para ayudarte</span>
						<h2 className={styles.sectionTitle}>Contactanos</h2>
						<p className={styles.sectionSubtitle}>
							Dejanos tu consulta y nos pondremos en contacto a la brevedad.
							La primera consulta es <strong>sin costo y sin compromiso</strong>.
						</p>
					</div>

					{/* Grid principal: Info + Formulario */}
					<div className={styles.contactGrid}>
						<div className={styles.infoColumn}>
							<ContactInfo />
						</div>
						<div className={styles.formColumn}>
							<div className={styles.formCard}>
								<ContactForm />
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
}