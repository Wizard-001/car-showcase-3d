import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cars, brands } from '../data/cars';
import { ArrowLeft, Gauge, Zap, Activity, Info, Flame, Droplets, Receipt, Banknote, Star } from 'lucide-react';
import Car3DShowcase from '../components/Car3DShowcase';
import './CarDetailPage.css';

const CarDetailPage = () => {
    const { carId } = useParams();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('specs');

    const car = cars.find(c => c.id === carId);
    const brand = car ? brands.find(b => b.id === car.brandId) : null;

    useEffect(() => {
        if (!car) navigate('/');
        window.scrollTo(0, 0);
    }, [car, navigate]);

    if (!car || !brand) return null;

    return (
        <div className="car-detail-page animate-fade-in" style={{ '--car-color': car.color, '--brand-color': brand.accentColor }}>
            <div className="detail-layout">

                {/* Left Side: 3D Showcase */}
                <div className="showcase-section">
                    <button onClick={() => navigate(-1)} className="back-button showcase-back">
                        <ArrowLeft size={20} />
                        <span>Back to Models</span>
                    </button>

                    <div className="showcase-overlay top-left">
                        <div className="brand-badge">{brand.name}</div>
                        <h1 className="showcase-car-name">{car.name}</h1>
                    </div>

                    <div className="showcase-overlay bottom-right">
                        <div className="interaction-hint">
                            Drag to Rotate • Scroll to Zoom
                        </div>
                    </div>

                    <Car3DShowcase carColor={car.color} modelPath={car.modelPath} />
                </div>

                {/* Right Side: Information Panel */}
                <div className="info-section glass-panel">
                    {/* Header Removed to maximize space for specifications */}

                    <div className="tabs-container">
                        <button
                            className={`tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('specs')}
                        >
                            Specifications
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'features' ? 'active' : ''}`}
                            onClick={() => setActiveTab('features')}
                        >
                            Key Highlights
                        </button>
                        <button
                            className={`tab-btn ${activeTab === 'desc' ? 'active' : ''}`}
                            onClick={() => setActiveTab('desc')}
                        >
                            Overview
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'specs' && (
                            <div className="specs-grid animate-fade-in">
                                <div className="spec-card">
                                    <Gauge className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">Top Speed</span>
                                        <span className="spec-value">{car.specs.topSpeed}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Zap className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">0-100 km/h</span>
                                        <span className="spec-value">{car.specs['0-100']}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Activity className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">Power Output</span>
                                        <span className="spec-value">{car.specs.power}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Flame className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">Torque</span>
                                        <span className="spec-value">{car.specs.torque}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Droplets className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">Mileage</span>
                                        <span className="spec-value">{car.specs.mileage}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Receipt className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">Ex-Showroom Price</span>
                                        <span className="spec-value">{car.specs.showroomPrice}</span>
                                    </div>
                                </div>
                                <div className="spec-card">
                                    <Banknote className="spec-icon" size={24} />
                                    <div className="spec-data">
                                        <span className="spec-label">On-Road Price</span>
                                        <span className="spec-value">{car.specs.onRoadPrice}</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'features' && (
                            <div className="features-list animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {car.features?.map((feature, idx) => (
                                    <div key={idx} className="spec-card" style={{ padding: '1.2rem' }}>
                                        <Star className="spec-icon" size={20} />
                                        <span className="spec-value" style={{ fontSize: '1.1rem', fontWeight: '500' }}>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeTab === 'desc' && (
                            <div className="desc-content animate-fade-in">
                                <p>{car.description}</p>
                                <div className="color-preview">
                                    <span className="color-label">Signature Color:</span>
                                    <div className="color-swatch" style={{ backgroundColor: car.color }}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarDetailPage;
