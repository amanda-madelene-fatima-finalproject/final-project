import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../animations/loading';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={800} width={800} />
    </LoaderWrapper>
  );
};

export default Loader;
