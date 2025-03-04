import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const fetchData = createAsyncThunk(
    "productSlice/fetchData", async() =>{
        const res = await axios("https://fakestoreapi.com/products"
        )
        console.log(res)
        return res.data.articles
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

  extraReducers:(builder)=>{

    builder.addCase(fetchData.pending,(state)=>{

        state.loading=true
    })
    .addCase(fetchData.fulfilled,(state,{payload})=>{
        state.loading = false;
        state.products = payload;
        state.categories = payload


    })
  }
});

export const { clear } = productSlice.actions;

export default productSlice.reducer;