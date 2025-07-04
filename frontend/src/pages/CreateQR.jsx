import React, { useState } from 'react';
import { events } from '../data/events'; // Use your shared events data

const CreateQR = () => {
  const [selectedEventId, setSelectedEventId] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    if (selectedEventId) setShowQR(true);
  };

  const selectedEvent = events.find(ev => ev.id === selectedEventId);

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <div style={{ width: '100%', maxWidth: 420, minWidth: 260, margin: '0 auto', padding: '32px 0 0 0', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#222', textAlign: 'center', fontWeight: 700, fontSize: 24, marginBottom: 18 }}>Create Attendance QR</h2>
        <form onSubmit={handleGenerate} style={{ width: '100%', marginBottom: 24 }}>
          <label htmlFor="event-select" style={{ fontWeight: 600, color: '#222', marginBottom: 8, display: 'block' }}>Select Event</label>
          <select id="event-select" value={selectedEventId} onChange={e => { setSelectedEventId(e.target.value); setShowQR(false); }} style={{ width: '100%', padding: '12px', borderRadius: 10, border: '1.5px solid #bbb', fontSize: 16, marginBottom: 16 }} required>
            <option value="">-- Choose an event --</option>
            {events.map(ev => (
              <option key={ev.id} value={ev.id}>{ev.title}</option>
            ))}
          </select>
          <button type="submit" style={{ width: '100%', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer' }}>Generate QR</button>
        </form>
        {showQR && selectedEvent && (
          <div style={{ background: '#fff', borderRadius: 16, padding: 24, boxShadow: '0 4px 16px #0001', textAlign: 'center' }}>
            <h3 style={{ color: '#222', fontWeight: 700, fontSize: 18, marginBottom: 12 }}>{selectedEvent.title}</h3>
            <img src="/qr-placeholder.png" alt="QR Code" style={{ width: 180, height: 180, objectFit: 'contain', marginBottom: 8 }} />
            <div style={{ color: '#666', fontSize: 14 }}>Volunteers can scan this QR to mark attendance for this event.</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateQR; 