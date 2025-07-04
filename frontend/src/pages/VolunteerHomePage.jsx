import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SearchBar from '../components/common/SearchBar'
import FilterSection from '../components/events/FilterSection'
import EventCard from '../components/events/EventCard'
import Pagination from '../components/common/Pagination'
import './styles/VolunteerHomePage.css'
import { events } from '../data/events'; // Import the shared events data
import { useNavigate } from 'react-router-dom';
import React from 'react';

function VolunteerHomePage() {
  const [filters, setFilters] = useState({
    location: '',
    wasteType: '',
    dateRange: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
    setCurrentPage(1); // Reset to first page on filter change
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page on new search
  }

  // --- Start: Filtering and Pagination Logic ---
  // Apply search query
  const searchedEvents = events.filter(event => {
    const titleMatch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descriptionMatch = event.description.toLowerCase().includes(searchQuery.toLowerCase());
    return titleMatch || descriptionMatch;
  });

  // Apply filters to searched results
  const filteredEvents = searchedEvents.filter(event => {
    const locationMatch = filters.location === '' || event.fullLocation.toLowerCase().includes(filters.location.toLowerCase());
    
    // Note: event.wasteType.focus is an object. You'll need to adjust FilterSection
    // if you want to filter by the exact wasteType options provided in FilterSection's select.
    // For now, let's assume wasteType.focus is a string you can match.
    const wasteTypeMatch = filters.wasteType === '' || (event.wasteType && event.wasteType.focus.toLowerCase().includes(filters.wasteType.toLowerCase()));
    
    // Date range filtering would require more complex date parsing and comparison.
    // For simplicity, it's omitted here but you'd implement it based on event.date
    const dateRangeMatch = true; // Placeholder for date filtering logic

    return locationMatch && wasteTypeMatch && dateRangeMatch;
  });

  // Pagination logic
  const eventsPerPage = 6; // Or whatever number you prefer
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  // --- End: Filtering and Pagination Logic ---

  // Modal close on click outside or Esc
  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setShowAttendanceModal(false);
    }
    if (showAttendanceModal) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showAttendanceModal]);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowAttendanceModal(true);
  };

  const handleMarkAttendance = () => {
    setShowAttendanceModal(false);
    navigate('/scan-qr');
  };

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
          {/* Map over currentEvents (after filtering and pagination) */}
          {currentEvents.length > 0 ? (
            currentEvents.map(event => (
              <EventCard
                key={event.id}
                event={event}
                onClick={handleEventClick}
              />
            ))
          ) : (
            <p>No events found matching your criteria.</p>
          )}
        </div>

        <Pagination
          currentPage={currentPage}
          // Pass the dynamically calculated totalPages
          totalPages={totalPages} 
          onPageChange={setCurrentPage}
        />

        {/* Attendance Modal */}
        {showAttendanceModal && (
          <div className="modal-overlay" style={{position:'fixed',top:0,left:0,width:'100vw',height:'100vh',background:'rgba(0,0,0,0.45)',zIndex:1000,display:'flex',alignItems:'center',justifyContent:'center'}} onClick={() => setShowAttendanceModal(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()} style={{background:'#222',color:'#fff',borderRadius:16,padding:32,maxWidth:340,width:'90vw',textAlign:'center',boxShadow:'0 8px 32px #0008'}}>
              <h2 style={{marginBottom:16}}>Mark Attendance</h2>
              <p style={{marginBottom:24}}>Please mark your attendance for this event before proceeding.</p>
              <button className="btn-primary" style={{width:'100%',fontSize:18,padding:'12px 0',borderRadius:12}} onClick={handleMarkAttendance}>Mark Attendance</button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default VolunteerHomePage