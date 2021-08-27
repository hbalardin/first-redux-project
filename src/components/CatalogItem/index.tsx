import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { addProductToCartPending } from '../../store/modules/cart/thunks';
import { IProduct } from '../../store/modules/cart/types';

interface CatalogItemProps {
  product: IProduct;
}

export const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useAppDispatch();

  const hasFailedOnStockCheck = useAppSelector((state) =>
    state.cart.failedOnStockCheck.includes(product.id)
  );

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartPending(product));
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
