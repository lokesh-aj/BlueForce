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

const OrganizationBenefits = () => {
  const benefits = [
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Streamline Management",
      description: "Efficiently organize and manage cleanup events with our intuitive platform."
    },
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Measure Discovery",
      description: "Track event metrics and generate comprehensive impact reports."
    },
    {
      image: "/skibidi_placeholder_img.jpg",
      title: "Amplify Your Impact",
      description: "Share your organization's story and attract more volunteers."
    }
  ];

  return (
    <section className="benefits-section benefits-section-alt">
      <div className="container">
        <h2 className="section-title">Benefits for Organizations</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationBenefits;