import React, { useContext } from 'react';
import { ThemeContext } from './contexts/ThemeContext';

import './App.css';
import Header from './components/Header';
import GoalList from './components/GoalList';
import GoalContextProvider from './contexts/GoalContext';
import GoalForm from './components/GoalForm';

function App() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <GoalContextProvider>
      <div className='App'>
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
          <Header setDarkMode={setDarkMode} darkMode={darkMode} />
          <main>
            <h1>Goals 2020</h1>
            <GoalForm />
            <GoalList />
          </main>
        </div>
      </div>
    </GoalContextProvider>
  );
}

export default App;
