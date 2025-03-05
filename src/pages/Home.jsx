import { useDispatch, useSelector } from 'react-redux';
import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';
import { Container, Grid2, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { fetchCategory, fetchData } from '../features/productSlice';

const Home = () => {
  const dispatch = useDispatch()
  const {products, loading}= useSelector((state)=>state.productSlice)


  useEffect(() => {
    dispatch(fetchData())
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div>
      
      <Container>
      <CategoryBar />
      {loading ? (<Grid2 container justifyContent="center" alignItems={'center'} mt={15}>
        </Grid2>): (
          <Grid2 container justifyContent="center" spacing={4} mt={10}>
            {products.map(()=>{
              
            })}
          
          <Grid2 item key="">
            <ProductCard product="" text="Add" />
          </Grid2>
        </Grid2>)}

        
      </Container>
      ;
    </div>
  );
};

export default Home;