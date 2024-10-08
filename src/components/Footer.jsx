import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/matheuspauldev" target="_blank" rel="noreferrer">
        <i className="ri-github-fill" />
        {' '}
      </a>
      <a href="https://www.linkedin.com/in/matheus-paul/" target="_blank" rel="noopener noreferrer">
        {' '}
        <i className="ri-linkedin-box-fill" />
      </a>
    </footer>
  );
}

export default Footer;
