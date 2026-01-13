import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticlePage = () => {
    const { id } = useParams();
    // Find article by ID (ensure type safety if IDs are numbers)
    const article = articles.find(a => a.id === parseInt(id)) || articles[0];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) return <div>Cargando...</div>;

    return (
        <div className="article-page">
            <header className="article-hero">
                <div className="article-hero-content container">
                    <span className="article-rubric">{article.rubric}</span>
                    <h1 className="article-title-main">{article.title}</h1>
                    <p className="article-subtitle">{article.subtitle}</p>
                    <div className="article-meta">
                        <span className="author">{article.author}</span>
                        <span className="date">{article.date}</span>
                    </div>
                </div>
                <div className="article-hero-image-wrapper">
                    <img src={article.image} alt={article.title} className="article-hero-image" />
                </div>
            </header>

            <div className="article-body-container container">
                <main className="article-content">
                    {article.videoId && (
                        <div className="video-responsive">
                            <iframe
                                src={`https://www.youtube.com/embed/${article.videoId}`}
                                title={article.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                    <div className="dropcap-content" dangerouslySetInnerHTML={{ __html: article.content }} />
                </main>

                <aside className="article-sidebar">
                    <h3 className="sidebar-title">Más de Morelos</h3>
                    <ul className="sidebar-list">
                        <li className="sidebar-item">
                            <span className="sidebar-tag">AVENTURA</span>
                            <h4>Ruta de los Conventos en Bici</h4>
                        </li>
                        <li className="sidebar-item">
                            <span className="sidebar-tag">GASTRONOMÍA</span>
                            <h4>La Mejor Cecina de Yecapixtla</h4>
                        </li>
                        <li className="sidebar-item">
                            <span className="sidebar-tag">HISTORIA</span>
                            <h4>El Palacio de Cortés: 500 Años</h4>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default ArticlePage;
