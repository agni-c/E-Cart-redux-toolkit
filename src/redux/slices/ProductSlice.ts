import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';
import { getItems } from '../../services/mock';

interface Item {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image: string;
  qty: number;
}
interface stateProps {
  products: Item[];
  currentProduct: Item | null;
}
const initialState: stateProps = {
  products: [],
  currentProduct: null,
};

export const loadProducts = createAsyncThunk(
  'products/loadProducts',
  async () => {
    const data = await getItems();
    console.log(data, 'loadProducts');
    return data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(loadProducts.fulfilled, (state, action: PayloadAction<[]>) => {
      state.products = [...action.payload];
    });
  },
});

export default productSlice.reducer;
