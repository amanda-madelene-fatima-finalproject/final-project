import React, { useState, useEffect } from 'react';
import NavbarNotUser from '../footer-page/NavbarNotUser.js';
import Loader from '../reusable-components/Loader.js';
import Footer from 'components/reusable-components/Footer.js';
import EssentialImageBall from '../welcome-page/EssentialImageBall.js';
import styled from 'styled-components';
import AdCopyInfoEssen from './AdCopyInfoEssen.js';
import EssentialContainerBox from '../essentials-folder/EssentialContainerBox.js';

const EssentialInfo = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });
  return (
    <>
      {loading == true ? (
        <Loader animationType="balanceData" />
      ) : (
        <Container>
          <NavbarNotUser />
          <Grid>
            <CopyWrap>
              <AdCopyInfoEssen />
            </CopyWrap>
            <EssentialImageBall />
            <EssentialContainerBox />
          </Grid>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default EssentialInfo;

//--------- STYLED COMPONENTS ----------//
const Container = styled.main`
  min-height: 90vh;
  /* width: 380px; */
  width: 100%;
  background-color: white;
  /* margin: 0 15px 0 15px; */

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    /* width: 730px; */
    /* margin: 0 50px 0 50px; */
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

const CopyWrap = styled.div`
  width: 400px;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
  @media (min-width: 1024px) {
    margin-left: 80px;
  }

  @media (min-width: 1440px) {
    margin-left: 180px;
  }
`;
