import React from 'react';
import { Link } from 'react-router-dom';
import { CarFront, Menu } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass-panel">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <CarFront size={28} className="logo-icon" />
                    <span>LuxeDrive 3D</span>
                </Link>
                <div className="navbar-links">
                    <Link to="/">Home</Link>
                    <a href="#brands">Brands</a>
                    <a href="#about">About</a>
                </div>
                <button className="mobile-menu-btn">
                    <Menu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
