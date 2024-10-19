import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ product }) => {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (newQuantity > 0) {
      updateQuantity(product.id, newQuantity);
    }
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.title} />
      <div className="item-details">
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <input
          type="number"
          value={product.quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button onClick={() => removeFromCart(product.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
