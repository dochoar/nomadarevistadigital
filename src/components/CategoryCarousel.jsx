import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const categories = [
    { name: "Bodas y turismo de romance", imageId: 28 }, // Hacienda de Cortes
    { name: "Turismo de salud y bienestar", imageId: 30 }, // Buena Vibra
    { name: "Tesoros", imageId: 15 }, // Mil Amores
    { name: "Turismo idiomático", imageId: 9 }, // Paraiso Cafe
    { name: "Experiencias turísticas", imageId: 1 }, // Casa Grande
    { name: "Turismo LGBTTTIQ+", imageId: 16 }, // Frida y Diego
    { name: "Turismo gastronómico", imageId: 4 }, // Emilia
    { name: "Vive Museos", imageId: 22 }, // Nana Mixtli (Cultural)
    { name: "Turismo de reuniones y eventos", imageId: 27 }, // Sumiya
    { name: "Recreación acuática y parques", imageId: 14 }, // Bungy
    { name: "Turismo deportivo", imageId: 14 }, // Bungy
    { name: "Turismo cultural", imageId: 11 }, // Casa Tikal
    { name: "Agroturismo y naturaleza", imageId: 24 }, // Amomoxtli
    { name: "Destinos", imageId: 25 }, // Las Mananitas
];

const CategoryCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300; // Adjust scroll amount
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const getCategoryImage = (id) => {
        const restaurant = restaurants.find(r => r.id === id);
        return restaurant ? restaurant.image : 'https://placehold.co/400x500?text=Morelos';
    };

    return (
        <section className="category-carousel-section">
            <div className="container">
                <div className="carousel-header">
                    <h2 className="carousel-title">DESCUBRE MORELOS</h2>
                    <p className="carousel-subtitle">Date un respiro, Morelos está cerca.</p>
                </div>

                <div className="carousel-wrapper">
                    <button
                        className="carousel-nav-btn prev"
                        onClick={() => scroll('left')}
                        aria-label="Anterior"
                    >
                        &#10094;
                    </button>

                    <div className="carousel-track" ref={scrollRef}>
                        {categories.map((cat, index) => (
                            <Link
                                to={cat.name === "Turismo gastronómico" ? "/gastronomy" : `/category/${cat.name}`}
                                key={index}
                                className="carousel-card"
                            >
                                <div className="carousel-card-image-wrapper">
                                    <img
                                        src={getCategoryImage(cat.imageId)}
                                        alt={cat.name}
                                        className="carousel-card-image"
                                    />
                                </div>
                                <div className="carousel-card-overlay">
                                    <span className="carousel-card-title">{cat.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <button
                        className="carousel-nav-btn next"
                        onClick={() => scroll('right')}
                        aria-label="Siguiente"
                    >
                        &#10095;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CategoryCarousel;
