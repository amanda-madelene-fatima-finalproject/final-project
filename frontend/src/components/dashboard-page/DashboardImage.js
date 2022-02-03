import React from "react";
import Image from "../reusable-components/Image.js";
// import styled from "styled-components";

import DashboardImg from "../../assets/dashboard.png";

const DashboardImage = () => {
  return (
    <>
      <Image
        img={DashboardImg}
        alt="Welcome image"
        // style={margin:20px ; border:2px solid red;}
      />
    </>
  );
};

export default DashboardImage;
