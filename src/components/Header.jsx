
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterModal from './NewsletterModal';
import logoImg from '../assets/logo-morelos-color.png';

const categories = [
    "Turismo gastronómico",
    "Vive Museos",
    "Turismo de reuniones y eventos",
    "Bodas y turismo de romance",
    "Turismo de salud y bienestar",
    "Recreación acuática y parques",
    "Turismo deportivo",
    "Turismo cultural",
    "Turismo idiomático",
    "Turismo LGBTTTIQ+",
    "Agroturismo y naturaleza",
    "Destinos",
    "Tesoros",
    "Experiencias turísticas"
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                    {/* Menu Container with Hover Logic */}
                    <div
                        className="menu-container"
                        onMouseEnter={() => setIsMenuOpen(true)}
                        onMouseLeave={() => setIsMenuOpen(false)}
                    >
                        <button className="menu-toggle" aria-label="Menú">
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </button>

                        {/* Dropdown Mega Menu */}
                        <div className={`mega-menu ${isMenuOpen ? 'open' : ''}`}>
                            <div className="mega-menu-content">
                                <span className="mega-menu-title">Descubre Morelos</span>
                                <ul className="mega-menu-list">
                                    {categories.map((cat, index) => (
                                        <li key={index}>
                                            <Link
                                                to={cat === "Turismo gastronómico" ? "/gastronomy" : `/category/${cat}`}
                                                className="mega-menu-link"
                                            >
                                                {cat}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>



                    <Link to="/" className="logo">
                        <img src={logoImg} alt="Visita Morelos" className="header-logo-img" />
                    </Link>
                </div>

                <nav className="desktop-nav">
                    <ul className="nav-links">
                        <li><Link to="/category/Qué Hacer">Qué Hacer</Link></li>
                        <li><Link to="/category/Qué Comer">Qué Comer</Link></li>
                        <li><Link to="/category/A Dónde Ir">A Dónde Ir</Link></li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <div className="search-box">
                        <input type="text" placeholder="Buscar..." className="search-input" />
                        <span className="search-icon">🔍</span>
                    </div>
                    <button
                        className="btn-subscribe"
                        onClick={() => setIsNewsletterOpen(true)}
                    >
                        Boletín
                    </button>
                    {/* Newsletter Modal */}
                    <NewsletterModal
                        isOpen={isNewsletterOpen}
                        onClose={() => setIsNewsletterOpen(false)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
