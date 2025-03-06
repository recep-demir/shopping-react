import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const FilledBasketTotal = () => {
  return (
    <Box display="flex" justifyContent="space-between" m={5} mx={15}>
      <Typography variant='h5'>
        Subtotal : $

      </Typography>
      <Button variant="contained" color='error'>Empty Basket</Button>

    </Box>
  )
}

export default FilledBasketTotal
