import React from 'react'
import './styles/FilterSection.css'

const FilterSection = ({ filters, onFilterChange }) => {
  const { location, wasteType, dateRange } = filters

  return (
    <div className="filters">
      <select 
        value={location} 
        onChange={(e) => onFilterChange('location', e.target.value)}
      >
        <option value="">Location</option>
        <option value="mah">Maharashtra</option>
        <option value="goa">Goa</option>
        <option value="ker">Kerala</option>
      </select>

      <select 
        value={wasteType} 
        onChange={(e) => onFilterChange('wasteType', e.target.value)}
      >
        <option value="">Waste Type</option>
        <option value="plastic">Plastic</option>
        <option value="general">General</option>
        <option value="electronic">Electronic</option>
      </select>

      <select 
        value={dateRange} 
        onChange={(e) => onFilterChange('dateRange', e.target.value)}
      >
        <option value="">Date Range</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
      </select>
    </div>
  )
}

export default FilterSection