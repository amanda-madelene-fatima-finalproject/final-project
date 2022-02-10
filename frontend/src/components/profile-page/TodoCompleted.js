import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const TodoCompleted = () => {
  //--------- LOCAL STATE ----------//
  const amountTasks = useSelector((store) => store.todo.items.length);

  return (
    <>
      <Section>
        <h2>Keep up the good work!</h2>

        <CounterText>
          You have completed <span>{amountTasks}</span> tasks today
          <span>!</span>
        </CounterText>
      </Section>
    </>
  );
};

export default TodoCompleted;

//--------- STYLED COMPONENTS ----------//
const CounterText = styled.p`
  margin-top: 20px;
  span {
    color: #ef737d;
    font-weight: bold;
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  /* border: solid 1px black; */
  border-radius: 50px;
  /* background-color: whitesmoke; */
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  min-width: 200px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;

  h2 {
    color: #ef737d;
  }

  @media (min-width: 768px) {
    min-height: 350px;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
