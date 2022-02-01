import { createSlice } from '@reduxjs/toolkit';
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

// REDUX THUNK: to get the user's tasks
// This function fetches the tasks API and returns the tasks, which are saved in the database,
// and then, we save the tasks in this reducer via actions
export const getTasks = (accessToken, userId) => {
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

// REDUX THUNK: to post a task
// This function fetches the API to post a task and it returns the task posted,
// and then, it calls the getTask thunk, which gets this store updated with the new tasks.
export const postTasks = (accessToken, userId, task) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ task, userId }),
    };
    fetch(API_URL('tasks/addtask'), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getTasks(accessToken, userId));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      });
  };
};

// REDUX THUNK: to edit a task

export const editTasks = (accessToken, taskId, task) => {
  return (dispatch) => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ task, taskId }),
    };
    fetch(API_URL(`tasks/${taskId}/edit`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getTasks(accessToken, taskId));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      });
  };
};

// REDUX THUNK: to delete a task

export const deleteTasks = (accessToken, taskId) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      body: JSON.stringify({ taskId }),
    };
    fetch(API_URL(`tasks/${taskId}/delete`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getTasks(accessToken, taskId));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      });
  };
};
