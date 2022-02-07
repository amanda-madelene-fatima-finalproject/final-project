import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem.js";
import { getTasks } from "../../reducers/todo";
import TodoCount from "../dashboard-page/TodoCount.js";
import AllTasksButton from "./AllTasksButton.js";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

//--------- STYLED COMPONENTS ----------//

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* padding: 40px; */
  border: solid 1px black;
  border-radius: 50px;
  background-color: whitesmoke;
`;

const Headline = styled.h1`
  color: #ef737d;
`;

//const Tasks = styled.div``;

const TodoList = () => {
  //----------- SELECTORS ----------//
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  const essentialTasks = useSelector((store) => store.todo.essentialTasks);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  //--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  useEffect(() => {
    dispatch(getTasks(accessToken, userId));
    // getTask is a function being executed here but defined in the todo reducer that fetches the tasks by userId.
    // If the fetch is success, the todo reducer gets updated with the tasks and that's why they appear in the return below.
  }, [dispatch, accessToken, userId]);

  return (
    <Container maxWidth="xs" disableGutters={true}>
      <Wrapper>
        <AddTodo />
        <Headline></Headline>
        <Container>
          <div>
            <h2>Essential Tasks</h2>
            {essentialTasks.map((item) => (
              <p>{item}</p>
            ))}
          </div>

          <Typography variant="h4">
            {todoItems.map((item) => (
              <TodoItem data={item} />
            ))}
          </Typography>
        </Container>
        <AllTasksButton />
        <TodoCount />
      </Wrapper>
    </Container>
  );
};
export default TodoList;
