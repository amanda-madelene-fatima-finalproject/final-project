import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postTasks } from "../reducers/todo";

const AddTodo = () => {
  const [task, setTask] = useState("");

  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);

  const dispatch = useDispatch;

  const onPostTasks = (accessToken, userId, task) => {
    dispatch(postTasks(accessToken, userId, task));
    setTask(""); // clears the input
  };
  return (
    <section>
      <h1>Today</h1>
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
          onClick={() => onPostTasks(accessToken, userId, task)}
        >
          Add Task
        </button>
      </div>
    </section>
  );
};

export default AddTodo;
