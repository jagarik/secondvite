// src/components/Footer.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="footer__social">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
