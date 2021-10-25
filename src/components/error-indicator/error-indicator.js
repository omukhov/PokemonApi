import React from 'react';
import "./error-indicator.css";
import icon from './error.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <span>Ohhh!</span>
            <span>Something has gone terribly wrong</span>
            <span>(But we already sent Professor Oak to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;