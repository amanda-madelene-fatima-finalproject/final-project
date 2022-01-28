import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasks } from "../reducers/todo";
import styled from "styled-components";
import AddTodo from "./AddTodo";

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ef737d;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  border: solid 1px black;
  border-radius: 50px;
  background-color: whitesmoke;
`;

const Headline = styled.h1`
  color: #ef737d;
`;

const Tasks = styled.div``;

const TodoList = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks(accessToken, userId));
  }, [dispatch, accessToken, userId]); //

  return (
    <ListContainer>
      <Wrapper>
        <AddTodo />
        <Headline>My todos:</Headline>
        <Tasks>
          {todoItems.map((item) => (
            <div key={item._id}>{item.task}</div>
          ))}
        </Tasks>
      </Wrapper>
    </ListContainer>
  );
};
export default TodoList;
