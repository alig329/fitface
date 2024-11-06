import React from 'react';
import './Style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Ume Mariam</h2>
        <ul className="footer-links">
          <li>Home Page</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
        <div className="footer-social">
          <i className="fas fa-facebook-f"></i>
          <i className="fas fa-instagram"></i>
          <i className="fas fa-youtube"></i>
          <i className="fas fa-tiktok"></i>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Web development & Marketing by AL-FA Group</p>
      </div>
    </footer>
  );
};

export default Footer;
