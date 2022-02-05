import React from "react";
import Lottie from "react-lottie";
import loading from "../animations/loading.json";

const LoadingIndicator = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    loading: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={800} width={800} />
    </div>
  );
};

export default LoadingIndicator;
