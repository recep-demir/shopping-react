import { createSlice } from '@reduxjs/toolkit';


const basketSlice = createSlice({
  name: 'basketSlice',
  initialState:{
    basketItems:[],
    totalQuantity:0
  },
  reducers: {
    addToBasket: (state, { payload }) => {
        const item = state.basketItems.find(i => i.id === payload.id);
        item ? item.quantity++ : state.basketItems.push({ ...payload, quantity: 1 });
        state.totalQuantity++;
        
      },
  
      removeFromBasket: (state, { payload }) => {
        const item = state.basketItems.find(i => i.id === payload);
        if (!item) return;
      
        if (item.quantity > 1) {
          item.quantity--;
        } 
        state.totalQuantity--;
      },
      removeItemCompletly:(state,{payload}) =>{
        state.basketItems = state.basketItems.filter(i=>i.id !==payload)
        state.totalQuantity = state.basketItems.reduce((sum, item) => sum + item.quantity, 0);

      },
  
      clearBasket: (state) => {
        state.basketItems = [];
        state.totalQuantity = 0;
      },
    },
  });
  
  export const { addToBasket, removeFromBasket, clearBasket,removeItemCompletly } = basketSlice.actions;
  export default basketSlice.reducer;