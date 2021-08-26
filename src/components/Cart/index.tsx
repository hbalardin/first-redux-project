import React from 'react';

export const Cart: React.FC = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};
