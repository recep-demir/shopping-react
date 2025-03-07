import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { clearBasket } from '../features/basketSlice'
import { useDispatch, useSelector } from 'react-redux';

const FilledBasketTotal = () => {
const dispatch = useDispatch();
const {basketItems} = useSelector((state)=>state.basketSlice)
  
  const handleClear = ()=>{
    dispatch(clearBasket())
  }
  const subTotal = basketItems.reduce((acc,item)=>acc + item.price*item.quantity,0)

  
  return (
    <Box display="flex" justifyContent="space-around" m={5} mx={15}>
      <Typography variant='h5'>
        Subtotal :{subTotal.toFixed(2)}💲

      </Typography>
      <Button variant="contained" color='error' onClick={handleClear}>Empty Basket</Button>

    </Box>
  )
}

export default FilledBasketTotal
