"use client";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";
import HeaderMain from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
	return (
		<>
			<HeaderMain />
			<FAQ />

			{/* ============================
			    SECCIÓN CONTACTO
			    id="contacto" permite el scroll desde el Header
			    ============================ */}
			<section id="contacto" className={styles.contactSection}>
				<div className={styles.container}>
					<div className={styles.sectionHeader}>
						<span className={styles.sectionTag}>Estamos para ayudarte</span>
						<h2 className={styles.sectionTitle}>Contactanos</h2>
						<p className={styles.sectionSubtitle}>
							Dejanos tu consulta y nos pondremos en contacto a la brevedad.
							La primera consulta es <strong>sin costo y sin compromiso</strong>.
						</p>
					</div>

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