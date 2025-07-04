import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import EventDetails from '../components/events/EventDetails';
import EventConfirmation from '../components/events/EventConfirmation';
import { events } from '../data/events';
import './styles/EventEnroll.css';
import SuccessModal from '../components/common/SuccessModal'; // Import the new SuccessModal

function EventEnroll() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const foundEvent = events.find(e => e.id === parseInt(id));

    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      console.error('Event not found for ID:', id);
      navigate('/events');
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
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    // Optional: Navigate to a different page after closing the modal
    // navigate('/allEnrolledEvent');
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
            <h1>{event.title}</h1>
            <EventDetails event={event} />
          </div>

          <div className="event-enrollment-section">
            <h2>Enroll in {event.title}</h2>
            <div className="event-image">
              <img src={event.image} alt={event.title} />
            </div>

            <p className="enrollment-description">
              {event.description}
            </p>

            <EventConfirmation
              checkedItems={checkedItems}
              onCheckboxChange={handleCheckboxChange}
              onEnroll={handleEnroll}
            />
          </div>
        </div>
      </div>

      {/* Use the new SuccessModal component */}
      {showSuccessModal && (
        <SuccessModal
          title="Enrollment Successful!"
          message={`You have successfully enrolled in ${event.title}.`}
          onClose={closeSuccessModal}
        />
      )}
    </div>
  );
}

export default EventEnroll;