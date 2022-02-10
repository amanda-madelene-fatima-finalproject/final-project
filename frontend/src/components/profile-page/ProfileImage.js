import React from 'react';
import Image from '../reusable-components/Image.js';
import ProfileImg from '../../assets/profile.png';

const ProfileImage = () => {
  return (
    <>
      <Image img={ProfileImg} alt="Welcome image" />
    </>
  );
};

export default ProfileImage;
