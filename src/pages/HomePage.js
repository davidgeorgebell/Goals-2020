import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const HomePage = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
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
      <main>
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <h2>Toggle the switch to change theme</h2>
      </main>
    </div>
  );
};
export default HomePage;
