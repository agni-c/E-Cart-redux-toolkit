import { useEffect, useState } from 'react';

import { loadProducts, RootState } from '../redux';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

export default function useProducts(numOfProducts = 20) {
  //   const [products, setProducts] = useState([]);
  const dispatch = useAppDispatch();
  const prods = useAppSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return prods;
}
