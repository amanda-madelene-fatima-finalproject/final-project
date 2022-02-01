import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../../reducers/todo';
import styled from 'styled-components';
import AddTodo from './AddTodo';
import { editTasks } from '../../reducers/todo';
import { deleteTasks } from '../../reducers/todo';
//--------- STYLED COMPONENTS ----------//

const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #ef737d;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 40px;
  border: solid 1px black;
  border-radius: 50px;
  background-color: whitesmoke;
`;

const Headline = styled.h1`
  color: #ef737d;
`;

const Tasks = styled.div``;

const TodoList = () => {
  //----------- SELECTORS ----------//
  const todoItems = useSelector((store) => store.todo.items);
  const accessToken = useSelector((store) => store.user.accessToken);
  const userId = useSelector((store) => store.user.userId);
  const taskId = useSelector((store) => store.todo.taskId);

  const [editTask, setEditTask] = useState('');
  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  //--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  useEffect(() => {
    dispatch(getTasks(accessToken, userId));
    // getTask is a function being executed here but defined in the todo reducer that fetches the tasks by userId.
    // If the fetch is success, the todo reducer gets updated with the tasks and that's why they appear in the return below.
  }, [dispatch, accessToken, userId]);

  const onEditTasks = (accessToken, taskId, editTask) => {
    dispatch(editTasks(accessToken, taskId, editTask));
  };

  const onDeleteTasks = (accessToken, taskId) => {
    dispatch(deleteTasks(accessToken, taskId));
  };

  return (
    <ListContainer>
      <Wrapper>
        <AddTodo />
        <Headline>My todos:</Headline>

        <Tasks>
          {todoItems.map((item) => (
            <>
              <div key={item._id}>{item.task}</div>
              <div>
                {/* <input
                  type="text"
                  placeholder="Add new task here.."
                  value={editTask}
                  onChange={(event) => setEditTask(event.target.value)}
                /> */}
                <button
                  type="submit"
                  onClick={() => onEditTasks(accessToken, taskId, editTask)}
                >
                  Edit
                </button>
                <div>
                  <button onClick={() => onDeleteTasks(accessToken, taskId)}>
                    Delete
                  </button>
                </div>
              </div>
            </>
          ))}
        </Tasks>
      </Wrapper>
    </ListContainer>
  );
};
export default TodoList;
