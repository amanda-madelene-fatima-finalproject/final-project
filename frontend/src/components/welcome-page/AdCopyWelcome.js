import React from 'react';
import styled from 'styled-components';

const AdCopyWelcome = () => {
  return (
    <Container>
      <Headline>
        Unscramble your brain &amp;&amp; <Span>DeBug </Span>your life.
      </Headline>

      <Text>
        Do you have a tendency to disappear into your work? Maybe you sit down
        in front of your computer and the next time you look up you realize it’s
        been 5 hours?
      </Text>
      <Text>
        Don’t get us wrong, it’s amazing that you love your work, but you know
        what? We bet you could love it even more, and be even more efficient if
        you took a minute look over your <span>daily habits</span>.
      </Text>
    </Container>
  );
};

export default AdCopyWelcome;

//--------- STYLED COMPONENTS ----------//
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

const Headline = styled.h1`
  font-size: 35px;
  font-weight: 800;
  width: 300px;

  @media (min-width: 768px) {
    font-size: 40px;
    font-weight: 900;
  }
  @media (min-width: 1024px) {
    font-size: 50px;
    width: 400px;
  }
  @media (min-width: 1440px) {
    font-size: 60px;
    width: 450px;
  }
`;
const Text = styled.p`
  width: 300px;

  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    width: 400px;
  }
  @media (min-width: 1440px) {
    font-size: 21px;
    width: 450px;
  }
`;

const Span = styled.span`
  color: #ef737d;
  /* margin: 0; */
`;
