import React, { useContext } from 'react';

import { GoalContext } from '../contexts/GoalContext';

import GoalItem from './GoalItem';

const GoalList = () => {
  const { goals } = useContext(GoalContext);
  return goals.length ? (
    <div>
      <ul>
        {goals.map((goal) => {
          return <GoalItem goal={goal} key={goal.id} />;
        })}
      </ul>
    </div>
  ) : (
    <h3>Add some Goals...</h3>
  );
};

export default GoalList;
