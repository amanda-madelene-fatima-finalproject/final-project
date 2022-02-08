import React from 'react';

import Image from '../reusable-components/Image.js';
import EssentialsImg from '../../assets/essentials.png';

const EssentialsImage = () => {
  return (
    <>
      <Image
        img={EssentialsImg}
        alt="Welcome image"
        // style={margin:20px ; border:2px solid red;}
      />
    </>
  );
};

export default EssentialsImage;
