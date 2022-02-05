import React from "react";
import Lottie from "react-lottie";
import notfound from "../../animations/notfound.json";
const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    notfound: notfound,
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

export default NotFound;
