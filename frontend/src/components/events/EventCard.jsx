import React from 'react'
import '../styles/EventCard.css'

const EventCard = ({ event, onEnroll }) => {
  const { title, location, image } = event

  return (
    <div className="event-card" onClick={() => onEnroll(event)}>
      <img src={image} alt={title} />
      <div className="event-info">
        <h3>{title}</h3>
        <p>{location}</p>
      </div>
    </div>
  )
}

export default EventCard