import React from 'react';
import { useDispatch } from 'react-redux';
import { todo } from '../../reducers/todo.js';
// import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Container = styled.main`
  display: flex;
  margin-top: 20px;
`;

const Button = styled.button`
  border: none;
  font-family: 'Poppins', sans-serif;
  background-color: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  &:hover {
    background-color: #ef737d;
    color: white;
    border: 1px solid transparent;
    cursor: pointer;
  }
`;

// import Container from '@material-ui/core/Container';

const AllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Button onClick={() => dispatch(todo.actions.completeAllTasks())}>
        Complete All
      </Button>

      <Button onClick={() => dispatch(todo.actions.removeAllTasks())}>
        Remove All
      </Button>
    </Container>
  );
};
export default AllTasksButton;
