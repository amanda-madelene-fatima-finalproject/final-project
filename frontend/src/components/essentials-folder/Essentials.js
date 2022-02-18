import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  const { img, alt } = props;
  return (
    <ImageContainer>
      <Img src={img} alt={alt} />
    </ImageContainer>
  );
};

export default Image;

//--------- STYLED COMPONENTS ----------//
const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (min-width: 768px) {
    margin-bottom: 100px;
    margin-top: 90px;
  }
  @media (min-width: 1024px) {
    width: auto;
    height: 400px;
  }
`;

const Img = styled.img`
  width: auto;
  height: 300px;

  @media (min-width: 768px) {
    width: auto;
    height: 300px;
  }

  @media (min-width: 1024px) {
    width: auto;
    height: 400px;
  }
`;
