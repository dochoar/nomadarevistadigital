
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';
import ArticleGrid from './ArticleGrid';

const CategoryPage = () => {
    const { categoryName } = useParams();
    const decodedCategory = decodeURIComponent(categoryName);

    // Smart Mapping: Map menu categories to article tags
    const categoryMapping = {
        "Turismo gastronómico": ["Gastronomía", "Qué Comer", "Cocina", "Restaurantes"],
        "Vive Museos": ["Museos", "Cultura", "Historia", "Arte"],
        "Turismo de reuniones y eventos": ["Eventos", "Negocios", "Convenciones"],
        "Bodas y turismo de romance": ["Bodas", "Romance", "Parejas", "Haciendas"],
        "Turismo de salud y bienestar": ["Bienestar", "Spa", "Salud", "Relajación", "Yoga"],
        "Recreación acuática y parques": ["Balnearios", "Acuático", "Naturaleza", "Parques", "Las Estacas"],
        "Turismo deportivo": ["Deportes", "Aventura", "Golf", "Ciclismo"],
        "Turismo cultural": ["Cultura", "Historia", "Pueblos Mágicos", "Tradición", "Chinelo"],
        "Turismo idiomático": ["Escuelas", "Español", "Cultura"],
        "Turismo LGBTTTIQ+": ["LGBT", "Inclusivo", "Vida Nocturna"],
        "Agroturismo y naturaleza": ["Naturaleza", "Ecoturismo", "Campo", "Ruta"],
        "Destinos": ["Destinos", "Pueblos Mágicos", "Ciudades"],
        "Tesoros": ["Tesoros", "Patrimonio", "Arqueología"],
        "Experiencias turísticas": ["Experiencias", "Rutas", "Tours", "Aventura"],
        "Qué Hacer": ["Qué Hacer", "Aventura", "Naturaleza", "Pueblos Mágicos"],
        "Qué Comer": ["Qué Comer", "Gastronomía"],
        "A Dónde Ir": ["A Dónde Ir", "Destinos", "Pueblos Mágicos"]
    };

    // Determine target tags: Use mapping or fall back to the raw category name
    const targetTags = categoryMapping[decodedCategory] || [decodedCategory];

    // Filter articles that have ANY of the target tags
    const filteredArticles = articles.filter(article =>
        article.tags && article.tags.some(tag => targetTags.includes(tag))
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [categoryName]);

    return (
        <div className="category-page">
            <header className="category-header container" style={{ padding: '60px 0 20px' }}>
                <span style={{
                    color: '#666',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '10px',
                    fontSize: '0.9rem'
                }}>Explora: {decodedCategory}</span>
                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '2.5rem',
                    color: 'var(--color-verde)',
                    borderBottom: '4px solid var(--color-dorado)',
                    display: 'inline-block',
                    paddingBottom: '10px'
                }}>
                    {filteredArticles.length} Experiencias Encontradas
                </h1>
            </header>

            {filteredArticles.length > 0 ? (
                <ArticleGrid articles={filteredArticles} />
            ) : (
                <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.2rem', color: '#666' }}>
                        Próximamente agregaremos más contenido para <strong>{decodedCategory}</strong>.
                    </p>
                    <a href="/" style={{
                        marginTop: '20px',
                        display: 'inline-block',
                        color: 'var(--color-primary)',
                        fontWeight: 'bold',
                        borderBottom: '2px solid var(--color-primary)'
                    }}>Volver al Inicio</a>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
