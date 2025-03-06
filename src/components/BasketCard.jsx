import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react'
import { addToBasket, removeFromBasket, removeItemCompletly } from '../features/basketSlice';
import { useDispatch } from 'react-redux';

const BasketCard = ({item}) => {
 const dispatch =useDispatch()


const handleUpdate = (id, change) => {
  if (change === "increase") {
    dispatch(addToBasket(item));
  } else if (change === "decrease") {
    if (item.quantity === 1) {
      dispatch(removeItemCompletly(id));
    } else {
      dispatch(removeFromBasket(id));
    }
  }
};

 const handleRemove =(id)=>{
  dispatch(removeItemCompletly(id))
 }

  return (
    <Card sx={{ width: 350 , gap:"3"}}>
      <CardMedia
      component="img"
      height={300}
      image={item.image}
      title={item.title}
      sx={{ objectFit: 'contain' }}
    />
    <CardContent sx={{ p: 1, mb: 1 }}>
      <Box display="flex" justifyContent="space-between" height={70}>
        <Typography variant="body1" gutterBottom>
          {item.title}
        </Typography>
        <Typography variant="h6" pl={1} color="initial">
          {item.price + '$'}
        </Typography>
      </Box>
    </CardContent>
    <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box display="flex" alignItems="center">
          <Button
            type="button"
            size="small"
            onClick={()=>handleUpdate(item.id,'decrease')}
                      
          >
            -
          </Button>
          <Typography>{item?.quantity}</Typography>
          <Button
            type="button"
            size="small"
            onClick={()=>handleUpdate(item.id,"increase")}
          >
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          type="button"
          color="error"
          onClick={()=>handleRemove(item.id)}
        >
          Remove
        </Button>
      </CardActions>

    </Card>
  )
}

export default BasketCard
