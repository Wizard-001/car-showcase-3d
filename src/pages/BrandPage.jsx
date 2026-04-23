import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { brands, cars } from '../data/cars';
import { ArrowLeft, Gauge, Zap } from 'lucide-react';
import './BrandPage.css';

const BrandPage = () => {
    const { brandId } = useParams();
    const navigate = useNavigate();

    const brand = brands.find(b => b.id === brandId);
    const brandCars = cars.filter(c => c.brandId === brandId);

    useEffect(() => {
        if (!brand) navigate('/');
        window.scrollTo(0, 0);
    }, [brand, navigate]);

    if (!brand) return null;

    return (
        <div className="brand-page animate-fade-in" style={{ '--brand-color': brand.accentColor }}>
            <div className="brand-header container">
                <button onClick={() => navigate(-1)} className="back-button">
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
                <div className="brand-title-wrapper">
                    <h1 className="brand-page-title">{brand.name}</h1>
                    <div className="brand-bg-text">{brand.logoText}</div>
                </div>
                <p className="brand-page-desc">{brand.description}</p>
            </div>

            <div className="cars-grid container">
                {brandCars.map(car => (
                    <div key={car.id} className="car-card glass-panel">
                        <div className="car-image-container" style={{ borderColor: car.color + '44' }}>
                            <img src={car.image} alt={car.name} className="car-preview-image" />
                        </div>

                        <div className="car-card-info">
                            <h2 className="car-name">{car.name}</h2>
                            <h3 className="car-tagline">"{car.tagline}"</h3>

                            <div className="car-quick-specs">
                                <div className="spec-item">
                                    <Gauge size={16} />
                                    <span>{car.specs.topSpeed}</span>
                                </div>
                                <div className="spec-item">
                                    <Zap size={16} />
                                    <span>{car.specs['0-100']}</span>
                                </div>
                            </div>

                            <Link to={`/car/${car.id}`} className="view-detail-btn">
                                Configure in 3D
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default BrandPage;
