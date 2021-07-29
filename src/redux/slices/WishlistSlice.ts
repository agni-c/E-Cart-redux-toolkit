import { createSlice } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';

interface stateProps {
  wishlist: {
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
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: 'wishlistSlice',
  initialState,
  reducers: {
    loadWishlist: (state) => {
      const wishlistData = localStorage.getItem('wishlist');
      wishlistData ? (state.wishlist = JSON.parse(wishlistData)) : [];
    },

    addToWishlist: (state, action) => {
      const isItemExists = state.wishlist.some(
        (item) => item.id === action.payload.id
      );

      state.wishlist = isItemExists
        ? state.wishlist.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          )
        : [...state.wishlist, action.payload];
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    adjustQty: (state, action) => {
      state.wishlist = state.wishlist.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: item.qty + action.payload.qty }
          : item
      );
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },
  },
});

export const { addToWishlist, removeFromWishlist, loadWishlist } =
  wishlistSlice.actions;

export const wishlistState = () =>
  useSelector((state: stateProps) => state.wishlist);

export default wishlistSlice.reducer;
