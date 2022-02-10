import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { API_URL } from 'utils/urls';

export const user = createSlice({
  name: 'user',
  initialState: {
    userId: null,
    name: null,
    username: null,
    accessToken: null,
    error: null,
  },
  reducers: {
    setUserId: (store, action) => {
      store.userId = action.payload;
    },
    setName: (store, action) => {
      store.name = action.payload;
    },
    setUsername: (store, action) => {
      store.username = action.payload;
    },
    setAccessToken: (store, action) => {
      store.accessToken = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

// REDUX THUNK: To sign up and sign in
export const userAccess = (name, username, password, mode) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password }),
    };
    fetch(API_URL(mode), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          batch(() => {
            dispatch(user.actions.setUserId(data.response.userId));
            dispatch(user.actions.setUsername(data.response.username));
            dispatch(user.actions.setName(data.response.name));
            dispatch(user.actions.setAccessToken(data.response.accessToken));
            dispatch(user.actions.setError(null));
          });
        } else {
          batch(() => {
            dispatch(user.actions.setUserId(null));
            dispatch(user.actions.setUsername(null));
            dispatch(user.actions.setName(null));
            dispatch(user.actions.setAccessToken(null));
            dispatch(user.actions.setError(data.response)); // here we send the message we have recieved from the database to the redux store and the error key from the store gets updated.
          });
        }
      });
  };
};
