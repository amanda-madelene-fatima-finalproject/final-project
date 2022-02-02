import React from 'react';

//import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

//Import components
// import Login from "./components/welcome-page/Login";
import NotFound from './components/notfound-page/NotFound';
import Dashboard from './components/dashboard-page/Dashboard';
import Welcome from './components/welcome-page/Welcome';

//Import reducers
import { user } from './reducers/user';
import { todo } from './reducers/todo';

//Reducers
const reducer = combineReducers({
  user: user.reducer,
  todo: todo.reducer,
});

const store = configureStore({ reducer });

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
