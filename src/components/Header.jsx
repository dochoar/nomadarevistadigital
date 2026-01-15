
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NewsletterModal from './NewsletterModal';
import logoImg from '../assets/nomada-logo.png';
import { categories } from '../data/categories';

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
                        onFocus={() => setIsMenuOpen(true)}
                        onBlur={() => setIsMenuOpen(false)}
                    >
                        <button
                            className="menu-toggle"
                            aria-label="Menú principal"
                            aria-expanded={isMenuOpen}
                            onClick={(e) => {
                                // Toggle on click, stop propagation to avoid immediate close by other handlers if any
                                setIsMenuOpen(!isMenuOpen);
                                e.currentTarget.focus();
                            }}
                        >
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                            <span className="hamburger-line"></span>
                        </button>

                        {/* Dropdown Mega Menu */}
                        <div className={`mega-menu ${isMenuOpen ? 'open' : ''}`}>
                            <div className="mega-menu-content">
                                <span className="mega-menu-title">Descubre Morelos</span>
                                <ul className="mega-menu-list">
                                    {categories.map((cat) => (
                                        <li key={cat.id}>
                                            <Link
                                                to={cat.path}
                                                className="mega-menu-link"
                                            >
                                                {cat.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <Link to="/" className="logo">
                        <img src={logoImg} alt="Nomada" className="header-logo-img" />
                    </Link>
                </div>

                <nav className="desktop-nav" aria-label="Navegación principal">
                    <ul className="nav-links">
                        <li><Link to="/category/Qué Hacer">Qué Hacer</Link></li>
                        <li><Link to="/category/Qué Comer">Qué Comer</Link></li>
                        <li><Link to="/category/A Dónde Ir">A Dónde Ir</Link></li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            className="search-input"
                            aria-label="Buscar en el sitio"
                        />
                        <span className="search-icon" aria-hidden="true">🔍</span>
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
