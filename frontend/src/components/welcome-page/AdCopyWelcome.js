import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  margin: 0 auto;
`;

const Headline = styled.h1`
  font-family: 'poppins, sans-serif';
  font-size: 50px;
`;

// const AdCopyContainer = styled.div``;

const Text = styled.p``;
const AdCopyWelcome = () => {
  return (
    <Container>
      <Headline>Unscramble your brain &amp;&amp; DeBug your life.</Headline>

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
