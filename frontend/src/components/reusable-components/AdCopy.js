import React from 'react';
import styled from 'styled-components';

const AdCopy = (props) => {
  const { text } = props;

  return (
    <Container>
      <Headline>{text}</Headline>
    </Container>
  );
};

export default AdCopy;

//--------- STYLED COMPONENTS ----------//
const Headline = styled.h1`
  font-size: 30px;
  font-weight: 800;
  width: 300px;

  @media (min-width: 768px) {
    font-size: 45px;
    font-weight: 900;
    width: 370px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 400px; */
  /* width: 400px; */
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    /* width: 500px; */
  }
`;
