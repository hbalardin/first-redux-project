import { configureStore } from '@reduxjs/toolkit';
import cart from './modules/cart/slice';

export const store = configureStore({
  reducer: {
    cart,
  },
});

export type IState = ReturnType<typeof store.getState>;
export type IDispatch = typeof store.dispatch;
