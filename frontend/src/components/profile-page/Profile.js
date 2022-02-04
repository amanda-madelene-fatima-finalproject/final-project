import React from "react";
import styled from "styled-components";

import ProfileImage from "./ProfileImage.js";
import TodoCompleted from "components/profile-page/TodoCompleted.js";
// import AdCopy from "../../components/reusable-components/AdCopy.js";

const MainContainer = styled.main`
  min-height: 100vh;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Profile = () => {
  return (
    <MainContainer>
      <Grid>
        <ProfileImage />
        <TodoCompleted />
      </Grid>
    </MainContainer>
  );
};

export default Profile;
