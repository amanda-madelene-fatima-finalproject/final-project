import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Login from './Login';
import NavbarWelcome from './NavbarWelcome.js';
import AdCopyWelcome from './AdCopyWelcome.js';
import WelcomeImage from './WelcomeImage.js';
import Footer from '../reusable-components/Footer.js';
import InfoText from './InfoText.js';
import Loader from 'components/reusable-components/Loader.js';

const Welcome = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      {loading == true ? (
        <Loader animationType="todoData" />
      ) : (
        <Container>
          <NavbarWelcome />
          <Grid>
            <AdCopyWelcome />
            <WelcomeImage />
            <Login />
            <InfoText />
          </Grid>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Welcome;

//--------- STYLED COMPONENTS ----------//
const Container = styled.main`
  min-height: 90vh;

  width: 100%;
  background-color: white;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
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
