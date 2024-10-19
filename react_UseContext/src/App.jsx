import React from 'react';
import CartProvider from './context/CartContext';
import CartContext from './context/CartContext';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Shopping Cart</h1>
        <ProductList />
        <CartSummary />
        {/* <Cart /> */}
      </div>
    </CartProvider>
  );
};

// const Cart = () => {
//  const { cart } = React.useContext(CartContext);
// console.log(cart);
//   return (
//     <div className="cart">
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         cart.map(product => <CartItem key={product.id} product={product} />)
//       )}
//     </div>
//   );
// };

export default App;
