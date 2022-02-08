import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 600px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-size: 35px;
  font-weight: 800;
  width: 300px;

  @media (min-width: 768px) {
    font-size: 60px;
    font-weight: 900;
    width: 600px;
  }
`;

const Text = styled.p`
  width: 300px;
`;

const Span = styled.span`
  color: #ef737d;
  /* margin: 0; */
`;

// const AdCopyContainer = styled.div``;

const AdCopyWelcome = () => {
  return (
    <Container>
      <Headline>
        Unscramble your brain &amp;&amp; <Span>DeBug </Span>your life.
      </Headline>

      <Text>
        Do you have a tendency to disappear into your work? Maybe you sit down
        in front of your computer and the next time you look up you realize it’s
        been 5 hours? At this point your really tired, your eyes are dry and so
        is your mouth. Maybe your body hurts in more places than one? Don’t get
        us wrong, it’s amazing that you love your work, but you know what? We
        bet you could love it even more, and be even more efficient if you took
        a minute look over your daily habits.{' '}
      </Text>
    </Container>
  );
};

export default AdCopyWelcome;
