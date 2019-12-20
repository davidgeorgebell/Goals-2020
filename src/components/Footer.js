import React from 'react';

import '../styles/footer.css';

const Footer = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='footer-container'>
        <footer>Footer</footer>
      </div>
    </div>
  );
};
export default Footer;
