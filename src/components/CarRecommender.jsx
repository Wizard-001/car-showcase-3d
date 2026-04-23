import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, TrendingUp } from 'lucide-react';
import { cars } from '../data/cars';
import './CarRecommender.css';

const PRICE_RANGES = [
    { label: 'All Prices', min: 0, max: 100 },
    { label: 'Under ₹2 Crore', min: 0, max: 2 },
    { label: '₹2 - ₹4 Crore', min: 2, max: 4 },
    { label: '₹4 - ₹6 Crore', min: 4, max: 6 },
    { label: 'Over ₹6 Crore', min: 6, max: 100 }
];

const CarRecommender = () => {
    const [selectedRange, setSelectedRange] = useState(PRICE_RANGES[0]);

    // Recommendation engine logic
    const recommendedCars = useMemo(() => {
        // 1. Filter by price
        const filtered = cars.filter(car =>
            car.priceValue >= selectedRange.min && car.priceValue < selectedRange.max
        );

        // 2. Sort by popularity (descending)
        const sorted = [...filtered].sort((a, b) => b.popularity - a.popularity);

        // 3. Return top 3 recommendations
        return sorted.slice(0, 3);
    }, [selectedRange, cars]);

    return (
        <section className="recommender-section">
            <div className="section-header">
                <h2 className="flex items-center gap-2">
                    <TrendingUp className="text-accent" />
                    Top Picks For You
                </h2>
                <p className="subtitle">Discover our most recommended vehicles based on popular choices in your price range.</p>
                <div className="header-line"></div>
            </div>

            <div className="recommender-controls custom-scrollbar">
                <div className="filter-icon">
                    <Filter size={18} />
                    <span>Price Range:</span>
                </div>
                <div className="price-filters">
                    {PRICE_RANGES.map((range, index) => (
                        <button
                            key={index}
                            className={`filter-btn ${selectedRange.label === range.label ? 'active' : ''}`}
                            onClick={() => setSelectedRange(range)}
                        >
                            {range.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="recommendation-grid">
                {recommendedCars.length > 0 ? (
                    recommendedCars.map((car, index) => (
                        <div
                            className="recommendation-card glass-panel"
                            key={car.id}
                            style={{ '--animation-order': index }}
                        >
                            <div className="card-image-wrapper">
                                <img src={car.image} alt={car.name} className="card-image" />
                                <div className="popularity-badge">
                                    #{index + 1} Choice
                                </div>
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{car.name}</h3>
                                    <span className="car-price">{car.specs.showroomPrice}</span>
                                </div>
                                <p className="car-desc">{car.tagline}</p>
                                <div className="card-metrics">
                                    <div className="metric">
                                        <span className="label">0-100</span>
                                        <span className="val">{car.specs["0-100"]}</span>
                                    </div>
                                    <div className="metric">
                                        <span className="label">Top Speed</span>
                                        <span className="val">{car.specs.topSpeed}</span>
                                    </div>
                                </div>
                                <Link to={`/car/${car.id}`} className="view-details-btn">
                                    View Details <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-results glass-panel">
                        <p>No cars found in this price range. Try selecting another range!</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CarRecommender;
