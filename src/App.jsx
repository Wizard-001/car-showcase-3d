import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import BrandPage from './pages/BrandPage';
import CarDetailPage from './pages/CarDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/brand/:brandId" element={<BrandPage />} />
            <Route path="/car/:carId" element={<CarDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
