import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScanQR = () => {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: '100vh', background: '#16240f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
      <div style={{ width: '100%', maxWidth: 420, minWidth: 260, margin: '0 auto', padding: '32px 0 0 0', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <button style={{ background: 'none', border: 'none', color: '#fff', fontSize: 24, marginBottom: 16, cursor: 'pointer', alignSelf: 'flex-start', marginLeft: 8 }} onClick={() => navigate(-1)}>&larr;</button>
        <h2 style={{ color: '#fff', textAlign: 'center', fontWeight: 600, fontSize: 20, marginBottom: 12 }}>Check In</h2>
        <h3 style={{ color: '#fff', textAlign: 'center', fontWeight: 700, fontSize: 22, marginBottom: 8 }}>Scan QR Code</h3>
        <p style={{ color: '#b6c2b7', textAlign: 'center', fontSize: 14, marginBottom: 18 }}>Point your camera at the QR code to check in</p>
        <div style={{ background: '#f6e9d7', borderRadius: 16, padding: 16, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 18, width: '100%' }}>
          <img src="/qr-device.png" alt="QR Device" style={{ width: '100%', maxWidth: 180, height: 'auto', objectFit: 'contain', borderRadius: 12 }} />
        </div>
        <button style={{ width: '100%', background: '#2b3c23', color: '#fff', border: 'none', borderRadius: 10, padding: '12px 0', fontWeight: 600, fontSize: 16, marginBottom: 24, cursor: 'pointer' }}>Enter Event Code</button>
      </div>
      <div style={{ width: '100%', maxWidth: 420, minWidth: 260, margin: '0 auto', padding: 16 }}>
        <button style={{ width: '100%', background: '#3be158', color: '#16240f', border: 'none', borderRadius: 12, padding: '16px 0', fontWeight: 700, fontSize: 18, marginTop: 8, cursor: 'pointer', boxShadow: '0 2px 8px #0002' }}>Log Waste</button>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .scanqr-card, .scanqr-footer { max-width: 98vw !important; min-width: 0 !important; }
        }
      `}</style>
    </div>
  );
};

export default ScanQR; 