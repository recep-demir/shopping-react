import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StoreIcon from '@mui/icons-material/Store';
import { Link } from 'react-router';
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

export default function ButtonAppBar() {
  const {totalQuantity} = useSelector((state)=>state.basketSlice)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white", color:"black"}}>
        <Toolbar>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <StoreIcon fontSize="large" />
          </IconButton>
          </Link>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Shopping
          </Typography>

          <Link to="basket" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>


          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          >
            <Badge badgeContent={totalQuantity} color="primary">
              <ShoppingCartIcon fontSize="large" />
              </Badge>
            
          </IconButton>
          </Link>

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
