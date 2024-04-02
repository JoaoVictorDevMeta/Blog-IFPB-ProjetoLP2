import React from 'react';
import './Button.css';

const Button = ({ type, className = '', children, handleClick = () => {} }) => {
  return (
    <button 
        className={((type==='outline' || type==='outline-white') ? 'btn' : '') + ` btn-${type} ${className}`} 
        onClick={handleClick}
    >{children}
    </button>
  );
};

export default Button;