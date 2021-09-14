import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import {CourseGoalListProps, CourseGoal} from '../../../interface/CourseGoal'
import './CourseGoalList.css';

const CourseGoalList = (props: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal: CourseGoal) => (
        <CourseGoalItem
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
