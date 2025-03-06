import { createSlice } from '@reduxjs/toolkit';


const basketSlice = createSlice({
  name: 'basketSlice',
  initialState:{
    basketItems:[],
    count:0
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
        item.quantity > 1 ? item.quantity-- : state.basketItems = state.basketItems.filter(i => i.id !== payload);
        state.totalQuantity--;
      },
  
      clearBasket: (state) => {
        state.basketItems = [];
        state.totalQuantity = 0;
      },
    },
  });
  
  export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;