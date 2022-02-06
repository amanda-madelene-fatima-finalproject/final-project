import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postTasks } from "../../reducers/todo";
import moment from "moment";
import { TextField } from "@material-ui/core";

// import { postTasks } from "../../reducers/todo";

//--------- STYLED COMPONENTS ----------//
const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background-color: whitesmoke;
  /* margin-bottom: 20px; */
  margin: 0;
`;

const AddTodo = () => {
  //--------- LOCAL STATE ----------//
  const [task, setTask] = useState("");

  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  const onPostTasks = (accessToken, userId, task) => {
    dispatch(postTasks(accessToken, userId, task));
    setTask(""); // clears the input
  };

  return (
    <AddContainer>
      <Headline>
        Today <span>{moment().format("ddd D MMM")}</span>
      </Headline>
      <div>
        <TextField
          color="secondary"
          variant="outlined"
          label="Add your tasks"
          id="task"
          type="text"
          value={task}
          placeholder="Add tasks here.."
          onChange={(event) => setTask(event.target.value)}
        ></TextField>
        <button
          type="submit"
          onClick={() => onPostTasks(accessToken, userId, task)}
        >
          <i class="fas fa-plus-square"></i>
        </button>
      </div>
    </AddContainer>
  );
};

const Headline = styled.h1`
  span {
    font-size: 14px;
    font-weight: 300;
  }
`;

export default AddTodo;
