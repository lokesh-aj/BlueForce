import { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import FilterSection from '../components/FilterSection'
import EventCard from '../components/EventCard'
import Pagination from '../components/Pagination'
import './styles/VolunteerHomePage.css'

function VolunteerHomePage() {
  const [filters, setFilters] = useState({
    location: '',
    wasteType: '',
    dateRange: ''
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const events = [
    {
      id: 1,
      title: 'Coastal Cleanup at Sandy Shores',
      location: 'Sandy Shores, CA',
      image: 'https://images.unsplash.com/photo-1618477461853-cf6ed80faba5?q=80&w=300'
    },
    {
      id: 2,
      title: 'Community Beach Cleanup at Sunset Cove',
      location: 'Sunset Cove, FL',
      image: './larrywheels_placeholder_img.jpg'
    },
    {
      id: 3,
      title: 'Eco-Warriors Cleanup at Paradise Beach',
      location: 'Paradise Beach, HI',
      image: './larrywheels_placeholder_img.jpg'
    },
    {
      id: 4,
      title: 'Ocean Guardians Cleanup at Coral Bay',
      location: 'Coral Bay, FL',
      image: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?q=80&w=300'
    },
    {
      id: 5,
      title: 'Beach Beautification Day at Mariner\'s Point',
      location: 'Mariner\'s Point, OR',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=300'
    },
    {
      id: 6,
      title: 'Shoreline Savers Cleanup at Pelican Beach',
      location: 'Pelican Beach, NC',
      image: './larrywheels_placeholder_img.jpg'
    }
  ]

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page on new search
  }

  const handleEnroll = (event) => {
    // Implement enrollment logic here
    console.log('Enrolling in event:', event)
  }

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
          {events.map(event => (
            <EventCard 
              key={event.id}
              event={event}
              onEnroll={handleEnroll}
            />
          ))}
        </div>

        <Pagination 
          currentPage={currentPage}
          totalPages={5}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  )
}

export default VolunteerHomePage