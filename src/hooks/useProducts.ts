import { useEffect } from 'react';

import { loadProducts } from '../redux';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

export default function useProducts() {
  const dispatch = useAppDispatch();
  const prods = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return prods;
}
