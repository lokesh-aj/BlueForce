import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import EventDetails from '../components/events/EventDetails';
import EventConfirmation from '../components/events/EventConfirmation';
import { events } from '../data/events'; // Import the shared events data
import './styles/EventEnroll.css';

function EventEnroll() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));

    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      console.error('Event not found for ID:', id);
      navigate('/events'); // Redirect to the events listing page if not found
    }
  }, [id, navigate]);

  const [checkedItems, setCheckedItems] = useState({
    gloves: false,
    waterBottle: false,
    hat: false
  });

  const handleCheckboxChange = (name) => {
    setCheckedItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const handleEnroll = () => {
    console.log('Enrolling with items:', checkedItems);
    alert(`Successfully enrolled in ${event.title}!`);
  };

  if (!event) {
    return (
      <div className="event-enroll-page">
        <Navbar />
        <p>Loading event details...</p>
      </div>
    );
  }

  return (
    <div className="event-enroll-page">
      <Navbar />

      <div className="event-enroll-container">
        <div className="event-enroll-content">
          <div className="event-details-section">
            {/* Keep the main title */}
            <h1>{event.title}</h1>

            {/* REMOVED: The duplicate <p className="event-description">{event.description}</p> */}
            {/* The EventDetails component should display the main details, including description */}
            <EventDetails event={event} />
          </div>

          <div className="event-enrollment-section">
            <h2>Enroll in {event.title}</h2>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>

            {/* REPLACED: Hardcoded description with dynamic event.description */}
            <p className="enrollment-description">
              {event.description} {/* Now uses the description from the event data */}
            </p>

            <EventConfirmation
              checkedItems={checkedItems}
              onCheckboxChange={handleCheckboxChange}
              onEnroll={handleEnroll}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventEnroll;