import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    clear: () => initialState,
  },
});

export const { clear } = productSlice.actions;

export default productSlice.reducer;