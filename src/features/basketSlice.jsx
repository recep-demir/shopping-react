import { createSlice } from '@reduxjs/toolkit';


const basketSlice = createSlice({
  name: 'basketSlice',
  initialState:{
    basketItems:[],
    total:0
  },
  reducers: {
    addToBasket :(state, {payload})=>{
        
    }



  },
  
});


export default basketSlice.reducer;