import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchProductsStart } from '../redux/shop/actions';

const Home = () => {
  const dispatch = useDispatch();
  const { pageNumber } = useParams();
  useEffect(() => {
    dispatch(fetchProductsStart(pageNumber));
  }, [dispatch, pageNumber]);
  const shop = useSelector((state) => state.shop);
  const { isFetching, products, pages } = shop;
  return (
    <HomeContainer>
      {isFetching ? (
        <Center>
          <CircularProgress />
        </Center>
      ) : (
        <>
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
          <Center>
            <Pagination
              count={pages}
              shape='rounded'
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`/${item.page === 1 ? '' : `page/${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Center>
        </>
      )}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  align-items: center;
  justify-items: center;
  gap: 20px;
  margin-top: 80px;
`;

const Center = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

export default Home;
