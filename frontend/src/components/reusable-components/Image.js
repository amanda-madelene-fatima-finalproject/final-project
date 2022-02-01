import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 500px;
  height: 500px;
`;

const Image = (props) => {
  const { img, alt } = props;
  return (
    <ImageContainer>
      <Img src={img} alt={alt} />
    </ImageContainer>
  );
};

export default Image;
