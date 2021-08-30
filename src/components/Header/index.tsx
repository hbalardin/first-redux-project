import React from 'react';
import { useAppSelector } from '../../hooks/redux';

export const Header = () => {
  const itemsQuantity = useAppSelector((state) => state.cart.items.length);
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
      }}
    >
      <h4>Redux project</h4>
      <strong>
        Products on cart:
        <span> {itemsQuantity}</span>
      </strong>
    </header>
  );
};
