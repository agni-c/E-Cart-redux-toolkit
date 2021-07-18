import { createSlice } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';

interface stateProps {
  cart: {
    id: number;
    title: string;
    price: number;
    description: string;
    category?: string;
    image: string;
    qty: number;
  }[];
}
const initialState: stateProps = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    loadCart: (state, action) => {
      state.cart = action.payload;
    },

    addToCart: (state, action) => {
      const isItemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      state.cart = isItemExists
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? (item.qty = item.qty + action.payload.qty)
              : item
          )
        : [...state.cart, action.payload];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    adjustQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id ? (item.qty = action.payload.qty) : item
      );
    },
  },
});

export const { addToCart, adjustQty, removeFromCart, loadCart } =
  cartSlice.actions;

export const cartState = () => useSelector((state: stateProps) => state.cart);

export default cartSlice.reducer;
