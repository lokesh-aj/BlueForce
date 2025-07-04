import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/EventCard.css';

const EventCard = ({ event }) => { // Removed 'onClick' from props
  const { id, title, fullLocation, image } = event;

  return (
    // Use Link component for direct navigation
    <Link to={`/events/${id}`} className="event-card-link" style={{ textDecoration: 'none' }}>
      <div className="event-card">
        <img src={image} alt={title} />
        <div className="event-info">
          <h3>{title}</h3>
          <p>{fullLocation}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;