import { all, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './types';

function checkProductStock() {}

export default all([
  takeLatest(ActionTypes.addProductToCart, checkProductStock),
]);
