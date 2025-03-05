import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useSelector } from 'react-redux';


const ProductCard = () => {
  const {products} =useSelector((state)=>state.productSlice)
  return (
    <Card sx={{ width: 350 }}>
    <CardMedia
      component="img"
      height={300}
      image={products.image}
      title={products.title}
      sx={{ objectFit: 'contain' }}
    />
    <CardContent sx={{ p: 1, mb: 1 }}>
      <Box display="flex" justifyContent="space-between" height={70}>
        <Typography variant="body1" gutterBottom>
          {products.title}
        </Typography>
        <Typography variant="h6" pl={1} color="initial">
          {products.price + '$'}
        </Typography>
      </Box>
    </CardContent>
    <CardActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        {products.category}
      </Typography>
      <IconButton
        aria-label="Add to Cart"
        color="primary"
        // onClick={handleAdd}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </CardActions>
  </Card>
);
};

export default ProductCard;

