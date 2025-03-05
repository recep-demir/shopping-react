import { createSlice } from '@reduxjs/toolkit';

const initialState = {
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState:{
    items:[],
    total:0
  },
  reducers: {},
  
});


export default basketSlice.reducer;