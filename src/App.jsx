
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VideoCarousel from './components/VideoCarousel';
import ArticleGrid from './components/ArticleGrid';
import CategoryCarousel from './components/CategoryCarousel';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import CategoryPage from './components/CategoryPage';
import GastronomyPage from './components/GastronomyPage';
import RestaurantPage from './components/RestaurantPage';

import { articles } from './data/articles';

function App() {
  const homeArticles = articles
    .filter(article => article.image && !article.image.includes('placehold.co'))
    .slice(0, 20);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <HeroSection />
              <VideoCarousel />
              <ArticleGrid articles={homeArticles} />
              <CategoryCarousel />
            </main>
          } />
          <Route path="/article/:id" element={<ArticlePage />} />
          <Route path="/gastronomy" element={<GastronomyPage />} />
          <Route path="/restaurant/:id" element={<RestaurantPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
