import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './slices/CartSlice';
import productSlice from './slices/ProductSlice';
import WishlistSlice from './slices/WishlistSlice';

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: CartSlice,
    wishlist: WishlistSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
