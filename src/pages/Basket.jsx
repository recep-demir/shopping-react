import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import BasketCard from '../components/BasketCard'

const Basket = () => {
  const {basketItems} =useSelector((state)=>state.basketSlice)




  return (
    <Box>
      <Typography textAlign="center" p={2} m={2} variant='h3'>
        My Basket
      </Typography>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
        {basketItems.length>0 ? (
          basketItems.map((item)=>(
            <Box key={item.id} sx ={{position:"relative"}}>
              <BasketCard item={item}/>
            </Box>
          ))

        ):(
          <Typography
          sx={{textAlign:"center"}}>
            You have no items in your shopping cart, start adding some!
          </Typography>

        )}




      </Box>
      

    </Box>
  )
}

export default Basket