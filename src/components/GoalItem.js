import React, { useContext } from 'react';

import { GoalContext } from '../contexts/GoalContext';

const GoalItem = ({ goal }) => {
  const { removeGoal } = useContext(GoalContext);
  return (
    <div className='goal-item-container'>
      <li onClick={() => removeGoal(goal.id)}>{goal.description}</li>
    </div>
  );
};
export default GoalItem;
