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

const BasketCard = ({item}) => {

  return (
    <Card sx={{ width: 350 }}>
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
            
          >
            -
          </Button>
          <Typography>{item?.quantity}</Typography>
          <Button
            type="button"
            size="small"
          >
            +
          </Button>
        </Box>
        <Button
          variant="contained"
          type="button"
          color="error"
        >
          Remove
        </Button>
      </CardActions>

    </Card>
  )
}

export default BasketCard
