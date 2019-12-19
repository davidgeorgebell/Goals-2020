import React from 'react';
import ThemeContextProvider from './contexts/ThemeContext';

import './App.css';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <HomePage />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
