import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { clearBasket } from '../features/basketSlice'
import { useDispatch } from 'react-redux';

const FilledBasketTotal = () => {
const dispatch = useDispatch();
  
  const handleClear = ()=>{
    dispatch(clearBasket())
  }
  return (
    <Box display="flex" justifyContent="space-between" m={5} mx={15}>
      <Typography variant='h5'>
        Subtotal : $

      </Typography>
      <Button variant="contained" color='error' onClick={handleClear}>Empty Basket</Button>

    </Box>
  )
}

export default FilledBasketTotal
