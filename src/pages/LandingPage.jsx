import React from 'react';
import { Link } from 'react-router-dom';
import { brands } from '../data/cars';
import { ChevronRight } from 'lucide-react';
import Car3DShowcase from '../components/Car3DShowcase';
import ScrollAnimationSection from '../components/ScrollAnimationSection';
import CarRecommender from '../components/CarRecommender';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page animate-fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">Experience <br />Automotive <span className="highlight">Perfection</span></h1>
                    <p className="hero-subtitle">Discover our exclusive collection of premium luxury vehicles from the world's most prestigious brands in an immersive 3D experience.</p>
                    <a href="#brands" className="cta-button primary">Explore Brands</a>
                </div>
                <div className="hero-visual glass-panel" style={{ padding: 0 }}>
                    <Car3DShowcase carColor="#e67e22" modelPath="/models/aventador_svj.glb" followCursor={true} />
                </div>
            </section>

            {/* Scrollytelling Animation Section */}
            <ScrollAnimationSection />

            {/* Recommendation Engine Section */}
            <CarRecommender />

            {/* Brands Section */}
            <section id="brands" className="brands-section">
                <div className="section-header">
                    <h2>Select a Brand</h2>
                    <div className="header-line"></div>
                </div>

                <div className="brands-grid">
                    {brands.map(brand => (
                        <Link
                            to={`/brand/${brand.id}`}
                            key={brand.id}
                            className="brand-card glass-panel"
                            style={{ '--brand-color': brand.accentColor }}
                        >
                            <div className="brand-card-content">
                                <h3 className="brand-name">{brand.name}</h3>
                                <p className="brand-desc">{brand.description}</p>
                                <div className="brand-action">
                                    <span>View Models</span>
                                    <ChevronRight size={20} />
                                </div>
                            </div>
                            <div className="brand-logo-bg">{brand.logoText}</div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
