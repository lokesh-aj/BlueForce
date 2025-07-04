import React from 'react'
import '../styles/SearchBar.css'

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <img 
          src="/search.png" 
          alt="Search" 
          className="search-icon"
        />
        <input
          type="text"
          placeholder="Search by location or date"
          className="search-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SearchBar