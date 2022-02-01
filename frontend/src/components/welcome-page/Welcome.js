import React from 'react';
import styled from 'styled-components';

import Login from './Login';
import Navbar from './Navbar.js';
import AdCopyWelcome from './AdCopyWelcome.js';
import WelcomeImage from './WelcomeImage.js';

const Container = styled.main`
  background-color: white;
  height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Welcome = () => {
  return (
    <Container>
      <Navbar />
      <Grid>
        <AdCopyWelcome />
        <WelcomeImage />
        <Login />
        <Login />
      </Grid>
    </Container>
  );
};

export default Welcome;
