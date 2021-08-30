import { createAsyncThunk } from '@reduxjs/toolkit';
import { IState } from '../..';
import api from '../../../services/api';
import { addProductToCartFulfilled, addProductToCartRejected } from './slice';
import { IProduct } from './types';

interface IStockResponse {
  id: number;
  quantity: number;
}

export const addProductToCartPending = createAsyncThunk<
  void,
  IProduct,
  { state: IState }
>('cart/checkProductStock', async (product: IProduct, thunkApi) => {
  const currentQuantity =
    thunkApi
      .getState()
      .cart.items.find((item) => item.product.id === product.id)?.quantity ?? 0;

  const availableStockResponse = await api.get<IStockResponse>(
    `stock/${product.id}`
  );

  const hasAvailableStock =
    availableStockResponse.data.quantity > currentQuantity;

  if (hasAvailableStock) {
    thunkApi.dispatch(addProductToCartFulfilled(product));
  } else {
    thunkApi.dispatch(addProductToCartRejected(product.id));
  }
});
