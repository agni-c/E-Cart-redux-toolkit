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
  inWishlist: boolean;
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
    const cachedProducts = localStorage.getItem('listing');
    let data: [Item] = cachedProducts
      ? JSON.parse(cachedProducts)
      : await getItems();
    data.forEach((item) => {
      if (item.inWishlist === undefined || null) item.inWishlist = false;
    });
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
    tagOnWishlist: (state, action) => {
      state.products = state.products.map((product) =>
        product.id === action.payload.id
          ? { ...product, inWishlist: !product.inWishlist }
          : product
      );
      localStorage.setItem('listing', JSON.stringify(state.products));
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

export const { resetCurrentProduct, tagOnWishlist } = productSlice.actions;
export default productSlice.reducer;
