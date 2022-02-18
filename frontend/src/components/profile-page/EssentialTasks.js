import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const EssentialTasks = () => {
  //--------- LOCAL STATE ----------//

  const essentialTasks = useSelector((store) => store.todo.essentialTasks);
  const essentialTasksKeys = Object.keys(essentialTasks); //

  //converting the essentialTasks object in an array to be able to iterate
  // converting the essentialTasks object in an array to be a  // to show a different message instead of only the key from the reducer.
  const textEssentialTasks = (key) => {
    if (key === 'Hydrate') {
      return 'Did you drink enough water?';
    } else if (key === 'Move') {
      return 'Have you moved your body?';
    } else if (key === 'Break') {
      return 'Remembered to take breaks?';
    } else if (key === 'Sleep') {
      return 'Did you prioritize your sleep?';
    } else if (key === 'Nature') {
      return 'Have you spent time in nature?';
    }
  };
  // and object containing arrays of strings that we use to display a message
  // Anthe profile depending on if the task is done or not.
  const displayFeedback = {
    Hydrate: [
      "No. Don't worry, go chug some water right now!",
      'Yes, great job! Your body will thank you for it.',
    ],
    Move: [
      'No. Remember that a little goes a long way. Put on your favourite music and dance, do some gardening or play with your kids.',
      'Yes, awesome! You can always find ways to incorporate motion into your daily life in a way that feels good.',
    ],
    Break: [
      'No. Taking time to do nothing often brings everything into perspective. Come on, give it a go!',
      'Yes! It is okay to be a glowstick. Sometimes we have to break before we shine.',
    ],
    Sleep: [
      "No. Remember that tired minds don't plan well. Sleep first, plan later.",
      "Yes, sleep solves everything and you're doing it just right. Invest in rest. ",
    ],
    Nature: [
      "No. Do it now, sometimes you need to unplug and enjoy nature's company.",
      'Yes! The antidote for stress and exhaustion is nature.',
    ],
  };

  return (
    <Section>
      <Header>happy habiting</Header>
      <SubWrap>
        <SubHeader>How is it going?</SubHeader>
        <SubHeader>
          We hope you are making some tiny steps in the right direction?
        </SubHeader>
      </SubWrap>
      <EssDiv>
        <EssP>Let's have a look at your day so far!</EssP>

        {essentialTasksKeys.map((key) => (
          <div key={key}>
            <EssentialTask>
              <KeyText>{textEssentialTasks(key)}</KeyText>
              {/* here we go into the displayFeedback object and look for the dynamic key value
              to display, depending on if the task is done or not we show the first or second string in the object */}
              <Message>
                {displayFeedback[key][essentialTasks[key] ? 1 : 0]}
              </Message>
            </EssentialTask>
          </div>
        ))}
      </EssDiv>
    </Section>
  );
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
  border-radius: 50px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  min-width: 260px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;

  @media (min-width: 1024px) {
    width: 350px;
  }
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

const SubWrap = styled.div`
  border: 1px dotted #808080;
  padding: 10px;
  border-radius: 5px;
`;

const EssP = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const EssDiv = styled.div`
  text-align: left;
`;

const EssentialTask = styled.div`
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
  margin-bottom: 20px;
`;
