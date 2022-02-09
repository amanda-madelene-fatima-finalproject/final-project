import React from 'react';
import styled from 'styled-components';
import Footer from 'components/reusable-components/Footer.js';

import NavbarNotUser from '../../components/footer-page/NavbarNotUser.js';
import amanda from '../../assets/amanda.png';
import madelene from '../../assets/madelene.png';

//--------- ABOUT US  ----------//
const AboutUs = () => {
  return (
    <>
      <NavbarNotUser />
      <Wrapper>
        <HeadingOne>Who are we?</HeadingOne>
      </Wrapper>
      <MainContainer>
        <Grid>
          <ImageContainer>
            <Img src={amanda} alt="Amanda" />
          </ImageContainer>

          <HeadingTwoContainer>
            <h2>Amanda Tilly</h2>
          </HeadingTwoContainer>

          <Navigation>
            <a href="https://github.com/amandatilly?tab=repositories">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/amanda-tilly/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </Navigation>

          <Article>
            <HeadingThreeContainer>
              <h3>Frontend-developer</h3>
            </HeadingThreeContainer>
            {/* <TextWrapper> */}
            <Text>
              Cat ipsum dolor sit amet, fart in owners food but good morning
              sunshine for human give me attention meow. Meow in empty rooms hit
              you unexpectedly, for paw your face to wake you up in the morning.
              Catch mouse and gave it as a present plan steps for world
              domination grab pompom in mouth and put in water dish toilet paper
              attack claws fluff everywhere meow miao french ciao litterbox.
              Hiss at vacuum cleaner meow to be let out headbutt owner's knee
              but furrier and even more furrier hairball or bite the neighbor's
              bratty kid allways wanting food. Howl uncontrollably for no reason
              lick arm hair i heard this rumor where the humans are our owners,
              pfft, what do they know?
            </Text>
            {/* </TextWrapper> */}
          </Article>
        </Grid>

        <Grid>
          <ImageContainer>
            <Img src={madelene} alt="Madelene" />
          </ImageContainer>

          <HeadingTwoContainer>
            <h2>Madelene Trang</h2>
          </HeadingTwoContainer>

          <Navigation>
            <a href="https://github.com/MT-dotse?tab=repositories">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/madelene-trang-dev/">
              <i>linkedin Icon</i>
            </a>
          </Navigation>

          <Article>
            <HeadingThreeContainer>
              <h3>Frontend-developer</h3>
            </HeadingThreeContainer>
            {/* <TextWrapper> */}
            <Text>
              Cat ipsum dolor sit amet, fart in owners food but good morning
              sunshine for human give me attention meow. Meow in empty rooms hit
              you unexpectedly, for paw your face to wake you up in the morning.
              Catch mouse and gave it as a present plan steps for world
              domination grab pompom in mouth and put in water dish toilet paper
              attack claws fluff everywhere meow miao french ciao litterbox.
              Hiss at vacuum cleaner meow to be let out headbutt owner's knee
              but furrier and even more furrier hairball or bite the neighbor's
              bratty kid allways wanting food. Howl uncontrollably for no reason
              lick arm hair i heard this rumor where the humans are our owners,
              pfft, what do they know?
            </Text>
            {/* </TextWrapper> */}
          </Article>
        </Grid>

        <Grid>
          <ImageContainer>
            <Img src={amanda} alt="Fatima" />
          </ImageContainer>

          <HeadingTwoContainer>
            <h2>Fatima Gamero Romero</h2>
          </HeadingTwoContainer>

          <Navigation>
            <a href="https://github.com/Fatima-GR?tab=repositories">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/fatima-gamero-romero-071224212/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </Navigation>

          <Article>
            <HeadingThreeContainer>
              <h3>Frontend-developer</h3>
            </HeadingThreeContainer>
            {/* <TextWrapper> */}
            <Text>
              Cat ipsum dolor sit amet, fart in owners food but good morning
              sunshine for human give me attention meow. Meow in empty rooms hit
              you unexpectedly, for paw your face to wake you up in the morning.
              Catch mouse and gave it as a present plan steps for world
              domination grab pompom in mouth and put in water dish toilet paper
              attack claws fluff everywhere meow miao french ciao litterbox.
              Hiss at vacuum cleaner meow to be let out headbutt owner's knee
              but furrier and even more furrier hairball or bite the neighbor's
              bratty kid allways wanting food. Howl uncontrollably for no reason
              lick arm hair i heard this rumor where the humans are our owners,
              pfft, what do they know?
            </Text>
            {/* </TextWrapper> */}
          </Article>
        </Grid>
      </MainContainer>
      <Footer />
    </>
  );
};
export default AboutUs;

//--------- STYLED COMPONENTS ----------//
const HeadingOne = styled.h1`
  color: #ef737d;
`;

const MainContainer = styled.main`
  min-height: 100vh;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  margin: 0 auto;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Text = styled.p`
  font-size: 16px;
`;
const TextWrapper = styled.div`
  padding: 10px;
`;
const HeadingTwoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeadingThreeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Article = styled.article`
  margin: 30px;
`;
