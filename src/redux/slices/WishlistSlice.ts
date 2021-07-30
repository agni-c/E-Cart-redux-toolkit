import { createSlice } from '@reduxjs/toolkit';

import { useSelector } from 'react-redux';

interface stateProps {
  wishlist: {
    id: number;
    title: string;
    price: number;
    image: string;
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
        ? state.wishlist.filter((item) => item.id !== action.payload.id)
        : [...state.wishlist, action.payload];

      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
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
