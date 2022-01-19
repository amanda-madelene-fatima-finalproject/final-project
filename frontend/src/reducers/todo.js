import { createSlice } from '@reduxjs/toolkit';

const todo = createSlice({
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

export default todo;
