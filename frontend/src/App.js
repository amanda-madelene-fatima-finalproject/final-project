import React from "react";

import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

//Import components
// import Login from "./components/welcome-page/Login";
import NotFound from "./components/notfound-page/NotFound";
import Dashboard from "./components/dashboard-page/Dashboard";
import Welcome from "./components/welcome-page/Welcome";

//Import reducers
import { user } from "./reducers/user";
import { todo } from "./reducers/todo";

//Reducers
const reducer = combineReducers({
  user: user.reducer,
  todo: todo.reducer,
});

const store = configureStore({ reducer });

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF737D", //pink
    },
    secondary: {
      main: "#050013", //grey
    },
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};
