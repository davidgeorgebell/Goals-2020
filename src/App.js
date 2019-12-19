import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import './App.css';
import Header from './components/Header';
import GoalList from './components/GoalList';
import GoalContextProvider from './contexts/GoalContext';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <GoalContextProvider>
      <div className='App'>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <main>
            <h2>App components</h2>
            <GoalList />
          </main>
        </div>
      </div>
    </GoalContextProvider>
  );
}

export default App;
