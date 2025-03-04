import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const productSlice = createSlice({
  name: 'productSlice',
  initialState:{
    products:[],
    loading:false,
    error:false
  },
  reducers: {
    fetchStart: (state) =>{
        state.loading
    }
  },
});

export const { clear } = productSlice.actions;

export default productSlice.reducer;