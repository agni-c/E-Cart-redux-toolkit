import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import { getItems, getSingleItem } from '../../services/mock';

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

export const getProductDetails = createAsyncThunk(
  'products/getSingleProduct',
  async (id: number) => {
    const data = await getSingleItem(id);
    console.log(data, 'get single Item');
    return data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    resetCurrentProduct: (state) => {
      state.currentProduct = null;
    },
  },
  extraReducers: (cases) => {
    cases
      .addCase(
        loadProducts.fulfilled,
        (state, action: PayloadAction<Item[]>) => {
          state.products = [...action.payload];
        }
      )
      .addCase(
        getProductDetails.fulfilled,
        (state, action: PayloadAction<Item>) => {
          state.currentProduct = action.payload;
        }
      );
  },
});

export const { resetCurrentProduct } = productSlice.actions;
export default productSlice.reducer;
