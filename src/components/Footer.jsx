import React from 'react';
import { 
  FaTwitter, 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaLinkedinIn,
  FaExternalLinkAlt 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="ministry-info">
          <h3>Ministry of Home Affairs</h3>
          <p>Government of India</p>
          <p>© {new Date().getFullYear()} National Cyber Crime Reporting Portal. All Rights Reserved.</p>
        </div>

        <div className="social-media">
          <a href="https://twitter.com/IndiaHomeMin" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="icon" />
            {/* <FaExternalLinkAlt className="external-icon" /> */}
          </a>
          <a href="https://facebook.com/Indiamha" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="icon" />
            {/* <FaExternalLinkAlt className="external-icon" /> */}
          </a>
          <a href="https://instagram.com/indiainternalaffairs" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" />
            {/* <FaExternalLinkAlt className="external-icon" /> */}
          </a>
          <a href="https://youtube.com/c/IndiaHomeMinistry" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="icon" />
            {/* <FaExternalLinkAlt className="external-icon" /> */}
          </a>
          <a href="https://linkedin.com/company/india-mha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn className="icon" />
            {/* <FaExternalLinkAlt className="external-icon" /> */}
          </a>
        </div>

        <div className="visitor-count">
          <p>Visitor Count: {Intl.NumberFormat('en-IN').format(124568)}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;