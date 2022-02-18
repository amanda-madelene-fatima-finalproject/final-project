import React from 'react';
import Image from '../reusable-components/Image.js';

import WelcomeImg from '../../assets/welcome.png';

const WelcomeImage = () => {
  return (
    <>
      <Image img={WelcomeImg} alt="Welcome image" />
    </>
  );
};

export default WelcomeImage;
