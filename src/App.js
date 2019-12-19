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
          <button onClick={() => setDarkMode((prevMode) => !prevMode)}>
            Toggle theme
          </button>
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
