/* eslint no-param-reassign: "error" */
import { createSlice } from '@reduxjs/toolkit';

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
  SUCCESS: 'success',
});

export const ContainerSlice = createSlice({
  name: 'container',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    getdata: (state, action) => { state.data = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
  },
});

export const { getdata, setStatus } = ContainerSlice.actions;

export default ContainerSlice.reducer;

// Thunks

export function fetchdata() {
  return async function fetchdataThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch('https://proxy.cors.sh/https://www.fruityvice.com/api/fruit/all');
      const data = await res.json();

      dispatch(getdata(data));
      dispatch(setStatus(STATUSES.SUCCESS));
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
