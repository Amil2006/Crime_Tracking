import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      {/* Upper Header */}
      <div className="upper-header">
        <div className="logo-container">
          <img 
            src={process.env.PUBLIC_URL + "/images/Emblem_of_India.svg"} 
            alt="NIA Logo" 
            className="logo-img"
            />
            
          <img 
            src={process.env.PUBLIC_URL + "/images/nia-logo.jpeg"} 
            alt="NIA Logo" 
            className="logo-img"
          />
          <div className="title-container">
            <h1>National Crime Reporting Portal</h1>
            <p>Government of India</p>
          </div>
          <div>
            <img 
              src={process.env.PUBLIC_URL + "/images/azadi-logo.webp"}
              alt="NIA Logo" 
              className="azadi-img"
            />
          </div>
        </div>
      </div>

      {/* Lower Header - Navigation Menu */}
      <div className="lower-header">
        <nav className="nav-menu">
          <div className="search-container">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="menu-options">
            <button className="menu-btn" onClick={() => navigate('/')}>Home</button>
            <button className="menu-btn" onClick={() => navigate('/about')}>About</button>
            <button className="menu-btn">Services</button>
            <button className="menu-btn">Contact Us</button>
            <button className="menu-btn" onClick={() => navigate('/login')}>Login</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
