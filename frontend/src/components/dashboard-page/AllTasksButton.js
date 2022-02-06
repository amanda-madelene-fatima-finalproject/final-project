import React from "react";
import { useDispatch } from "react-redux";
import { todo } from "../../reducers/todo.js";
import Button from "@material-ui/core/Button";

import Container from "@material-ui/core/Container";

const AllTasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Button
        color="secondary"
        variant="outlined"
        onClick={() => dispatch(todo.actions.completeAllTasks())}
      >
        Complete All
      </Button>

      <Button
        color="secondary"
        variant="outlined"
        onClick={() => dispatch(todo.actions.removeAllTasks())}
      >
        Remove All
      </Button>
    </Container>
  );
};
export default AllTasksButton;
