import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

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
  max-width: 260px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;
`;

const EssentialTask = styled.p`
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  text-align: left;
  color: #ef737d;
  font-size: 15px;
  font-weight: 500;
`;

const EssentialTasks = () => {
  const essentialTasks = useSelector((store) => store.todo.essentialTasks);
  const essentialTasksKeys = Object.keys(essentialTasks);
  console.log(essentialTasks);

  return (
    <Section>
      <h2>Essential Tasks follow up:</h2>
      <h3>Have you remembered to do all the daily essential tasks?</h3>
      <p>Let's have a look!</p>

      {essentialTasksKeys.map((key) => (
        <div key={key}>
          <EssentialTask>
            {key}: {essentialTasks[key] !== false ? 'true' : 'false'}
          </EssentialTask>
        </div>
      ))}
    </Section>
  );
};

export default EssentialTasks;
