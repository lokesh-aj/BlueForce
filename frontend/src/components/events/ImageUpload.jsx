import React, { useRef } from 'react';

const ImageUpload = ({ value, onChange }) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div
      className="image-upload"
      style={{ border: '2.5px dashed #2EE58F', borderRadius: 12, background: '#fff', padding: '40px 0', textAlign: 'center', marginBottom: 24, boxShadow: '0 2px 8px #EAF6F0' }}
      onClick={handleImageClick}
    >
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Upload Image (Optional)</div>
      <div style={{ fontSize: 13, color: '#222', marginBottom: 16 }}>Click to upload an image of the collected waste.</div>
      {value && <div style={{ marginBottom: 8, color: '#1A7F5A' }}>{value.name}</div>}
      <button type="button" style={{ background: '#F6FBF8', border: 'none', borderRadius: 8, padding: '8px 24px', fontWeight: 500, cursor: 'pointer', fontSize: 14, boxShadow: '0 1px 4px #EAF6F0' }}>Upload Image</button>
    </div>
  );
};

export default ImageUpload; 