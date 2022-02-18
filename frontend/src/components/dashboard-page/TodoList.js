import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import TodoCount from '../dashboard-page/TodoCount.js';
import AddTodo from './AddTodo';
import AllTasksButton from './AllTasksButton.js';
import TodoItem from './TodoItem.js';

import { getTasks } from '../../reducers/todo';
import { todo } from '../../reducers/todo';

import moment from 'moment';

export const isDoneToday = (date) => {
  return moment(date).isSame(moment(), 'day');
};

const TodoList = () => {
  //----------- SELECTORS ----------//
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  const essentialTasks = useSelector((store) => store.todo.essentialTasks);

  //--------- OBJECT.KEYS METHOD----------//
  // Method that converts the essentialTasks object to an array so we can iterate through it below
  const essentialTasksKeys = Object.keys(essentialTasks);
  // console.log(essentialTasksKeys)

  //--------- DISPATCH----------//
  const dispatch = useDispatch();

  //--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  useEffect(() => {
    dispatch(getTasks(accessToken, userId));
    // getTask is a function being executed here but defined in the todo reducer that fetches the tasks by userId.
    // If the fetch is success, the todo reducer gets updated with the tasks and that's why they appear in the return below.
  }, [dispatch, accessToken, userId]);

  const onToggleEssentialTask = (item) => {
    console.log(item);
    dispatch(todo.actions.toggleEssentialTasks(item));
  };
  const textEssentialTasks = (item) => {
    if (item === 'Hydrate') {
      return 'Drink at least 8 glasses of water.';
    } else if (item === 'Move') {
      return 'Move your body! A little goes a long way.';
    } else if (item === 'Break') {
      return 'Take regular breaks throughout the day.';
    } else if (item === 'Sleep') {
      return "Prioritize sleep, it's important.";
    } else if (item === 'Nature') {
      return 'Spend time in nature, it heals.';
    }
  };

  return (
    <Wrapper>
      <AddTodo />
      <div>
        <SubHeading>Daily Essentials</SubHeading>
        <EssDiv>
          {essentialTasksKeys.map((item) => (
            <Essential key={item}>
              <StyledCheckBox
                className="checkbox"
                type="checkbox"
                checked={isDoneToday(essentialTasks[item])} //this gives us the value of the key selected: true or false
                onChange={() => onToggleEssentialTask(item)} //passing the key selected here (like hydrate or exercise or break etc)
              />
              <EssTask>{textEssentialTasks(item)}</EssTask>
            </Essential>
          ))}
        </EssDiv>
        <SubHeading>Your Tasks</SubHeading>
        <EssDiv>
          {todoItems.map((item) => (
            <TodoItem key={item.task} data={item} />
          ))}
        </EssDiv>
      </div>
      <AllTasksButton />
      <TodoCount />
    </Wrapper>
  );
};
export default TodoList;

//--------- STYLED COMPONENTS ----------//
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 50px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  min-width: 260px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

const Essential = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 30px;
  margin: 0;
`;

const EssTask = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  text-align: left;
  color: #ef737d;
`;

const SubHeading = styled.h4`
  font-family: 'Poppins', sans-serif;
  margin: 20px 0;
`;

const EssDiv = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

const StyledCheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: black;
  margin: 0 20px 0 0;
  width: 0.7em;
  height: 0.7em;
  border: 0.1em solid #ef737d;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ef737d;
  }
  &:checked::before {
    transform: scale(1);
  }
  p {
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    width: 1em;
    height: 1em;
  }
`;

//Link to understand the essentialTasksKeys
//https://attacomsian.com/blog/javascript-iterate-objects#:~:text=keys()%20Method-,The%20Object.,the%20value%20of%20each%20property.
