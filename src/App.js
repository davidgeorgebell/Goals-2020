import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode);

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
    getPrefColourScheme();
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColourScheme();
    // if mode was saved -> dark / light
    if (isReturningUser) {
      return savedMode;
      // if preferred colour scheme is dark -> dark
    } else if (userPrefersDark) {
      return true;
      // otherwise -> light
    } else {
      return false;
    }
  }

  function getPrefColourScheme() {
    if (!window.matchMedia) return;

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

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
}

export default App;
