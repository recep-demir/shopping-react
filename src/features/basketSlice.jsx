import { createSlice } from '@reduxjs/toolkit';


const basketSlice = createSlice({
  name: 'basketSlice',
  initialState:{
    basketItems:[],
    count:0
  },
  reducers: {
    addToBasket :(state, {payload})=>{
        const existItem = 
        state.basket = payload;
        state.count = payload.length;

    },
    removeFromBasket :(state,(payload))=>{

    }



  },
  
});


export default basketSlice.reducer;