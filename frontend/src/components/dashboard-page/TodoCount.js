import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CounterText = styled.p`
  margin-top: 50px;
  font-family: "Poppins";
  span {
    color: #ef737d;
    font-weight: bold;
  }
`;

const TodoCount = () => {
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
