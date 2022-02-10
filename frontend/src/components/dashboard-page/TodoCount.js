import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const TodoCount = () => {
  //----------- SELECTORS ----------//
  const uncompleteTodos = useSelector(
    (store) => store.todo.items.filter((item) => !item.done).length
  );

  return (
    <>
      <CounterText>
        You have <span>{uncompleteTodos}</span> tasks to-do<span>.</span>
      </CounterText>
    </>
  );
};

export default TodoCount;

//--------- STYLED COMPONENTS ----------//
const CounterText = styled.p`
  margin-top: 50px;
  font-family: 'Poppins';
  span {
    color: #ef737d;
    font-weight: bold;
  }
`;
