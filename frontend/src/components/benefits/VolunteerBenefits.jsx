import React from 'react';
import '../../styles/landing.css';

const BenefitCard = ({ image, title, description }) => (
  <div className="benefit-card">
    <div className="benefit-image-container">
      <img src={image} alt={title} className="benefit-image" />
    </div>
    <div className="benefit-content">
      <h3 className="benefit-title">{title}</h3>
      <p className="benefit-description">{description}</p>
    </div>
  </div>
);

const VolunteerBenefits = () => {
  const benefits = [
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Find & Join Events",
      description: "Discover cleanup events in your area and join like-minded volunteers."
    },
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Track Your Impact",
      description: "Monitor your contribution and see the difference you're making."
    },
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Connect with Community",
      description: "Build relationships with others who share your environmental values."
    }
  ];

  return (
    <section className="benefits-section">
      <div className="container">
        <h2 className="section-title">Benefits for Volunteers</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteerBenefits;
