import { Reducer } from 'redux';
import { ICartState } from './types';

const INITIAL_STATE: ICartState = {
  items: [],
};

export const cart: Reducer<ICartState> = (state, action) => {
  console.log('🚀 ~ file: reducer.ts ~ line 9 ~ state', state);
  console.log('🚀 ~ file: reducer.ts ~ line 9 ~ action', action);
  return INITIAL_STATE;
};
