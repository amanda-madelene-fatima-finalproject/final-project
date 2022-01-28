import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

// import { API_URL } from '../utils/urls';
import { postTasks } from "../reducers/todo";

// Thunk fetchTask/reducers/todo';

const MainContainer = styled.main`
  min-height: 100vh;
`;

const Dashboard = () => {
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  // useEffect(() => {
  //   dispatch(fetchTasks(accessToken, userId));
  // }, [dispatch, accessToken, userId]);

  useEffect(() => {
    dispatch(postTasks(accessToken, userId));
  }, [dispatch, accessToken, userId]);

  return (
    <MainContainer>
      <TodoList />
    </MainContainer>
  );
};
export default Dashboard;
