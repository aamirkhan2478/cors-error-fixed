/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    data: [],
  },
  reducers: {
    getsearch: (state, action) => { state.data = action.payload; },
  },
});

export const { getsearch } = searchSlice.actions;

export default searchSlice.reducer;
