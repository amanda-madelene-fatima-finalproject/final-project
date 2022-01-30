import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTasks } from "../reducers/todo";
import styled from "styled-components";
import AddTodo from "./AddTodo";

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

 //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

//--------- USEEFFECT FOR DISPATCHING THE GetTASKS THUNK  ----------//

  useEffect(() => {
    dispatch(getTasks(accessToken, userId)); 
    // getTask is a function being executed here but defined in the todo reducer that fetches the tasks by userId.
    // If the fetch is success, the todo reducer gets updated with the tasks and that's why they appear in the return below.
  }, [dispatch, accessToken, userId]); 

  return (
    <ListContainer>
      <Wrapper>
        <AddTodo />
        <Headline>My todos:</Headline>
        <Tasks>
          {todoItems.map((item) => (
            <div key={item._id}>{item.task}</div>
          ))}
        </Tasks>
      </Wrapper>
    </ListContainer>
  );
};
export default TodoList;
