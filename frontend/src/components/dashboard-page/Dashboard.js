import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./TodoList";
import DashboardImage from "../dashboard-page/DashboardImage.js";
import AdCopyDashboard from "../../components/dashboard-page/AdCopyDashboard.js";
// import Quotes from "../dashboard-page/Quotes.js";
import Navbar from "components/reusable-components/Navbar.js";
//import LoadingIndicator from "components/LoadingIndicator.js";

//import EditTask from './EditTask.js';

//--------- STYLED COMPONENTS ----------//
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

const AdCopyWrapper = styled.div`
  border: solid 2px red;
`;

const Dashboard = () => {
  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
  //const loading = useSelector((store) => store.ui.Loading);

  // const userId = useSelector((store) => store.user.userId);

  //--------- DISPATCHES ----------//
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  //--------- USEEFFECT FOR THE ACCESSTOKEN ----------//
  useEffect(() => {
    // Once you are in the dashboard, the accessToken is set to true because the user has first logged in
    // so this condition right now, only executes when we refresh the page
    if (!accessToken) {
      navigate("/");
    }
  }, [accessToken, navigate]);

  return (
    <>
      {/* {loading && <LoadingIndicator />} */}
      <MainContainer>
        <Navbar />
        <Grid>
          <AdCopyWrapper>
            <AdCopyDashboard />
          </AdCopyWrapper>
          <DashboardImage />
          <TodoList />
        </Grid>
      </MainContainer>
    </>
  );
};
export default Dashboard;
