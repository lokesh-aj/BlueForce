import React from 'react'
import './styles/EventDetails.css'

const EventDetails = ({ event }) => {
  return (
    <div className="event-details">
      <div className="detail-section">
        <h3>Location</h3>
        <p>{event.fullLocation}</p>
      </div>
      
      <div className="detail-section">
        <h3>Date</h3>
        <p>{event.date}</p>
      </div>
      
      <div className="detail-section">
        <h3>Time</h3>
        <p>{event.time}</p>
      </div>
      
      <div className="detail-section">
        <h3>Organizer</h3>
        <p>{event.organizer}</p>
      </div>
      
      <div className="detail-section">
        <h3>Waste Type</h3>
        <p className="focus-text">{event.wasteType.focus}</p>
      </div>
      
      <div className="map-container">
        <img src={event.mapImage} alt="Event location map" className="map-image" />
      </div>
    </div>
  )
}

export default EventDetails