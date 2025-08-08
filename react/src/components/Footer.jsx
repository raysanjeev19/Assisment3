import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Matrix Calculator. All rights reserved.</p>
        <p>
          Made with ❤️ by 
          <a href="#" target="_blank" rel="noopener noreferrer"> Sanjeev</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;