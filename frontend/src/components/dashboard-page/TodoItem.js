import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditModal from "./EditModal.js";
import moment from "moment";

import { deleteTasks, toggleTasks } from "../../reducers/todo";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    <Container>
      <div key={data._id}>
        {data.task} {moment(data.createdAt).format("ddd D MMM")}
      </div>
      <input
        type="checkbox"
        checked={data.done}
        onChange={() => onToggleTasks(accessToken, data._id, data.done)}
      />

      <EditModal data={data} />

      <button onClick={() => onDeleteTasks(accessToken, data._id)}>
        <i class="fas fa-trash"></i>
      </button>
    </Container>
  );
};

export default TodoItem;
