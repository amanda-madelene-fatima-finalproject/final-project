import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

//Import components
import Login from './components/Login';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

//Import reducers
import user from './reducers/user';
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
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
