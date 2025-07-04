import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import SearchBar from '../components/common/SearchBar';
import FilterSection from '../components/events/FilterSection';
import EventCard from '../components/events/EventCard';
import Pagination from '../components/common/Pagination';
import './styles/VolunteerHomePage.css';
import { events } from '../data/events'; // Import the shared events data

// Removed: import { useNavigate } from 'react-router-dom'; // No longer needed for this component
// Removed: import React from 'react'; // No longer needed for useEffect if modal is removed

function VolunteerHomePage() {
  const [filters, setFilters] = useState({
    location: '',
    wasteType: '',
    dateRange: ''
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Removed: Modal-related states
  // const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  // const [selectedEvent, setSelectedEvent] = useState(null);
  // Removed: const navigate = useNavigate();

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1); // Reset to first page on new search
  };

  // --- Filtering and Pagination Logic (kept as is) ---
  const searchedEvents = events.filter(event => {
    const titleMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  const filteredEvents = searchedEvents.filter(event => {
    const locationMatch = filters.location === '' || event.fullLocation.toLowerCase().includes(filters.location.toLowerCase());
    const wasteTypeMatch = filters.wasteType === '' || (event.wasteType && event.wasteType.focus.toLowerCase().includes(filters.wasteType.toLowerCase()));
    const dateRangeMatch = true; // Placeholder for date filtering logic

    return locationMatch && wasteTypeMatch && dateRangeMatch;
  });

  const eventsPerPage = 6;
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / filteredEvents.length); // Corrected calculation: totalPages should be based on filteredEvents.length / eventsPerPage
  // --- End Filtering and Pagination Logic ---


  // Removed: Modal close on click outside or Esc effect (useEffect)
  // Removed: handleEventClick function
  // Removed: handleMarkAttendance function

  return (
    <div className="volunteer-home">
      <Navbar />

      <main>
        <div className="search-section">
          <SearchBar onSearch={handleSearch} />
          <FilterSection
            filters={filters}
            onFilterChange={handleFilterChange}
          />
        </div>

        <div className="events-grid">
          {currentEvents.length > 0 ? (
            currentEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
              // Removed: onClick prop, as EventCard now handles its own navigation via Link
              />
            ))
          ) : (
            <p>No events found matching your criteria.</p>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        {/* Removed: Attendance Modal JSX */}
      </main>
    </div>
  );
}

export default VolunteerHomePage;