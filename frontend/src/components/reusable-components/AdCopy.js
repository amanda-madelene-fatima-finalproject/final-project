import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  font-size: 70px;
  font-weight: 900;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 600px;
  margin: 0 auto;
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
