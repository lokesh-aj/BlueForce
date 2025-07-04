import React from 'react'
import './styles/EventConfirmation.css'

const EventConfirmation = ({ checkedItems, onCheckboxChange, onEnroll }) => {
  return (
    <div className="event-confirmation">
      <h3>Confirmation</h3>
      
      <div className="checkbox-group">
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={checkedItems.gloves} 
            onChange={() => onCheckboxChange('gloves')} 
          />
          I will bring my own gloves
        </label>
        
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={checkedItems.waterBottle} 
            onChange={() => onCheckboxChange('waterBottle')} 
          />
          I will bring a reusable water bottle
        </label>
        
        <label className="checkbox-label">
          <input 
            type="checkbox" 
            checked={checkedItems.hat} 
            onChange={() => onCheckboxChange('hat')} 
          />
          I will bring a hat
        </label>
      </div>
      
      <div className="safety-note">
        <p>
          <strong>Safety Note:</strong> Please wear appropriate clothing and footwear. Stay hydrated and be aware of your surroundings. 
          Follow instructions from the event organizers.
        </p>
      </div>
      
      <button className="enroll-button" onClick={onEnroll}>
        Enroll Now
      </button>
    </div>
  )
}

export default EventConfirmation