import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to GreenLeaf Haven</h1>
          <p>
            At GreenLeaf Haven, we believe that every home deserves a touch of nature's beauty. 
            We specialize in providing high-quality, carefully curated houseplants that bring life, 
            freshness, and positive energy to your living spaces. Our passion for plants drives us 
            to offer exceptional varieties suitable for both seasoned plant parents and beginners alike.
          </p>
          <Link to="/products" className="cta-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;