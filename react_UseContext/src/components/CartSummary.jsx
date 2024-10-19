import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartSummary = () => {
  const { totalQuantity, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-summary">
      <h3>Total Items: {totalQuantity}</h3>
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
    </div>
  );
};

export default CartSummary;
