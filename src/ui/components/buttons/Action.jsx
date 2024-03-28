import React from 'react'

const Action = ({ handleClick, children, className }) => {
  return (
    <button className={className} onClick={handleClick}>
        {children}
    </button>
  )
}

export default Action