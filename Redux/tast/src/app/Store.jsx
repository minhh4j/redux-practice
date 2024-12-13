// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,  // Register the counter reducer
  },
});

export default store;
