import React from "react";
import Lottie from "react-lottie";
import { useSelector } from "react-redux";
import animationData from "../animations/loading.json";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
`;

const LoadingIndicator = () => {
  const loading = useSelector((store) => store.ui.Loading);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoaderWrapper>
      {loading && <Lottie options={defaultOptions} height={800} width={800} />}
    </LoaderWrapper>
  );
};

export default LoadingIndicator;
