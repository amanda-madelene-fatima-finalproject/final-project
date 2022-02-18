import React from 'react';
import Lottie from 'react-lottie';
import profileData from '../../animations/profile.json';
import todoData from '../../animations/todo.json';
import balanceData from '../../animations/dashboard.json';
import helloData from '../../animations/hello.json';
import styled from 'styled-components';

const animationData = {
  helloData,
  balanceData,
  profileData,
  todoData,
};

const Loader = ({ animationType }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData[animationType],
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <LoaderWrapper>
      <Lottie options={defaultOptions} height={500} width={500} />
    </LoaderWrapper>
  );
};

export default Loader;

//--------- STYLED COMPONENTS ----------//
const LoaderWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;
