import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import AddTodo from "./AddTodo";

// import { API_URL } from '../utils/urls';
import { fetchTasks, postTasks } from "../reducers/todo";

// Thunk fetchTask/reducers/todo';

const Headline = styled.h1`
  color: blue;
`;

const Dashboard = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    dispatch(fetchTasks(accessToken, userId));
  }, [dispatch, accessToken, userId]);

  useEffect(() => {
    dispatch(postTasks(accessToken, userId));
  }, [dispatch, accessToken, userId]);

  return (
    <>
      <div>
        <Headline>My todos:</Headline>
        {todoItems.map((item) => (
          <div key={item._id}>{item.task}</div>
        ))}
      </div>
      <div>
        {" "}
        <AddTodo />
      </div>
    </>
  );
};
export default Dashboard;
