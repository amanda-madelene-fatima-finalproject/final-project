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
  border-radius: 50px;
  /* margin-bottom: 20px; */
  margin: 0;
`;

const AddTodo = () => {
  //--------- LOCAL STATE ----------//
  const [task, setTask] = useState("");

  // const [category, setCategory] = useState({
  //   work: "Work",
  //   home: "Home",
  //   social: "Social",
  //   health: "Health",
  //   other: "Other",
  // });

  const [category, setCategory] = useState("");

  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  const onPostTasks = (accessToken, userId, task, category) => {
    dispatch(postTasks(accessToken, userId, task, category));
    setTask(""); // clears the input
    setCategory(""); // clears the input
  };

  const onNewCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <AddContainer>
      <Headline>
        Today <span>{moment().format("ddd D MMM")}</span>
      </Headline>
      <form>
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

        <select id="category"  onChange={onNewCategoryChange}>
          <option value="">Select category</option>
          <option value="work">Work</option>
          <option value="home">Home</option>
          <option value="social">Social</option>
          <option value="wellness">Wellness</option>
          <option value="other">Other</option>
        </select>

        <button
          disabled={task === '' && category === ''}
          type="submit"
          onClick={() => onPostTasks(accessToken, userId, task, category)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </form>
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
