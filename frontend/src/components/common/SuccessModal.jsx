// src/components/common/SuccessModal.jsx
import React from 'react';
import './styles/SuccessModal.css'; // We'll create this CSS file next

const SuccessModal = ({ title, message, onClose }) => {
    return (
        <div className="success-modal-overlay" onClick={onClose}>
            <div className="success-modal-content" onClick={e => e.stopPropagation()}>
                <h3>{title}</h3>
                <p>{message}</p>
                <button className="modal-close-button" onClick={onClose}>
                    Got It!
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;