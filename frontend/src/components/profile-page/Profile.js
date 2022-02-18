import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProfileImage from './ProfileImage.js';
import TodoCompleted from 'components/profile-page/TodoCompleted.js';
import Navbar from '../../components/reusable-components/Navbar.js';
import Loader from '../reusable-components/Loader.js';
import AdCopyProfile from './AdCopyProfile.js';
import EssentialTasks from './EssentialTasks.js';

const Profile = () => {
  //--------- LOCAL STATE ----------//
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      {loading == true ? (
        <Loader animationType="profileData" />
      ) : (
        <MainContainer>
          <Navbar />
          <Grid>
            <AdCopyProfile />
            <ProfileImage />
            <TodoCompleted />
            <EssentialTasks />
          </Grid>
        </MainContainer>
      )}
    </>
  );
};

export default Profile;

//--------- STYLED COMPONENTS ----------//
const MainContainer = styled.main`
  min-height: 90vh;
  background-color: white;
  margin: 0 15px 0 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 0 50px 0 50px;
  }
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
