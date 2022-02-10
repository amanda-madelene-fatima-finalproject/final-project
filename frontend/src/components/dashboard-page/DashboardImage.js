import React from 'react';
import Image from '../reusable-components/Image.js';
import DashboardImg from '../../assets/dashboard.png';

const DashboardImage = () => {
  return (
    <>
      <Image img={DashboardImg} alt="Welcome image" />
    </>
  );
};

export default DashboardImage;
