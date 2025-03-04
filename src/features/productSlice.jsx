import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchData = createAsyncThunk(
    "productSlice/fetchData", 
    async() =>{
        const res = await axios("https://fakestoreapi.com/products")
        console.log(res)
        return res.data;
    }
)

export const fetchCategory = createAsyncThunk(
    "productSlice/fetchCategory", 
    async() =>{
        const res = await axios("https://fakestoreapi.com/products/categories")
        console.log(res)
        return res.data;
    }
)



const productSlice = createSlice({
  name: 'productSlice',
  initialState:{
    products:[],
    categories:[],
    loading:false,
    
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
        .addCase(fetchData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchData.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        })
        .addCase(fetchData.rejected, (state) => {
            state.loading = false;
        })
        .addCase(fetchCategory.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchCategory.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.categories = payload;
        })
        .addCase(fetchCategory.rejected, (state) => {
            state.loading = false;
        });
}
});

export default productSlice.reducer;