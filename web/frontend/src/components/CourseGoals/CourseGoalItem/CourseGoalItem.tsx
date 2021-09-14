import React from 'react';

import './CourseGoalItem.css';
import {CourseGoalItemProps} from '../../../interface/CourseGoal'

const CourseGoalItem = (props: CourseGoalItemProps) => {
  
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
