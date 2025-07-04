import React from 'react';

const WeightInput = ({ value, onChange }) => (
  <div className="weight-input" style={{ marginBottom: 24 }}>
    <label className="weight-label">Weight (kg)</label>
    <input
      type="number"
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder="Weight in Kilograms"
      style={{ padding: '16px 12px', border: '2px solid #2EE58F', borderRadius: 12, fontSize: 16, background: '#fff', outline: 'none', boxShadow: '0 2px 8px #EAF6F0', transition: 'border 0.2s', width: '100%' }}
      min="0"
      step="0.01"
    />
  </div>
);

export default WeightInput; 