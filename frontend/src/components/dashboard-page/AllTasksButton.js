import React from "react";
import { useDispatch } from "react-redux";
import { todo } from "../../reducers/todo.js";

const AllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(todo.actions.completeAllTasks())}>
        Complete All
      </button>

      <button onClick={() => dispatch(todo.actions.removeAllTasks())}>
        Remove All
      </button>
    </div>
  );
};
export default AllTasksButton;
