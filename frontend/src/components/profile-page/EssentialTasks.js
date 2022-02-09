import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

// const textEssentialTasks = (key) => {
//   if (essentialTasks[key] !== false) {
//     return 'Drink at least 5 glasses of water.';
//   } else if (key === 'Move') {
//     return "Move your body, let's dance!";
//   } else if (key === 'Break') {
//     return 'Remember to take breaks.';
//   } else if (key === 'Sleep') {
//     return "Prioritize sleep, it's important.";
//   } else if (key === 'Nature') {
//     return 'Spend time in nature, it heals.';
//   }
// };

const EssentialTasks = () => {
  const essentialTasks = useSelector((store) => store.todo.essentialTasks);
  const essentialTasksKeys = Object.keys(essentialTasks);
  console.log(essentialTasks);

  const textEssentialTasks = (key) => {
    if (key === 'Hydrate') {
      return 'Did you drink enough water?';
    } else if (key === 'Move') {
      return 'Have you moved your body?';
    } else if (key === 'Break') {
      return 'Remember to take breaks?';
    } else if (key === 'Sleep') {
      return 'Did you prioritize your sleep?';
    } else if (key === 'Nature') {
      return 'Have you spent time in nature?';
    }
  };

  // const displayMessage = (key) => {
  //   return (
  //     <>
  //       <p>
  //         {key === 'Hydrate' && essentialTasks[key] === false
  //           ? "Don't worry, go chug some water right now!"
  //           : "Great job! Keep doing what you're doing!"}
  //       </p>
  //       <p>
  //         {key === 'Move' && essentialTasks[key] === false
  //           ? "Don't worry, there's still time today! You can do it!"
  //           : "Great job! Keep doing what you're doing!"}
  //       </p>
  //       <p>
  //         {key === 'Break' && essentialTasks[key] === false
  //           ? "Don't worry, there's still time today! You can do it!"
  //           : "Great job! Keep doing what you're doing!"}
  //       </p>
  //       {key === 'Sleep' && essentialTasks[key] === false
  //         ? "Don't worry, there's still time today! You can do it!"
  //         : "Great job! Keep doing what you're doing!"}
  //       <p>
  //         {key === 'Nature' && essentialTasks[key] === false
  //           ? "Don't worry, there's still time today! You can do it!"
  //           : "Great job! Keep doing what you're doing!"}
  //       </p>
  //     </>
  //   );
  // };

  return (
    <Section>
      <Header>happy habiting</Header>
      <SubWrap>
        <SubHeader>How is it going?</SubHeader>
        <SubHeader>
          We hope you are making some tiny steps in the right direction?
        </SubHeader>
      </SubWrap>
      <p>Let's have a look at your day so far!</p>

      {essentialTasksKeys.map((key) => (
        <div key={key}>
          <EssentialTask>
            <KeyText>{textEssentialTasks(key)}</KeyText>
            <Message>
              {essentialTasks[key] !== false
                ? "Yes, great job! Keep doing what you're doing!"
                : "Not yet. but don't worry, there's still time today!"}
            </Message>
          </EssentialTask>
        </div>
      ))}
    </Section>
  );

  //     {essentialTasksKeys.map((key) => (
  //       <div key={key}>
  //         <EssentialTask>
  //           <KeyText>{key}:</KeyText>

  //            {key key === 'Hydrate' && essentialTasks[key] === false
  //             ? "Don't worry, go chug some water right now!"
  //             : "Great job! Keep doing what you're doing!")}
  //           {key === 'Hydrate' && essentialTasks[key] === false
  //             ? "Don't worry, go chug some water right now!"
  //             : "Great job! Keep doing what you're doing!"}
  //           {key === 'Move' && essentialTasks[key] === false
  //             ? "Don't worry, there's still time today! You can do it!"
  //             : "Great job! Keep doing what you're doing!"}
  //           {key === 'Break' && essentialTasks[key] === false
  //             ? "Don't worry, there's still time today! You can do it!"
  //             : "Great job! Keep doing what you're doing!"}
  //           {key === 'Sleep' && essentialTasks[key] === false
  //             ? "Don't worry, there's still time today! You can do it!"
  //             : "Great job! Keep doing what you're doing!"}
  //           {key === 'Nature' && essentialTasks[key] === false
  //             ? "Don't worry, there's still time today! You can do it!"
  //             : "Great job! Keep doing what you're doing!"}
  //         </EssentialTask>
  //       </div>
};

export default EssentialTasks;

//--------- STYLED COMPONENTS ----------//
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

const Header = styled.h1`
  text-transform: capitalize;
  font-weight: 600;
  color: #ef737d;
`;

const SubHeader = styled.h3`
  font-size: 16px;
  margin: 2px;
  font-weight: 400;
  font-style: italic;
  line-height: 25px;
  letter-spacing: 2px;
`;

const SubWrap = styled.h3`
  border: 1px dotted #808080;
  padding: 10px;
  border-radius: 5px;
`;

const EssentialTask = styled.p`
  display: flex;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  text-align: left;
`;

const KeyText = styled.p`
  font-weight: 600;
  color: black;
  font-size: 16px;
  margin: 0;
`;

const Message = styled.p`
  font-style: italic;
  color: #ef737d;
  font-size: 14px;
  font-weight: 500;
  margin-top: 0;
`;
