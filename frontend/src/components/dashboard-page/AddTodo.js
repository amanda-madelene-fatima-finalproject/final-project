import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { postTasks } from "../../reducers/todo";
import moment from "moment";
// import { postTasks } from "../../reducers/todo";

//--------- STYLED COMPONENTS ----------//
const AddContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* min-height: 100vh; */
  background-color: whitesmoke;
  margin-bottom: 20px;
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
      <h1>
        Today <span>{moment().format("ddd D MMM")}</span>
      </h1>
      <div>
        <input
          id="task"
          type="text"
          value={task}
          placeholder="Add tasks here.."
          onChange={(event) => setTask(event.target.value)}
        ></input>
        <button
          type="submit"
          onClick={() => onPostTasks(accessToken, userId, task)} //WHY IS THIS FUNCTION NOT WORKIIIIING? SOS
        >
          <i class="fas fa-plus-square"></i>
        </button>
      </div>
    </AddContainer>
  );
};

export default AddTodo;
