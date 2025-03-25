import React from 'react';
import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Report Crime Anonymously</h2>
        <p>Help make the internet a safer place for everyone</p>
        <button 
          className="report-btn"
          onClick={() => navigate('/report-crime')}
        >
          Report Crime Now
        </button>
      </div>
    </div>
  );
};

export default Banner;