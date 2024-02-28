
'use client'
// import { configureStore } from '@reduxjs/toolkit';
// import dataSlice from './dataSlice';

// const store = configureStore({
//   reducer: {
//     data: dataSlice
//   },
//   devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import dataSlice from './dataSlice';

let devTools = undefined;
if (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

const store = configureStore({
  reducer: {
    data: dataSlice
  },
  devTools: devTools
});

export default store;
