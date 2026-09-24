import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './not-found.module.css';

export const metadata = {
    title: 'Página no encontrada',
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <>
            <Header />
            <section className={styles.wrapper}>
                <div className={styles.container}>
                    <span className={styles.code}>404</span>
                    <h1 className={styles.title}>Página no encontrada</h1>
                    <p className={styles.text}>
                        La página que buscás no existe o fue movida.
                        Podés volver al inicio o contactarnos directamente.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/" className={styles.primary}>
                            Volver al inicio
                        </Link>
                        <Link href="/#contacto" className={styles.secondary}>
                            Contactanos
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}