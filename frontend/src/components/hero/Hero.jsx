import React from 'react';
import Button from '../common/Button';
import '../../styles/landing.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Join the BlueForce Movement</h1>
          <p>Be part of the solution! Join our community of volunteers and organizations working together to clean up our environment.</p>
          <div className="hero-buttons">
            <Button variant="primary">Join BlueForce</Button>
            <Button variant="secondary">Host an Organizer</Button>
          </div>
        </div>
        <div className="hero-image-container">
          <img 
            src="/skibidi_placeholder_img.jpg" 
            alt="Volunteer cleaning beach" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;