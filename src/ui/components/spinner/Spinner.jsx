import React from 'react';
import './Spinner.css';

const LoadingSpinner = ({m  = '100px'}) => (
  <div className="spinner" style={{margin:`${m} auto`}}>
    <div className="double-bounce1"></div>
    <div className="double-bounce2"></div>
  </div>
);

export default LoadingSpinner;