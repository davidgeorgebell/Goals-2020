import React, { createContext, useState, useEffect } from 'react';
import uuid from 'uuid/v1';

export const GoalContext = createContext();

const GoalContextProvider = (props) => {
  const [goals, setGoals] = useState([]);

  const addGoal = (description) => {
    setGoals([...goals, { description, id: uuid() }]);
  };
  const removeGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  useEffect(() => {
    const data = localStorage.getItem('goals');
    if (data) {
      setGoals(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  return (
    <GoalContext.Provider
      value={{
        goals,
        addGoal,
        removeGoal
      }}>
      {props.children}
    </GoalContext.Provider>
  );
};
export default GoalContextProvider;
