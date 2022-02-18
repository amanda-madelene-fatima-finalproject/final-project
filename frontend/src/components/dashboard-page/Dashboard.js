import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodoList from './TodoList';
import Navbar from 'components/reusable-components/Navbar.js';
import DashboardImage from '../dashboard-page/DashboardImage.js';
import AdCopyDashboard from '../../components/dashboard-page/AdCopyDashboard.js';
import LoadingIndicator from 'components/LoadingIndicator.js';
import Quotes from './Quotes.js';

const Dashboard = () => {
  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  const loading = useSelector((store) => store.ui.Loading);

  // ------------- NAVIGATE ----------//
  const navigate = useNavigate();

  //--------- USEEFFECT FOR THE ACCESSTOKEN ----------//
  useEffect(() => {
    // Once you are in the dashboard, the accessToken is set to true because the user has first logged in
    // so this condition right now, only executes when we refresh the page
    if (!accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <>
      {loading && <LoadingIndicator />}
      <MainContainer>
        <Navbar />
        <Grid>
          <AdCopyDashboard />
          <DashboardImage />
          <TodoList />
          <Quotes />
        </Grid>
      </MainContainer>
    </>
  );
};

export default Dashboard;

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
