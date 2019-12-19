import React from 'react';

const GoalItem = ({ goal }) => {
  return (
    <div>
      <li>{goal.description}</li>
    </div>
  );
};
export default GoalItem;
