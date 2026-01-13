import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { restaurants, serviceCategories } from '../data/restaurants';
import heroImg from '../assets/gastronomy-hero.png';
import GallerySection from './GallerySection';

const GastronomyPage = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Filter articles by gastronomy tags
    const gastronomyArticles = articles.filter(article =>
        article.tags && article.tags.some(tag =>
            ['Gastronomía', 'Qué Comer', 'Cocina', 'Tradición'].includes(tag)
        )
    ).slice(0, 3);

    // Filter restaurants by category
    const filteredRestaurants = activeFilter === 'all'
        ? restaurants
        : restaurants.filter(r => r.category === activeFilter);

    return (
        <div className="gastronomy-page">
            {/* Hero Section */}
            <section className="gastronomy-hero">
                <div className="gastronomy-hero-bg">
                    <img src={heroImg} alt="Gastronomía de Morelos" />
                    <div className="gastronomy-hero-overlay"></div>
                </div>
                <div className="gastronomy-hero-content">
                    <h1>Deleita tus Sentidos con los Sabores de Morelos</h1>
                    <p className="gastronomy-subtitle">Alimenta el alma</p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="gastronomy-intro container">
                <p className="gastronomy-lead">
                    La gastronomía es parte esencial de la cultura de Morelos. Sin duda debes conocer la tradicional
                    garnacha de calle y deleitarte con las alternativas creativas de la preparación de la masa en sus
                    distintas versiones: tacos, gorditas, quesadillas, sopes y los famosos itacates originarios de
                    Tepoztlán. También tienes que ser testigo de la perfección de una humeante pancita o menudo de
                    los domingos, así como la barbacoa de res y de chivo.
                </p>
            </section>

            {/* Gallery Section */}
            <GallerySection />

            {/* Experiences Grid */}
            <section className="gastronomy-experiences container">
                <div className="experiences-grid">
                    {gastronomyArticles.map(article => (
                        <Link to={`/article/${article.id}`} key={article.id} className="experience-card">
                            <div className="experience-image-wrapper">
                                <img src={article.image} alt={article.title} />
                            </div>
                            <div className="experience-content">
                                <h3>{article.title}</h3>
                                <p>{article.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="experiences-cta">
                    <Link to="/category/Turismo gastronómico" className="btn-conoce">
                        Conoce Más Experiencias
                    </Link>
                </div>
            </section>

            {/* Know Through Gastronomy Section */}
            <section className="gastronomy-culture container">
                <h2>Conocer un Lugar a Través de su Gastronomía</h2>
                <p>
                    Ya sea que busques los platillos típicos del Estado o que seas de un paladar que guste más
                    de la comida gourmet y comida de autor, Cuernavaca te ofrece una extensa variedad de opciones
                    para dónde comer. Lo que caracteriza a los restaurantes es que la gran mayoría te ofrecen
                    escenarios al aire libre y terrazas, muchos de ellos en medio de amplios y exuberantes
                    jardines para que disfrutes del maravilloso clima y un ambiente relajado.
                </p>
            </section>

            {/* Service Directory */}
            <section className="service-directory">
                <div className="container">
                    <h2 className="directory-title">Directorio Prestadores de Servicios en Morelos</h2>

                    {/* Category Filters */}
                    <div className="directory-filters">
                        {serviceCategories.map(cat => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                                onClick={() => setActiveFilter(cat.id)}
                            >
                                <span className="filter-icon">{cat.icon}</span>
                                <span className="filter-name">{cat.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Restaurant Grid */}
                    <div className="service-grid">
                        {filteredRestaurants.map(restaurant => (
                            <div key={restaurant.id} className="service-card">
                                <div className="service-image-wrapper">
                                    <span className="service-badge">{restaurant.category}</span>
                                    <img src={restaurant.image} alt={restaurant.name} />
                                </div>
                                <div className="service-content">
                                    <h3>{restaurant.name}</h3>
                                    <p>{restaurant.description}</p>
                                    <Link to={`/restaurant/${restaurant.id}`} className="btn-ver-mas">Ver Más</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GastronomyPage;
