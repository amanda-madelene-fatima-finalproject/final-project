import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../reducers/todo";
import styled from "styled-components";

const Headline = styled.h1`
  color: blue;
`;

const TodoList = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(accessToken, userId));
  }, [dispatch, accessToken, userId]);

  return (
    <div>
      <Headline>My todos:</Headline>
      {todoItems.map((item) => (
        <div key={item._id}>{item.task}</div>
      ))}
    </div>
  );
};
export default TodoList;
