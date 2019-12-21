import React from 'react';

import '../styles/header.css';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className='header-container'>
        <nav>
          <div className='toggle-container'>
            <span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
            <span className='toggle'>
              <input
                checked={darkMode}
                onChange={() => setDarkMode((prevMode) => !prevMode)}
                type='checkbox'
                className='checkbox'
                id='checkbox'
              />
              <label htmlFor='checkbox' />
            </span>
            <span style={{ color: darkMode ? '#9c27b0' : 'grey' }}>☽</span>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Header;
