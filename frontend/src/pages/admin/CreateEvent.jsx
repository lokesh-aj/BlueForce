import React, { useState } from 'react';
import { Calendar, MapPin, Users, Trash2, Globe, ChevronDown } from 'lucide-react';
import './styles/CreateEvent.css'; // scoped version

const CreateEvent = () => {
    const [eventData, setEventData] = useState({
        eventName: '',
        location: '',
        date: '',
        volunteers: '',
        wasteCollected: '',
        cleanupType: '',
        language: 'English'
    });

    const [dropdownOpen, setDropdownOpen] = useState({
        cleanupType: false,
        language: false
    });

    const cleanupTypes = [
        'Beach Cleanup',
        'Park Cleanup',
        'Street Cleanup',
        'River Cleanup',
        'Forest Cleanup',
        'Community Cleanup'
    ];

    const languages = [
        'English',
        'Spanish',
        'French',
        'German',
        'Italian',
        'Portuguese',
        'Hindi',
        'Mandarin'
    ];

    const handleInputChange = (field, value) => {
        setEventData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Event data:', eventData);
        alert('Event created successfully!');
    };

    const toggleDropdown = (field) => {
        setDropdownOpen(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <div className="create-event-root">
            <div className="create-event-app-container">
                {/* Sidebar */}
                <div className="create-event-sidebar">
                    <div className="create-event-sidebar-header">
                        <h1 className="create-event-sidebar-title">BlueForce Admin</h1>
                        <nav className="create-event-sidebar-nav">
                            <div className="create-event-nav-item inactive">
                                <div className="create-event-nav-icon-placeholder"></div>
                                <span>Dashboard</span>
                            </div>
                            <div className="create-event-nav-item active">
                                <Calendar className="create-event-nav-icon" />
                                <span>Events</span>
                            </div>
                            <div className="create-event-nav-item inactive">
                                <Users className="create-event-nav-icon" />
                                <span>Co-Pilot</span>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <div className="create-event-main-content">
                    <div className="create-event-content-container">
                        <h2 className="create-event-title">Create New Event</h2>

                        <div className="create-event-card">
                            <div className="create-event-content">
                                {/* Event Preview */}
                                <div className="create-event-preview">
                                    <div className="create-event-preview-wrapper">
                                        <img
                                            src="../public/createEventDefault.png"
                                            alt="Event Preview"
                                            className="create-event-preview-image"
                                        />
                                        <div className="create-event-preview-overlay"></div>
                                        <div className="create-event-preview-center">
                                            <div className="create-event-preview-content">
                                                <div className="create-event-preview-icon">
                                                    <Users />
                                                </div>
                                                <div className="create-event-preview-text">Event Preview</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* Event Form */}
                                <div className="create-event-form">
                                    <div className="create-event-form-header">
                                        <h3 className="create-event-form-title">Event Details</h3>
                                        <div className="create-event-form-status">
                                            <span className="create-event-form-status-text">Fill Form</span>
                                            <div className="create-event-form-status-icon">✓</div>
                                        </div>
                                    </div>

                                    <div className="create-event-form-fields">
                                        {/* Event Name */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Event Name</label>
                                            <input
                                                type="text"
                                                className="create-event-form-input"
                                                placeholder="e.g., Beach Clean-up"
                                                value={eventData.eventName}
                                                onChange={(e) => handleInputChange('eventName', e.target.value)}
                                            />
                                        </div>

                                        {/* Location */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Location</label>
                                            <input
                                                type="text"
                                                className="create-event-form-input"
                                                placeholder="e.g., Central Park"
                                                value={eventData.location}
                                                onChange={(e) => handleInputChange('location', e.target.value)}
                                            />
                                        </div>

                                        {/* Date */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Date</label>
                                            <input
                                                type="date"
                                                className="create-event-form-input"
                                                value={eventData.date}
                                                onChange={(e) => handleInputChange('date', e.target.value)}
                                            />
                                        </div>

                                        {/* Number of Volunteers */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Number of Volunteers</label>
                                            <input
                                                type="number"
                                                className="create-event-form-input"
                                                placeholder="e.g., 50"
                                                value={eventData.volunteers}
                                                onChange={(e) => handleInputChange('volunteers', e.target.value)}
                                            />
                                        </div>

                                        {/* Waste Collected */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Total Waste Collected (kg)</label>
                                            <input
                                                type="number"
                                                step="0.1"
                                                className="create-event-form-input"
                                                placeholder="e.g., 25.5"
                                                value={eventData.wasteCollected}
                                                onChange={(e) => handleInputChange('wasteCollected', e.target.value)}
                                            />
                                        </div>

                                        {/* Cleanup Type */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Cleanup Type (Optional)</label>
                                            <div className="create-event-dropdown">
                                                <button
                                                    type="button"
                                                    className="create-event-dropdown-button"
                                                    onClick={() => toggleDropdown('cleanupType')}
                                                >
                                                    <span className={`create-event-dropdown-button-text ${!eventData.cleanupType ? 'placeholder' : ''}`}>
                                                        {eventData.cleanupType || 'Select'}
                                                    </span>
                                                    <ChevronDown className="create-event-dropdown-icon" />
                                                </button>
                                                {dropdownOpen.cleanupType && (
                                                    <div className="create-event-dropdown-menu">
                                                        {cleanupTypes.map((type) => (
                                                            <button
                                                                key={type}
                                                                type="button"
                                                                className="create-event-dropdown-item"
                                                                onClick={() => {
                                                                    handleInputChange('cleanupType', type);
                                                                    toggleDropdown('cleanupType');
                                                                }}
                                                            >
                                                                {type}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Language */}
                                        <div className="create-event-form-group">
                                            <label className="create-event-form-label">Language (Optional)</label>
                                            <div className="create-event-dropdown">
                                                <button
                                                    type="button"
                                                    className="create-event-dropdown-button"
                                                    onClick={() => toggleDropdown('language')}
                                                >
                                                    <span className="create-event-dropdown-button-text">
                                                        {eventData.language}
                                                    </span>
                                                    <ChevronDown className="create-event-dropdown-icon" />
                                                </button>
                                                {dropdownOpen.language && (
                                                    <div className="create-event-dropdown-menu">
                                                        {languages.map((lang) => (
                                                            <button
                                                                key={lang}
                                                                type="button"
                                                                className="create-event-dropdown-item"
                                                                onClick={() => {
                                                                    handleInputChange('language', lang);
                                                                    toggleDropdown('language');
                                                                }}
                                                            >
                                                                {lang}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="create-event-submit-section">
                                            <button
                                                type="button"
                                                className="create-event-submit-button"
                                                onClick={handleSubmit}
                                            >
                                                Submit
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
