import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import KeyFeatures from '../components/features/KeyFeatures';
import VolunteerBenefits from '../components/benefits/VolunteerBenefits';
import OrganizationBenefits from '../components/benefits/OrganizationBenefits';
import '../styles/landing.css';

const Home = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Join the BlueForce Movement</h1>
            <p>Be part of the solution! Join our community of volunteers and organizations working together to clean up our environment.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Join BlueForce</button>
              <button className="btn-secondary">Host an Organizer</button>
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/skibidi_placeholder_img.jpg" alt="Volunteer cleaning beach" className="hero-image" />
          </div>
        </div>
      </section>
      <KeyFeatures />
      <VolunteerBenefits />
      <OrganizationBenefits />
      <section className="cta-section">
        <h2 className="cta-title">Ready to Make a Difference?</h2>
        <p className="cta-description">Join BlueForce today and be part of the solution for a cleaner, healthier tomorrow.</p>
        <button className="btn-primary">Get Started</button>
      </section>
    </div>
  );
};

export default Home;