import { Reducer } from 'redux';
import { ActionTypes, ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.addProductToCart: {
      const { product } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            product,
            quantity: 1,
          },
        ],
      };
    }
    default: {
      return state;
    }
  }
};
