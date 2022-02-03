import React from "react";

import ProfileImg from "../../assets/profile.png";

const ProfileImage = () => {
  return (
    <>
      <Image
        img={ProfileImg}
        alt="Welcome image"
        // style={margin:20px ; border:2px solid red;}
      />
    </>
  );
};

export default ProfileImage;
