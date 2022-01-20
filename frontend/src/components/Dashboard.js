import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { API_URL } from "../utils/urls";
import todo from "../reducers/todo";

const Headline = styled.h1`
  color: blue;
`;

const Dashboard = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    };

    fetch(API_URL("tasks"), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(todo.actions.setItems(data.response));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      });
  }, [dispatch, accessToken]);

  return (
    <div>
      <Headline>My todos:</Headline>
      {todoItems.map((item) => (
        <div key={item._id}>{item.task}</div>
      ))}
    </div>
  );
};
export default Dashboard;
