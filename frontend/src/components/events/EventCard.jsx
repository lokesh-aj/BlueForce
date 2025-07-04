import React from 'react'
import '../styles/EventCard.css'

const EventCard = ({ event, onClick }) => {
  // Change 'location' to 'fullLocation' to match your data structure
  const { id, title, fullLocation, image } = event 

  return (
    <div className="event-card-link" style={{ textDecoration: 'none' }} onClick={() => onClick(event)}>
      <div className="event-card">
        <img src={image} alt={title} />
        <div className="event-info">
          <h3>{title}</h3>
          {/* Use fullLocation here */}
          <p>{fullLocation}</p> 
        </div>
      </div>
    </div>
  )
}

export default EventCard