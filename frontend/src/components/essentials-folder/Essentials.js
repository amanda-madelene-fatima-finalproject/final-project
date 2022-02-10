import React, { useState, useEffect } from 'react';
import Navbar from '../reusable-components/Navbar.js';
import Footer from 'components/reusable-components/Footer.js';
import EssentialsImage from './EssentialsImage.js';
import styled from 'styled-components';
import Loader from 'components/reusable-components/Loader.js';
import EssentialContainerBox from './EssentialContainerBox.js';
import AdCopyEssentials from './AdCopyEssentials.js';

const Essentials = () => {
  //--------- LOCAL STATE ----------//
  const [loading, setLoading] = useState(true);

  //--------- USEEFFECT ----------//
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      {loading == true ? (
        <Loader animationType="balanceData" />
      ) : (
        <Container>
          <Navbar />
          <Grid>
            <AdCopyEssentials />
            <EssentialsImage />
            <EssentialContainerBox />
            <EssentialContainerBox />
            <EssentialContainerBox />
            <EssentialContainerBox />
          </Grid>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default Essentials;

//--------- STYLED COMPONENTS ----------//
const Container = styled.main`
  min-height: 90vh;
  background-color: white;
  /* grid-template-columns: 1fr; */
  /* justify-content: center;
  align-items: center; */
  /* width: 400px; */
  /* height: 100vh; */
  /* margin-left: 20px;
  margin-right: 20px; */
  margin: 0 15px 0 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 50px 0 50px;
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
