import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="banner">
      <div className="banner-content">
        <h2>Report Crime Anonymously</h2>
        <p>See something? Say something. Every report makes our nation more secure.</p>
        <button className="report-btn" onClick={() => navigate('/report')}>Report Crime Now</button>
      </div>
    </div>
  );
};

export default Banner;
