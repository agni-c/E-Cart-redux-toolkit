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
  isOpen: boolean;
}
const initialState: stateProps = {
  cart: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    loadCart: (state) => {
      const cartData = localStorage.getItem('cart');
      cartData ? (state.cart = JSON.parse(cartData)) : [];
    },

    addToCart: (state, action) => {
      const isItemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      state.isOpen = true;

      state.cart = isItemExists
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          )
        : [...state.cart, action.payload];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    adjustQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + action.payload.qty }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { addToCart, adjustQty, removeFromCart, loadCart, toggleCart } =
  cartSlice.actions;

export const cartState = () => useSelector((state: stateProps) => state.cart);

export default cartSlice.reducer;
