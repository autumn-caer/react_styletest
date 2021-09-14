import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styled from "styled-components";
import { CourseGoalInputProps } from "../../../interface/CourseGoal";

const FormControl = styled.div<{isValid: boolean}>`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => (props.isValid ? 'red' : 'black')} ;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&  input {
  display: block;
  width: 100%;
  border: 1px solid, ${props => (props.isValid ? 'red' : '#ccc')} ;
  background-color: ${props => (props.isValid ? '#ffd7d7' : 'transparent')} ;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}


`;

const CourseInput = (props: CourseGoalInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={!isValid}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
