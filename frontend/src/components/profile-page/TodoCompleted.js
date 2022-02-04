import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterText = styled.p`
  margin-top: 50px;
  span {
    color: #ef737d;
    font-weight: bold;
  }
`;

const TodoCompleted = () => {
  const amountTasks = useSelector((store) => store.todos.items.length);

  return (
    <>
      <CounterText>
        You have completed<span>{amountTasks}</span>tasks<span>.</span>
      </CounterText>
    </>
  );
};

export default TodoCompleted;
