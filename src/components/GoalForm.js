import React, { useState, useContext } from 'react';
import { GoalContext } from '../contexts/GoalContext';

const GoalForm = () => {
  const { addGoal } = useContext(GoalContext);
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addGoal(description);
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add a Goal'
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        size='35'
      />
    </form>
  );
};
export default GoalForm;
