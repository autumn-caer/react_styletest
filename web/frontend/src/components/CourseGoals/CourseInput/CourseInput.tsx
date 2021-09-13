import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event: any) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
