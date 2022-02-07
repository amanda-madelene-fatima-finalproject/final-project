import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EditModal from "./EditModal.js";
import moment from "moment";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import { deleteTasks, toggleTasks } from "../../reducers/todo";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* input {
    display: none;
  } */
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

const useStyles = makeStyles({
  checked: {
    "&:hover": { color: "#e5e5e5", backgroundColor: "white" },
  },
});

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
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <Section>
      <StyledCheckBox
                className='checkbox'
                type='checkbox'
                checked={data.done}
                onChange={() => onToggleTasks(accessToken, data._id, data.done)}
              />
              <div>
          
                {/* <p
                  className={
                    data.done ? 'complete-todo' : 'uncomplete-todo'
                  }
                >
                  {data.task}
                </p> */}
              </div>
        <UL key={data._id}>
        
          <List>
            <TodoText>{data.task}</TodoText>
            <TodoText>{data.category}</TodoText>
            <TimeText>
              <span>
                <i className="fas fa-calendar-day"></i>
              </span>
              {moment(data.createdAt).format("ddd D MMM")}
            </TimeText>
          </List>
        </UL>
      </Section>

      <Section>
        <form>
        {/* <Button variant="contained" color="primary" className={classes.checked}>
          <input
          type="checkbox"
          checked={data.done}
          onChange={() => onToggleTasks(accessToken, data._id, data.done)}
          />
          
          <i class="fas fa-check"></i>
        </Button > */}
        </form>
        
              
           
        

        <EditModal data={data} />

        <Button
          type="submit"
          color="secondary"
          variant="outlined"
          onClick={() => onDeleteTasks(accessToken, data._id)}
        >
          <i class="fas fa-trash"></i>
        </Button>


        

      </Section>
    </Container>
  );
};

const StyledCheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: black;
  width: 0.7em;
  height: 0.7em;
  border: 0.10em solid #ef737d;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ef737d;
  }
  &:checked::before {
    transform: scale(1);
  }
  @media (max-width: 500px) {
    width: 1.2em;
    height: 1.2em;
  }`

export default TodoItem;

