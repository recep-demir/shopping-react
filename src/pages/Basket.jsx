import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import BasketCard from '../components/BasketCard';
import FilledBasketTotal from '../components/FilledBasketTotal';
import EmptyBasketTotal from '../components/EmptyBasketTotal';

const Basket = () => {
  const { basketItems } = useSelector((state) => state.basketSlice);

  return (
    <Box>
      <Typography textAlign="center" p={2} m={2} variant="h3">
        My Basket
      </Typography>
      {basketItems.length > 0 ? (
        <Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 3 }}>
            {basketItems.map((item) => (
              <Box key={item.id} sx={{ position: 'relative' }}>
                <BasketCard item={item} />
              </Box>
            ))}
          </Box>
          <FilledBasketTotal />
        </Box>
      ) : (
        <EmptyBasketTotal />
      )}
    </Box>
  );
};

export default Basket;