// components/ContactForm.jsx
'use client';

import { useState } from 'react';
import { database } from '../../lib/firebase'; // <-- Asegurate de que la ruta sea correcta
import { ref, push, serverTimestamp } from 'firebase/database';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        celular: '',
        email: '',
        descripcion: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        const { nombre, celular, email, descripcion } = formData;

        if (!nombre.trim()) {
            newErrors.nombre = 'El nombre es obligatorio.';
        }

        if (!descripcion.trim()) {
            newErrors.descripcion = 'La descripción de la consulta es obligatoria.';
        }

        if (!celular.trim() && !email.trim()) {
            newErrors.contacto =
                'Debes proporcionar al menos un medio de contacto (celular o email).';
        }

        if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'El formato del email no es válido.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        if (!validate()) return;

        setIsSubmitting(true);

        try {
            const consultasRef = ref(database, 'consultas');

            const nuevaConsulta = {
                ...formData,
                fecha: serverTimestamp(),
            };

            await push(consultasRef, nuevaConsulta);

            setSubmitStatus('success');
            setFormData({ nombre: '', celular: '', email: '', descripcion: '' });
            setErrors({});
        } catch (error) {
            console.error('Error al guardar la consulta:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {/* Campo: Nombre */}
            <div className={styles.field}>
                <label htmlFor="nombre" className={styles.label}>
                    Nombre completo <span className={styles.required}>*</span>
                </label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
                    placeholder="Tu nombre y apellido"
                />
                {errors.nombre && <p className={styles.errorText}>{errors.nombre}</p>}
            </div>

            {/* Campo: Contacto (Celular / Email) */}
            <fieldset className={styles.fieldset}>
                <legend className={styles.label}>
                    Medio de contacto <span className={styles.required}>*</span>
                    <span className={styles.legendHint}>(al menos uno)</span>
                </legend>

                <div className={styles.contactGrid}>
                    <div className={styles.field}>
                        <label htmlFor="celular" className={styles.subLabel}>
                            Celular / WhatsApp
                        </label>
                        <input
                            type="tel"
                            name="celular"
                            id="celular"
                            value={formData.celular}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.contacto ? styles.inputError : ''
                                }`}
                            placeholder="+54 9 11 1234-5678"
                        />
                    </div>
                    <div className={styles.field}>
                        <label htmlFor="email" className={styles.subLabel}>
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.contacto || errors.email ? styles.inputError : ''
                                }`}
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                {errors.contacto && (
                    <p className={styles.errorText}>{errors.contacto}</p>
                )}
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
            </fieldset>

            {/* Campo: Descripción */}
            <div className={styles.field}>
                <label htmlFor="descripcion" className={styles.label}>
                    Breve descripción de tu consulta{' '}
                    <span className={styles.required}>*</span>
                </label>
                <textarea
                    name="descripcion"
                    id="descripcion"
                    rows={5}
                    value={formData.descripcion}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.descripcion ? styles.inputError : ''
                        }`}
                    placeholder="Contanos brevemente en qué podemos ayudarte..."
                />
                {errors.descripcion && (
                    <p className={styles.errorText}>{errors.descripcion}</p>
                )}
            </div>

            {/* Mensajes de estado */}
            {submitStatus === 'success' && (
                <div className={styles.alertSuccess}>
                    ¡Gracias! Tu consulta ha sido enviada. Nos pondremos en contacto a la
                    brevedad.
                </div>
            )}
            {submitStatus === 'error' && (
                <div className={styles.alertError}>
                    Hubo un error al enviar tu consulta. Por favor, intentá de nuevo más
                    tarde.
                </div>
            )}

            {/* Botón de envío */}
            <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitButton}
            >
                {isSubmitting ? 'Enviando...' : 'Enviar Consulta'}
            </button>

            {/* Nota legal */}
            <p className={styles.legalNote}>
                Al enviar aceptás nuestra{' '}
                <a href="/politica-privacidad" className={styles.legalLink}>
                    política de privacidad
                </a>
                .
            </p>
        </form>
    );
}