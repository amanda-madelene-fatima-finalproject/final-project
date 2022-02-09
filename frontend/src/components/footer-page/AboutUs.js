import React from 'react';
import styled from 'styled-components';

import NavbarNotUser from '../../components/footer-page/NavbarNotUser.js';

//--------- STYLED COMPONENTS ----------//
const HeadingOne = styled.h1``;

const MainContainer = styled.main`
  min-height: 100vh;
`;
const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  border: 2px solid red;
  border-radius: 50%;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const HeadingTwoContainer = styled.div``;
const Navigation = styled.nav``;
const HeadingThreeContainer = styled.div``;
const Article = styled.article``;

//--------- ABOUT US  ----------//

const AboutUs = () => {
  return (
    <MainContainer>
      <NavbarNotUser />
      <HeadingOne>Who are we?</HeadingOne>

      <Grid>
        <ImageContainer>
          <Img src="#" alt="Amanda" />
        </ImageContainer>

        <HeadingTwoContainer>
          <h2>Amanda Tilly</h2>
        </HeadingTwoContainer>

        <Navigation>
          <a href="https://github.com/amandatilly?tab=repositories">
            <i>Github icon</i>
          </a>
          <a href="https://www.linkedin.com/in/amanda-tilly/">
            <i>Linkedin Icon</i>
          </a>
        </Navigation>

        <Article>
          <HeadingThreeContainer>
            <h3>Frontend-developer</h3>
          </HeadingThreeContainer>

          <p>
            Cat ipsum dolor sit amet, fart in owners food but good morning
            sunshine for human give me attention meow. Meow in empty rooms hit
            you unexpectedly, for paw your face to wake you up in the morning.
            Catch mouse and gave it as a present plan steps for world domination
            grab pompom in mouth and put in water dish toilet paper attack claws
            fluff everywhere meow miao french ciao litterbox. Hiss at vacuum
            cleaner meow to be let out headbutt owner's knee but furrier and
            even more furrier hairball or bite the neighbor's bratty kid allways
            wanting food. Howl uncontrollably for no reason lick arm hair i
            heard this rumor where the humans are our owners, pfft, what do they
            know?
          </p>
        </Article>
      </Grid>

      <Grid>
        <ImageContainer>
          <Img src="#" alt="Amanda" />
        </ImageContainer>

        <HeadingTwoContainer>
          <h2>Madelene Trang</h2>
        </HeadingTwoContainer>

        <Navigation>
          <a href="https://github.com/MT-dotse?tab=repositories">
            <i>Github Icon</i>
          </a>
          <a href="https://www.linkedin.com/in/madelene-trang-dev/">
            <i>linkedin Icon</i>
          </a>
        </Navigation>

        <Article>
          <HeadingThreeContainer>
            <h3>Frontend-developer</h3>
          </HeadingThreeContainer>

          <p>
            Cat ipsum dolor sit amet, fart in owners food but good morning
            sunshine for human give me attention meow. Meow in empty rooms hit
            you unexpectedly, for paw your face to wake you up in the morning.
            Catch mouse and gave it as a present plan steps for world domination
            grab pompom in mouth and put in water dish toilet paper attack claws
            fluff everywhere meow miao french ciao litterbox. Hiss at vacuum
            cleaner meow to be let out headbutt owner's knee but furrier and
            even more furrier hairball or bite the neighbor's bratty kid allways
            wanting food. Howl uncontrollably for no reason lick arm hair i
            heard this rumor where the humans are our owners, pfft, what do they
            know?
          </p>
        </Article>
      </Grid>

      <Grid>
        <ImageContainer>
          <Img src="#" alt="Amanda" />
        </ImageContainer>

        <HeadingTwoContainer>
          <h2>Fatima Gamero Romero</h2>
        </HeadingTwoContainer>

        <Navigation>
          <a href="https://github.com/Fatima-GR?tab=repositories">
            <i>Github Icon</i>
          </a>
          <a href="https://www.linkedin.com/in/fatima-gamero-romero-071224212/">
            <i>linkedin Icon</i>
          </a>
        </Navigation>

        <Article>
          <HeadingThreeContainer>
            <h3>Frontend-developer</h3>
          </HeadingThreeContainer>

          <p>
            Cat ipsum dolor sit amet, fart in owners food but good morning
            sunshine for human give me attention meow. Meow in empty rooms hit
            you unexpectedly, for paw your face to wake you up in the morning.
            Catch mouse and gave it as a present plan steps for world domination
            grab pompom in mouth and put in water dish toilet paper attack claws
            fluff everywhere meow miao french ciao litterbox. Hiss at vacuum
            cleaner meow to be let out headbutt owner's knee but furrier and
            even more furrier hairball or bite the neighbor's bratty kid allways
            wanting food. Howl uncontrollably for no reason lick arm hair i
            heard this rumor where the humans are our owners, pfft, what do they
            know?
          </p>
        </Article>
      </Grid>
    </MainContainer>
  );
};
export default AboutUs;
