import React from 'react';
import '../../styles/landing.css';

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="feature-icon">{icon}</div>
    <h3 className="feature-title">{title}</h3>
    <p className="feature-description">{description}</p>
  </div>
);

const KeyFeatures = () => {
  const features = [
    {
      icon: "📊",
      title: "Organize & Participate",
      description: "Create or join cleanup events in your local area and make a positive impact."
    },
    {
      icon: "📈",
      title: "Data-Driven Insights",
      description: "Track and measure the impact of cleanup efforts with detailed analytics."
    },
    {
      icon: "🌍",
      title: "Social Storytelling",
      description: "Share your environmental impact story and inspire others to join the movement."
    }
  ];

  return (
    <section className="features-section">
      <div className="container">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;