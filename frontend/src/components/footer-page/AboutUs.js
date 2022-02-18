import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NavbarNotUser from '../../components/footer-page/NavbarNotUser.js';
import Footer from 'components/reusable-components/Footer.js';
import Loader from 'components/reusable-components/Loader.js';
import amanda from '../../assets/amanda.png';
import madelene from '../../assets/madelene.png';
import fatima from '../../assets/fatima.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; //icons from react-icons-library-font-awesome

//--------- ABOUT US  ----------//
const AboutUs = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });
  return (
    <>
      {loading == true ? (
        <Loader animationType="profileData" />
      ) : (
        <MainContainerWrap>
          <NavbarNotUser />
          <HeadingOne>Who are we?</HeadingOne>
          <MainContainer>
            <Flex>
              <Img src={amanda} alt="Amanda frontend developer" />

              <HeadingTwo>Amanda Tilly</HeadingTwo>

              <Navigation>
                <Anchor
                  href="https://github.com/amandatilly?tab=repositories"
                  target="_blank"
                >
                  <FaGithub size="2em" color="black" />
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/amanda-tilly/"
                  target="_blank"
                >
                  <FaLinkedin size="2em" color="black" />
                </Anchor>
              </Navigation>

              <Article>
                <HeadingThree>Frontend-developer</HeadingThree>

                <Text>
                  Hi, I am a frontend developer &amp; a yoga+meditation teacher.
                  I love learning and trying new things, first and foremost I am
                  and will always be a student. There is always more to know, to
                  explore and add to the blend. My unique journey is what fules
                  my creativity and piece by piece I hope that my ever-growing
                  experience can truly help make a difference in this world. I
                  want to create solutions to problems that matter and develop
                  tools and services that will help to solve our global
                  challenges.
                </Text>
              </Article>
            </Flex>

            <Flex>
              <Img src={madelene} alt="Madelene frontend developer" />

              <HeadingTwo>Madelene Trang</HeadingTwo>

              <Navigation>
                <Anchor
                  href="https://github.com/MT-dotse?tab=repositories"
                  target="_blank"
                >
                  <FaGithub size="2em" color="black" />
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/madelene-trang-dev/"
                  target="_blank"
                >
                  <FaLinkedin size="2em" color="black" />
                </Anchor>
              </Navigation>

              <Article>
                <HeadingThree>Frontend-developer</HeadingThree>

                <Text>
                  Hi, I am a creative frontend developer with a background in
                  project management and sustainability. I was drawn to
                  programming by the possibility to develop my creative side and
                  along the journey I found my knack for solving problems and
                  passion for building useful applications with color and
                  meaning. I consider myself a lifelong learner who strives to
                  be the best version of myself in my personal and professional
                  life.
                </Text>
              </Article>
            </Flex>

            <Flex>
              <Img src={fatima} alt="Fatima frontend developer" />

              <HeadingTwo>Fatima Gamero Romero</HeadingTwo>

              <Navigation>
                <Anchor
                  href="https://github.com/Fatima-GR?tab=repositories"
                  target="_blank"
                >
                  <FaGithub size="2em" color="black" />
                </Anchor>
                <Anchor
                  href="https://www.linkedin.com/in/fatima-gamero-romero-071224212/"
                  target="_blank"
                >
                  <FaLinkedin size="2em" color="black" />
                </Anchor>
              </Navigation>

              <Article>
                <HeadingThree>Frontend-developer</HeadingThree>

                <Text>
                  Hi, I am a frontend developer based in Zurich but willing to
                  work remotely. Throughout my various working experiences, I’ve
                  learned to cope with stress and fast paced working
                  environments, where quick decision making, problem solving and
                  flexibility is essential. I always strive to improve as a
                  person and get better at what I do.
                </Text>
              </Article>
            </Flex>
          </MainContainer>
          <Footer />
        </MainContainerWrap>
      )}
    </>
  );
};
export default AboutUs;

//--------- STYLED COMPONENTS ----------//
const MainContainerWrap = styled.main`
  height: 100vh;
  width: 100%;
  background-color: white;
`;

const HeadingOne = styled.h1`
  color: #ef737d;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;
const HeadingThree = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeadingTwo = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const MainContainer = styled.main`
  /* min-height: 100vh; */
  height: auto;
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    margin: 0 60px;
  }

  @media (min-width: 1440px) {
    margin: 0 300px;
  }
`;

const Flex = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 auto;
`;
const Text = styled.p`
  font-size: 16px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Anchor = styled.a`
  margin: 0 3px;
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;
const Article = styled.article`
  margin: 0 30px;
`;
