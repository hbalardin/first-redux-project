import { ActionTypes, IProduct } from './types';

export function addProductToCart(product: IProduct) {
  return {
    type: ActionTypes.addProductToCart,
    payload: { product },
  };
}
