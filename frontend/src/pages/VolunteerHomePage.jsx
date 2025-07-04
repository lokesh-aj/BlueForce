import { useState } from 'react'
import Navbar from '../components/navbar/Navbar'
import SearchBar from '../components/common/SearchBar'
import FilterSection from '../components/events/FilterSection'
import EventCard from '../components/events/EventCard'
import Pagination from '../components/common/Pagination'
import './styles/VolunteerHomePage.css'
import { events } from '../data/events'; // Import the shared events data

function VolunteerHomePage() {
  const [filters, setFilters] = useState({
    location: '',
    wasteType: '',
    dateRange: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

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
      </main>
    </div>
  )
}

export default VolunteerHomePage