import React from 'react'
import './Button.css';

const Action = ({ handleClick, children, type }) => {
  return (
    <button 
      className={((type==='outline' || type==='outline-white') ? 'btn' : '') + ` btn-${type} ${className}`}  
      onClick={handleClick}>
        {children}
    </button>
  )
}

export default Action