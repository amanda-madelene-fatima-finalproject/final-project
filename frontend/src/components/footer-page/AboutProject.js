import React from 'react';
import styled from 'styled-components';
import Footer from '../reusable-components/Footer.js';
import NavbarNotUser from '../../components/footer-page/NavbarNotUser.js';

const AboutProject = () => {
  return (
    <>
      <NavbarNotUser />
      <Container>
        <Wrapper>
          <Header>About this project</Header>
          <Text>
            Cat ipsum dolor sit amet, meow meow mama. Dream about hunting birds
            mewl for food at 4am but meow meow mama and love purr or eat my own
            ears, scamper. Chase after silly colored fish toys around the house
            why use post when this sofa is here, human clearly uses close to one
            life a night no one naps that long so i revive by standing on
            chestawaken! make muffins one of these days i'm going to get that
            red dot, just you wait and see , so ask for petting.
          </Text>
        </Wrapper>
        <Footer />
      </Container>
    </>
  );
};

export default AboutProject;

//--------- STYLED COMPONENTS ----------//
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  border-radius: 50px;
  background-color: whitesmoke;

  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);

  min-height: 200px;
  width: 240px;
  margin: 50px auto;
  background: white;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 450px;
  }

  @media (min-width: 1024px) {
    width: 550px;
    min-height: 450px;
  }
`;

const Header = styled.h1`
  color: #ef737d;
`;

const Text = styled.p`
  font-size: 16px;
  padding: 20px;
  color: black;
`;
