import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartState, IProduct } from './types';

const initialState: ICartState = {
  items: [],
  failedOnStockCheck: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCartFulfilled(state, action: PayloadAction<IProduct>) {
      const product = action.payload;
      const productInCartIndex = state.items.findIndex(
        (item) => item.product.id === product.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].quantity++;
      } else {
        state.items.push({
          product,
          quantity: 1,
        });
      }
    },
    addProductToCartRejected(state, action: PayloadAction<number>) {
      const productId = action.payload;

      state.failedOnStockCheck.push(productId);
    },
  },
});

export const { addProductToCartFulfilled, addProductToCartRejected } =
  cartSlice.actions;
export default cartSlice.reducer;
