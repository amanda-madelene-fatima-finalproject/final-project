import { createSlice } from '@reduxjs/toolkit';
// Imported user reducer
// import { setUserId, setAccessToken } from './user';
import { API_URL } from 'utils/urls';

export const todo = createSlice({
  name: 'todo',
  initialState: {
    items: [],
    error: null,
  },
  reducers: {
    setItems: (store, action) => {
      store.items = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
  },
});

// Thunk fetchTasks: getting all the users tasks

export const fetchTasks = (accessToken, userId) => {
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: accessToken,
      },
    };
    fetch(API_URL(`tasks/${userId}`), options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          dispatch(todo.actions.setItems(data.response));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      });
  };
};

// export default todo;
