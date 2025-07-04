import React, { useState, useRef, useEffect } from 'react';

const WASTE_OPTIONS = [
  'Plastic',
  'Paper',
  'Glass',
  'Metal',
  'Organic',
  'E-waste',
  'Other',
];

const WasteTypeSelector = ({ value, onChange }) => {
  const [input, setInput] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef(null);

  // Click-away listener
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [showDropdown]);

  const filteredOptions = WASTE_OPTIONS.filter(
    (option) =>
      option.toLowerCase().includes(input.toLowerCase()) &&
      !value.includes(option)
  );

  const handleSelect = (option) => {
    if (!value.includes(option)) {
      onChange([...value, option]);
    }
    setInput('');
    setShowDropdown(false);
  };

  const handleRemove = (option) => {
    onChange(value.filter((w) => w !== option));
  };

  return (
    <div className="waste-type-selector" style={{ position: 'relative', marginBottom: 24 }} ref={wrapperRef}>
      <label className="waste-type-label">Waste Types</label>
      <div
        className="waste-type-input-wrapper"
        style={{
          display: 'flex', flexWrap: 'wrap', gap: 8, padding: '8px 8px 4px 8px',
          border: '2px solid #2EE58F', borderRadius: '1rem', background: '#f8fffc', minHeight: 48,
          alignItems: 'center', boxShadow: '0 2px 8px #EAF6F0', transition: 'border 0.2s',
        }}
        onClick={() => setShowDropdown(true)}
      >
        {value.map((waste) => (
          <span
            key={waste}
            className="waste-chip"
            style={{
              display: 'flex', alignItems: 'center', background: '#e0f2fe', color: 'var(--primary)',
              borderRadius: 16, padding: '4px 12px', fontSize: 14, marginRight: 4,
            }}
          >
            {waste}
            <span
              style={{ marginLeft: 8, cursor: 'pointer', fontWeight: 'bold', color: 'var(--primary)' }}
              onClick={e => { e.stopPropagation(); handleRemove(waste); }}
            >×</span>
          </span>
        ))}
        <input
          type="text"
          value={input}
          onChange={e => { setInput(e.target.value); setShowDropdown(true); }}
          placeholder={value.length === 0 ? 'Select Waste Types' : ''}
          style={{ border: 'none', outline: 'none', fontSize: 16, flex: 1, minWidth: 120, background: 'transparent', padding: 4 }}
          onFocus={() => setShowDropdown(true)}
        />
      </div>
      {showDropdown && filteredOptions.length > 0 && (
        <div
          className="waste-type-dropdown"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1.5px solid var(--primary)',
            borderRadius: '1rem',
            boxShadow: '0 4px 16px #EAF6F0',
            zIndex: 10,
            maxHeight: 200,
            overflowY: 'auto',
          }}
        >
          {filteredOptions.map(option => (
            <div
              key={option}
              style={{ padding: '10px 16px', cursor: 'pointer', fontSize: 15, color: 'var(--primary)' }}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WasteTypeSelector; 