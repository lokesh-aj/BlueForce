import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/EventCard.css'

const EventCard = ({ event }) => {
  // Change 'location' to 'fullLocation' to match your data structure
  const { id, title, fullLocation, image } = event 

  return (
    <Link to={`/events/enroll/${id}`} className="event-card-link" style={{ textDecoration: 'none' }}>
      <div className="event-card">
        <img src={image} alt={title} />
        <div className="event-info">
          <h3>{title}</h3>
          {/* Use fullLocation here */}
          <p>{fullLocation}</p> 
        </div>
      </div>
    </Link>
  )
}

export default EventCard