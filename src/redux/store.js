
'use client'
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

const store = configureStore({
  reducer: {
    data: dataSlice
  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
});

export default store;
