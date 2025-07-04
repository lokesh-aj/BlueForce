import React, { useState, useEffect } from 'react';
import './styles/AllEnrolledEvent.css';

const AllEnrolledEvent = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const [countdown1, setCountdown1] = useState({
    days: 10,
    hours: 5,
    minutes: 30,
    seconds: 15
  });

  const [countdown2, setCountdown2] = useState({
    days: 35,
    hours: 12,
    minutes: 45,
    seconds: 20
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const update = (prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      };

      setCountdown1(update);
      setCountdown2(update);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const CommunityCleanupIllustration = () => (
    <img
      src="../public/createEventDefault.png"
      alt="Community Cleanup"
      className="illustration-image"
    />
  );

  const ElderlyHomeIllustration = () => (
    <img
      src="../public/createEventDefault.png"
      alt="Elderly Home Visit"
      className="illustration-image"
    />
  );

  const EventCard = ({ title, date, time, countdown, illustration }) => (
    <div className="event-card">
      <div className="event-content">
        <p className="event-status">Upcoming</p>
        <h3 className="event-title">{title}</h3>
        <p className="event-datetime">{date} · {time}</p>

        <button className="view-details-button">
          View Details
          <svg className="view-details-arrow" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="countdown-grid">
          {['days', 'hours', 'minutes', 'seconds'].map((key) => (
            <div className="countdown-box" key={key}>
              <div className="countdown-number">
                {countdown[key].toString().padStart(2, '0')}
              </div>
              <div className="countdown-label">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button className="button button-secondary">Leave Event</button>
          <button className="button button-primary">QR Check-in</button>
        </div>
      </div>

      <div className="illustration-container">
        <div className="illustration-inner">
          {illustration}
        </div>
      </div>
    </div>
  );

  return (
    <div className="all-enrolled-page">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-icon"></div>
            <h1 className="logo-text">BlueForce</h1>
          </div>
          <nav className="navigation">
            <button className="nav-button active">Dashboard</button>
            <button className="nav-button">Events</button>
            <button className="nav-button">Opportunities</button>
          </nav>
          <div className="profile-avatar"></div>
        </div>
      </header>

      <main className="main-content">
        <h2 className="page-title">Dashboard</h2>
        <div className="tabs-container">
          <button
            className={`tab-button ${activeTab === 'Upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('Upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`tab-button ${activeTab === 'Past' ? 'active' : ''}`}
            onClick={() => setActiveTab('Past')}
          >
            Past
          </button>
        </div>

        {activeTab === 'Upcoming' && (
          <div>
            <EventCard
              title="Community Cleanup"
              date="Jul 20, 2025"
              time="9:00 AM"
              countdown={countdown1}
              illustration={<CommunityCleanupIllustration />}
            />
            <EventCard
              title="Elderly Home Visit"
              date="Aug 15, 2025"
              time="10:00 AM"
              countdown={countdown2}
              illustration={<ElderlyHomeIllustration />}
            />
          </div>
        )}

        {activeTab === 'Past' && (
          <div className="empty-state">
            <div className="empty-state-text">No past events to display</div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AllEnrolledEvent;
