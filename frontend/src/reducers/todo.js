import { createSlice } from "@reduxjs/toolkit";
import { API_URL } from "utils/urls";
import { ui } from "./ui.js";

export const todo = createSlice({
  name: "todo",
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

    deleteTask: (store, action) => {
      // This filter is executed when the deleteTasks function is called
      // and deletes the tasks that are stored in the items array above (so the items kept in the redux store)
      const deletedTasks = store.items.filter(
        (item) => item._id !== action.payload
      );
      store.items = deletedTasks;
    },

    toggleTask: (store, action) => {
      const task = store.items.find((item) => item._id === action.payload);
      task.done = !task.done;
    },

    completeAllTasks: (store) => {
      const itemsAllCompleted = store.items.map((item) => {
        return {
          ...item,
          done: true,
        };
      });
      store.items = itemsAllCompleted;
    },

    removeAllTasks: (store) => {
      return {
        ...store,
        items: [],
      };
    },
  },
});

// REDUX THUNK: to get the user's tasks
// This function fetches the tasks API and returns the tasks, which are saved in the database,
// and then, we save the tasks in this reducer via actions
export const getTasks = (accessToken, userId) => {
  return (dispatch) => {
    const options = {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    };
    dispatch(ui.actions.setLoading(true));
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
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

// REDUX THUNK: to post a task
// This function fetches the API to post a task and it returns the task posted,
// and then, it calls the getTask thunk, which gets this store updated with the new tasks.
export const postTasks = (accessToken, userId, task) => {
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ task, userId }),
    };
    dispatch(ui.actions.setLoading(true));
    fetch(API_URL("tasks/addtask"), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getTasks(accessToken, userId));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

// REDUX THUNK: to edit a task

export const editTasks = (accessToken, taskId, task, userId) => {
  return (dispatch) => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ task }),
    };
    dispatch(ui.actions.setLoading(true));
    fetch(API_URL(`tasks/${taskId}/edit`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(getTasks(accessToken, userId));

          // dispatch(todo.actions.setItems(data.response));
          // dispatch(todo.actions.editTask(taskId));

          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

// REDUX THUNK: to delete a task

export const deleteTasks = (accessToken, taskId) => {
  return (dispatch) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      // body: JSON.stringify({ taskId }),
    };
    dispatch(ui.actions.setLoading(true));
    fetch(API_URL(`tasks/${taskId}/delete`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // dispatch(getTasks(accessToken, taskId));
          dispatch(todo.actions.deleteTask(taskId));
          dispatch(todo.actions.setError(null));
        } else {
          dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};

// REDUX THUNK: to complete a task

export const toggleTasks = (accessToken, taskId, done) => {
  console.log("test");
  console.log(accessToken, taskId, done);
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
      body: JSON.stringify({ done: !done }),
    };
    dispatch(ui.actions.setLoading(true));
    fetch(API_URL(`tasks/${taskId}/done`), options)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          dispatch(todo.actions.toggleTask(taskId));
          dispatch(todo.actions.setError(null));
        } else {
          // dispatch(todo.actions.setItems([]));
          dispatch(todo.actions.setError(data.response));
        }
      })
      .finally(() => dispatch(ui.actions.setLoading(false)));
  };
};
