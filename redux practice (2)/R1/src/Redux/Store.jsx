// src/Redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import colorReducer from './color/ColorSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    color: colorReducer,
  },
});

export default store;
