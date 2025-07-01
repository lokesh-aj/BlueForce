import React from 'react'
import './styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/blueforce-logo.png" alt="Logo" className="logo-image" />
        <span className="logo-text">BlueForce</span>
      </div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Events</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
      <div className="nav-actions">
        <button className="host-btn">Host an Event</button>
        <div className="profile-icon">👤</div>
      </div>
    </nav>
  )
}

export default Navbar