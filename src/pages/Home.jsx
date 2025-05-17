import React from 'react';
import { FaCar, FaShieldAlt, FaBolt } from 'react-icons/fa';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Your pick of rides at low prices</h1>
          <SearchForm />
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">
            <FaCar />
          </div>
          <h3 className="feature-title">Your pick of rides at low prices</h3>
          <p className="feature-description">
            No matter where you're going, by bus or carpool, find the perfect ride from our wide range of destinations and routes at low prices.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaShieldAlt />
          </div>
          <h3 className="feature-title">Trust who you travel with</h3>
          <p className="feature-description">
            We take the time to get to know each of our members and bus partners. We check reviews, profiles and IDs, so you know who you're travelling with and can book your ride at ease on our secure platform.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaBolt />
          </div>
          <h3 className="feature-title">Scroll, click, tap and go!</h3>
          <p className="feature-description">
            Booking a ride has never been easier! Thanks to our simple app powered by great technology, you can book a ride close to you in just minutes.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;