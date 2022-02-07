import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 30px;
  font-weight: 800;
  width: 400px;

  @media (min-width: 768px) {
    font-size: 60px;
  font-weight: 900;
  width: 600px;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 400px; */
  width: 400px; 
  /* margin: 0 auto; */

  @media (min-width: 768px) {
    width: 700px; 
  }
`;

const Text = styled.div``;

const AdCopy = (props) => {
  const { text } = props;

  return (
    <Container>
      <Headline>{text}</Headline>
    </Container>
  );
};

export default AdCopy;
