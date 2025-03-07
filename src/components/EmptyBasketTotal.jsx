import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router'

const EmptyBasketTotal = () => {
  return (
    <Typography
          sx={{textAlign:"center", color:"red", fontSize:"2rem" }}>
            You have no items in your shopping cart, 
            <Link to ="/" style={{textDecoration: 'none',color: 'blue',}} > start adding some!</Link> 
          </Typography>
  )
}

export default EmptyBasketTotal