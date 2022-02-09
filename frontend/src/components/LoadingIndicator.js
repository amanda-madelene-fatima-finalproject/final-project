import React from 'react';
import Lottie from 'react-lottie';
import { useSelector } from 'react-redux';
import animationData from '../animations/dashboard.json';
import styled from 'styled-components';

const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.Loading);

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
      {loading && <Lottie options={defaultOptions} height={500} width={500} />}
    </LoaderWrapper>
  );
};

export default LoadingIndicator;

//--------- STYLED COMPONENTS ----------//
const LoaderWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
