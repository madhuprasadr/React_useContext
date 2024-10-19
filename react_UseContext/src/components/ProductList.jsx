import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import products from '../data/products.json';  // Import the JSON data

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list">
      {products.products.map(product => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
