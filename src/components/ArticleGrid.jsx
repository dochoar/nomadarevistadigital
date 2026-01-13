import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const ArticleGrid = ({ articles: propArticles }) => {
    const displayArticles = propArticles || articles;

    return (
        <section className="grid-section container">
            <h2 className="section-title">Descubre Morelos</h2>
            <div className="article-grid">
                {displayArticles.map(article => (
                    <article
                        key={article.id}
                        className={`article-card ${article.featured ? 'featured' : ''}`}
                    >
                        <img src={article.image} alt={article.title} className="card-image" />
                        <div className="card-content">
                            <span className="card-rubric">{article.rubric}</span>
                            <h3 className="card-title">{article.title}</h3>
                            <Link to={`/article/${article.id}`} className="card-read-more">Leer Más</Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ArticleGrid;
