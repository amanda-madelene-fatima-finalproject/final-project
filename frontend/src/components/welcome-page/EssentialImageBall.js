import React from 'react';
import Image from '../reusable-components/Image.js';

import essentialball from '../../assets/essentialball.png';

const EssentialImageBall = () => {
  return (
    <>
      <Image
        img={essentialball}
        alt="Welcome image"
        // style={margin:20px ; border:2px solid red;}
      />
    </>
  );
};

export default EssentialImageBall;
