import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TodoList from "./TodoList";
import DashboardImage from "../dashboard-page/DashboardImage.js";
import AdCopy from "../../components/reusable-components/AdCopy.js";

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

const Dashboard = () => {
  //----------- SELECTORS ----------//
  const accessToken = useSelector((store) => store.user.accessToken);
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
    <MainContainer>
      <Grid>
        <AdCopy />
        <DashboardImage />
        <TodoList />
        <TodoList />
      </Grid>
    </MainContainer>
  );
};
export default Dashboard;
