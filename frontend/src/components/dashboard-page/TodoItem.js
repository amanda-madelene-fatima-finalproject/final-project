import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditModal from "./EditModal.js";
import moment from "moment";
import { Button } from "@material-ui/core";

import { deleteTasks, toggleTasks } from "../../reducers/todo";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.li``;

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  /* margin-left: 5px; */
  font-size: 12px;

  p {
    margin: 2px;
  }
`;

const TodoText = styled.p`
  font-size: 13px;
  font-weight: bold;
`;

const TimeText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #ef737d;
  font-size: 10px;

  span {
    margin-right: 4px;
    font-size: 9px;
  }
`;

const TodoItem = ({ data }) => {
  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  // const userId = useSelector((store) => store.user.userId);
  //const taskId = useSelector((store) => store.todo.taskId);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  //--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  const onDeleteTasks = (accessToken, taskId) => {
    dispatch(deleteTasks(accessToken, taskId));
  };

  const onToggleTasks = (accessToken, taskId, done) => {
    console.log(accessToken, taskId, done);
    dispatch(toggleTasks(accessToken, taskId, done));
  };

  return (
    <Container maxWidth="xs">
      <UL key={data._id}>
        <List>
          <TodoText>{data.task}</TodoText>
          <TimeText>
            <span>
              <i class="fas fa-calendar-day"></i>
            </span>
            {moment(data.createdAt).format("ddd D MMM")}
          </TimeText>
        </List>
      </UL>

      <input
        type="checkbox"
        checked={data.done}
        onChange={() => onToggleTasks(accessToken, data._id, data.done)}
      />

      <EditModal data={data} />

      <Button
        type="submit"
        color="secondary"
        variant="outlined"
        onClick={() => onDeleteTasks(accessToken, data._id)}
      >
        <i class="fas fa-trash"></i>
      </Button>
    </Container>
  );
};

export default TodoItem;
