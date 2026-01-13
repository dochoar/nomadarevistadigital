import React from 'react';
import videoBg from '../assets/balneario.mp4';

const HeroSection = () => {
    return (
        <section className="hero">
            <video
                src={videoBg}
                autoPlay
                loop
                muted
                playsInline
                className="hero-bg"
            />
            <div className="hero-overlay">
                <div className="hero-content">
                    <span className="hero-rubric">Explora</span>
                    <h1 className="hero-title">Morelos: La Eterna Primavera</h1>
                    <p className="hero-desc">Descubre la magia de Tepoztlán, la frescura de nuestros balnearios y la historia que vive en cada rincón.</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
