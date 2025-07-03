import React from 'react';
import '../../styles/landing.css';

const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button 
      className={`btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;