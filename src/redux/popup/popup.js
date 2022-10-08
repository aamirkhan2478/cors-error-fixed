/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

export const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    data: [],
  },
  reducers: {
    getdetail: (state, action) => { state.data = action.payload; },
  },
});

export const { getdetail } = popupSlice.actions;

export default popupSlice.reducer;
