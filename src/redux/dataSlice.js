// slices/dataSlice.js
'use client'
import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    fetchDataStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDataSuccess: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    },
    fetchDataFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = dataSlice.actions;

export default dataSlice.reducer;


