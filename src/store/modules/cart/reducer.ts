import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addProductToCart: {
        const { product } = action.payload;

        draft.items.push({
          product,
          quantity: 1,
        });
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
