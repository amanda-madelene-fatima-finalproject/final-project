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
            As new programmers we quickly realized that it’s easy to get into
            bad work habits when spending so much time in front of a computer.
            When you’re passionate about what you do it can be hard to drag
            yourself away from the screen. At least this was our experience, and
            many seemed to agree, and that is where the idea for DeBug was born.
            We spend so much time debugging our code every day, so why not DeBug
            our lives while we’re at it.
          </Text>
          <Text>
            It has in fact been proven that focusing on your wellbeing; making
            sure you move your body, prioritizing your sleep, regularly taking
            breaks, spending time in nature and making sure you stay hydrated
            can be very beneficial for you and your work. Leading to a healthier
            brain and body, an enhanced mood, reduced anxiety and increased
            self-esteem.
          </Text>
          <Text>
            However, when you want to change behavior, jumping headlong into a
            major goal with both feet is often a waste of time. Instead, make
            tiny, incremental adjustments until they are part of your muscle
            memory. By starting small, you can attain big results. This is where
            we come in, we will gently remind you with our Daily Essentials to
            take one step at a time towards a smoother and happier day, every
            day.
          </Text>
          <Text>
            This web application was made by Amanda Tilly, Madelene Trang and
            Fatima Romero Gamero as our final project during the Technigo
            Frontend Developer boot camp. It is a multipage application where
            the frontend is built with React, Redux, Thunks and styled with
            Styled Components. The backend is built using Node.js, Express and
            mongoose. The web application is deployed with Heroku, MongoDB and
            Netlify.
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
