import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import EditModal from './EditModal.js';
import { deleteTasks, toggleTasks } from '../../reducers/todo';

const TodoItem = ({ data }) => {
  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);

  //--------- DISPATCHES ----------//
  const dispatch = useDispatch();

  //--------- ONCLICK DISPATCHING DELETE TASK THUNK ----------//
  const onDeleteTasks = (accessToken, taskId) => {
    dispatch(deleteTasks(accessToken, taskId));
  };

  //--------- ONCHANGE DISPATCHING TOGGLE TASK THUNK ----------//
  const onToggleTasks = (accessToken, taskId, done) => {
    dispatch(toggleTasks(accessToken, taskId, done));
  };

  return (
    <Container>
      <Section>
        <StyledCheckBox
          className="checkbox"
          type="checkbox"
          checked={data.done}
          onChange={() => onToggleTasks(accessToken, data._id, data.done)}
        />

        <List>
          <TodoText className={data.done ? 'complete-todo' : 'uncomplete-todo'}>
            {data.task}
          </TodoText>
          <Div>
            <TimeText>
              <span>
                <i className="fas fa-calendar-day"></i>
              </span>
              {moment(data.createdAt).format('ddd D MMM')}
            </TimeText>
            <CatWrap>
              <CategoryText>{data.category}</CategoryText>
            </CatWrap>
          </Div>
        </List>
      </Section>

      <Section>
        <EditModal data={data} />
        <Button onClick={() => onDeleteTasks(accessToken, data._id)}>
          <i className="fas fa-trash"></i>
        </Button>
      </Section>
    </Container>
  );
};

//--------- STYLED COMPONENTS ----------//
const Container = styled.section`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 10px;
`;

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  font-size: 12px;
  margin-left: 20px;

  p {
    margin: 2px;
  }
`;

const TodoText = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
  font-style: italic;
  text-align: left;
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

const CategoryText = styled.span`
  font-size: 10px;
  line-height: 13px;
  letter-spacing: 0.01em;
  text-align: center;
  background: #e5e5e5;
  font-weight: 500;
  border-radius: 5px;
  width: auto;
  height: auto;
  padding: 3px;
  margin-left: 5px;
  letter-spacing: 1px;
`;

const CatWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    color: #ef737d;
    cursor: pointer;
  }
`;

const StyledCheckBox = styled.input`
  cursor: pointer;
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: black;
  width: 0.7em;
  height: 0.7em;
  border: 0.1em solid #ef737d;
  border-radius: 1em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
  &::before {
    content: '';
    width: 0.4em;
    height: 0.4em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #ef737d;
  }
  &:checked::before {
    transform: scale(1);
  }
  @media (min-width: 768px) {
    width: 1em;
    height: 1em;
  }
`;

export default TodoItem;
