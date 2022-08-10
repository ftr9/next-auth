import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, _) => {
      return ++state;
    },
    decrement: (state, _) => {
      return --state;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement } = counterSlice.actions;
