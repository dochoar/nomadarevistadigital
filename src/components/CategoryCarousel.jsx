import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { categories } from '../data/categories';

const CategoryCarousel = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = 300;
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
                        {categories.map((cat) => (
                            <Link
                                to={cat.path}
                                key={cat.id} // Stable key
                                className="carousel-card"
                            >
                                <div className="carousel-card-image-wrapper">
                                    <img
                                        src={getCategoryImage(cat.imageId)}
                                        alt={cat.name}
                                        className="carousel-card-image"
                                        loading="lazy" // Performance best practice
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
