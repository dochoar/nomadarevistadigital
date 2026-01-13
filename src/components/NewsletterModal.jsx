import React, { useState } from 'react';

const NewsletterModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        // ==========================================
        // CONFIGURACIÓN DE GOOGLE SHEETS
        // ==========================================
        // 1. Crea un Google Form con una pregunta: 'Correo'
        // 2. Obtén el 'Get pre-filled link' para ver el ID (ej. entry.123456)
        // 3. Pega los datos aquí abajo:

        const GOOGLE_FORM_ACTION_URL = "PEGAR_TU_URL_AQUI/formResponse";
        const EMAIL_ENTRY_ID = "entry.PEGAR_TU_NUMERO_AQUI";

        // Si no has configurado esto, se ejecutará una simulación
        if (GOOGLE_FORM_ACTION_URL.includes("PEGAR_TU_URL")) {
            setTimeout(() => {
                console.log(`Modo Simulación: Email ${email} recibido.`);
                console.log("Para guardar real, configura GOOGLE_FORM_ACTION_URL en NewsletterModal.jsx");
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                    setEmail('');
                }, 2000);
            }, 1000);
            return;
        }

        try {
            const formData = new FormData();
            formData.append(EMAIL_ENTRY_ID, email);

            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: 'POST',
                mode: 'no-cors', // Importante para que Google no bloquee el envío
                body: formData
            });

            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setEmail('');
            }, 3000);

        } catch (error) {
            console.error("Error al suscribir", error);
            setStatus('error');
        }
    };

    return (
        <div className="newsletter-modal-overlay" onClick={onClose}>
            <div className="newsletter-modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-modal-btn" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <h2>📬 Suscríbete a nuestro Boletín</h2>
                    <p>Recibe las mejores guías, eventos y secretos de Morelos directamente en tu correo.</p>
                </div>

                {status === 'success' ? (
                    <div className="success-message">
                        <h3>¡Gracias por suscribirte!</h3>
                        <p>Pronto recibirás noticias nuestras.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="newsletter-input"
                        />
                        <button
                            type="submit"
                            className="btn-submit-newsletter"
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? 'Guardando...' : 'Suscribirme'}
                        </button>
                        <p className="privacy-note">
                            * Guardaremos tu correo de forma segura. Sin spam.
                        </p>
                    </form>
                )}
            </div>
        </div>
    );
};

export default NewsletterModal;
