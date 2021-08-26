import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addProductToCartRequest } from '../../store/modules/cart/actions';
import { IProduct } from '../../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const hasFailedOnStockCheck = useSelector<IState, boolean>((state) =>
    state.cart.failedOnStockCheck.includes(product.id)
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {'  -  '}
      <span>{product.price}</span> {'  -  '}
      <button type="button" onClick={handleAddProductToCart}>
        Buy
      </button>
      {hasFailedOnStockCheck && (
        <span style={{ color: 'red' }}>{'     '}Out of stock</span>
      )}
    </article>
  );
};
