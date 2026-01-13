import React, { useState, useMemo } from 'react';
import { restaurants } from '../data/restaurants'; // Importamos los datos para sacar fotos reales

const GallerySection = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('Todos');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8; // 8 items per page (4x2 grid)

    // Extraer imágenes de los restaurantes para la galería
    const allImages = useMemo(() => {
        return restaurants.map(r => ({
            id: r.id,
            src: r.image,
            title: r.name,
            location: r.address.split(',')[1]?.trim() || 'Morelos',
            category: r.category
        }));
    }, []);

    // Geters de filtros únicos
    const filters = ['Todos', ...new Set(allImages.map(img => img.location))].slice(0, 6);

    // Filtrar imágenes
    const filteredImages = filter === 'Todos'
        ? allImages
        : allImages.filter(img => img.location === filter);

    // Resetear a página 1 cuando cambia el filtro
    React.useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    // Lógica de Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentImages = filteredImages.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <section className="gallery-section">
            <div className="container">
                <div className="gallery-header">
                    <h2 className="section-title">Galería Gastronómica</h2>
                    <div className="gallery-filters">
                        <span className="filter-label">FILTRAR FOTOS POR MUNICIPIO:</span>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="gallery-select"
                        >
                            {filters.map(f => (
                                <option key={f} value={f}>{f}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="gallery-grid">
                    {currentImages.map((img) => (
                        <div
                            key={img.id}
                            className="gallery-item"
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img.src} alt={img.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">🔍</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* PAGINATION CONTROLS */}
                {totalPages > 1 && (
                    <div className="pagination-controls">
                        <button
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            className={`pagination-btn prev ${currentPage === 1 ? 'disabled' : ''}`}
                        >
                            &lt;
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => paginate(i + 1)}
                                className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => paginate(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className={`pagination-btn next ${currentPage === totalPages ? 'disabled' : ''}`}
                        >
                            &gt;
                        </button>
                    </div>
                )}

                {/* LIGHTBOX OVERLAY */}
                {selectedImage && (
                    <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                        <button className="lightbox-close">&times;</button>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <img src={selectedImage.src} alt={selectedImage.title} />
                            <div className="lightbox-caption">
                                <h3>{selectedImage.title}</h3>
                                <p>{selectedImage.location}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default GallerySection;
