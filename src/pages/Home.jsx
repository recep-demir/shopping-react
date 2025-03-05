import { useDispatch, useSelector } from 'react-redux';
import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';
import { Container, Grid2, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { fetchCategory, fetchData } from '../features/productSlice';

const Home = () => {
  const dispatch = useDispatch()
  const {products, loading} =useSelector((state)=>state.productSlice)


  useEffect(() => {
    dispatch(fetchData())
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <Container>
    {!loading ? (
      <Grid2 container justifyContent="center" spacing={4} mt={10}>
        <CategoryBar />
        {products.map((product) => (
          <Grid2 item key={product.id}>
            <ProductCard text="Add" />
          </Grid2>
        ))}
      </Grid2>
    ) : (
      <Grid2 container justifyContent="center" alignItems={'center'} mt={15}>
        <CircularProgress />
      </Grid2>
    )}
  </Container>
);
};
export default Home;