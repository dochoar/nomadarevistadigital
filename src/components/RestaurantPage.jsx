import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';

const RestaurantPage = () => {
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id === parseInt(id));
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        setCurrentImageIndex(0);
    }, [id]);

    // Prepare gallery images (fallback to main image if gallery is empty)
    const galleryImages = restaurant && restaurant.gallery && restaurant.gallery.length > 0
        ? restaurant.gallery
        : (restaurant ? [restaurant.image] : []);

    const nextImage = () => {
        if (galleryImages.length > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
        }
    };

    const prevImage = () => {
        if (galleryImages.length > 0) {
            setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    if (!restaurant) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Restaurante no encontrado</h2>
                <Link to="/gastronomy" className="btn-conoce" style={{ marginTop: '20px' }}>
                    Volver a Gastronomía
                </Link>
            </div>
        );
    }

    // Google Maps Embed URL generation (simplified)
    const mapSrc = `https://maps.google.com/maps?q=${restaurant.coordinates.lat},${restaurant.coordinates.lng}&z=15&output=embed`;

    // YouTube Embed URL
    const videoSrc = `https://www.youtube.com/embed/${restaurant.videoId || 'dQw4w9WgXcQ'}?autoplay=0&mute=1`;

    return (
        <div className="restaurant-page">
            {/* Header / Breadcrumbs */}
            <div className="restaurant-header-bar">
                <div className="container">
                    <p className="breadcrumbs">
                        <Link to="/">Home</Link> / <Link to="/gastronomy">Turismo gastronómico</Link> / <span>{restaurant.name}</span>
                    </p>
                    <h1>{restaurant.name}</h1>
                </div>
            </div>

            <div className="container restaurant-content-wrapper">
                <div className="restaurant-main-grid">
                    {/* Left Column: Gallery */}
                    <div className="restaurant-gallery-col">
                        <div className="carousel-container">
                            <button className="carousel-btn prev-btn" onClick={prevImage} aria-label="Anterior">❮</button>
                            <div className="main-image">
                                <img src={galleryImages[currentImageIndex]} alt={restaurant.name} />
                            </div>
                            <button className="carousel-btn next-btn" onClick={nextImage} aria-label="Siguiente">❯</button>
                        </div>
                        <div className="thumbnails-grid">
                            {galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    className={`thumbnail-item ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                >
                                    <img src={img} alt={`${restaurant.name} view ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Info */}
                    <div className="restaurant-info-col">

                        {/* Historia y Fundación */}
                        {restaurant.history && (
                            <div className="info-block">
                                <div className="info-header">
                                    <span className="info-icon">🏛️</span>
                                    <h3>NUESTRA HISTORIA</h3>
                                </div>
                                <p className="info-text">
                                    {restaurant.founded && <strong>Fundado en {restaurant.founded}. </strong>}
                                    {restaurant.history}
                                </p>
                            </div>
                        )}

                        {/* Descripción Cautivadora */}
                        <div className="info-block">
                            <div className="info-header">
                                <span className="info-icon">✨</span>
                                <h3>LA EXPERIENCIA</h3>
                            </div>
                            <p className="info-text">{restaurant.captivatingDescription || restaurant.fullDescription}</p>
                        </div>

                        {/* Especialidades */}
                        {restaurant.specialties && restaurant.specialties.length > 0 && (
                            <div className="info-block">
                                <div className="info-header">
                                    <span className="info-icon">🍽️</span>
                                    <h3>PLATILLOS IMPERDIBLES</h3>
                                </div>
                                <ul className="specialties-list">
                                    {restaurant.specialties.map((dish, i) => (
                                        <li key={i}>{dish}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Ubicación */}
                        <div className="info-block">
                            <div className="info-header">
                                <span className="info-icon">📍</span>
                                <h3>UBICACIÓN</h3>
                            </div>
                            <p className="info-text">{restaurant.address}</p>
                        </div>

                        {/* Información y Contacto */}
                        <div className="info-block">
                            <div className="info-header">
                                <span className="info-icon">📞</span>
                                <h3>INFORMACIÓN Y CONTACTO</h3>
                            </div>
                            <div className="contact-details">
                                <p><span className="contact-label">Teléfono:</span> {restaurant.phone}</p>
                                {restaurant.email && <p><span className="contact-label">Email:</span> {restaurant.email}</p>}
                                {restaurant.website && (
                                    <p>
                                        <span className="contact-label">Web:</span>
                                        <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                                            {restaurant.website}
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Video Section */}
                <section className="restaurant-video-section">
                    <h2>Vive la Experiencia</h2>
                    <div className="video-container">
                        <iframe
                            src={videoSrc}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>

                {/* Map Section */}
                <section className="restaurant-map-section">
                    <h2>Ubicación</h2>
                    <div className="map-container">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </section>



                <div className="back-btn-container">
                    <Link to="/gastronomy" className="btn-conoce">Volver al Directorio</Link>
                </div>
            </div>
        </div>
    );
};

export default RestaurantPage;
