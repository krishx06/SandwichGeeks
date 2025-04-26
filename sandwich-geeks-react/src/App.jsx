import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import Ambience from './pages/Ambience.jsx';
import Signup from './pages/SignUp.jsx';
import SignIn from './pages/SignIn.jsx';
import LocationContact from './pages/LocationContact.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (itemName) => {
    setCartItems((prev) => {
      const currentQty = prev[itemName] || 0;
      if (currentQty >= 10) return prev;
      return {
        ...prev,
        [itemName]: currentQty + 1,
      };
    });
  };

  const handleRemoveFromCart = (itemName) => {
    setCartItems((prev) => {
      const newCount = (prev[itemName] || 0) - 1;
      if (newCount <= 0) {
        const newCart = { ...prev };
        delete newCart[itemName];
        return newCart;
      }
      return {
        ...prev,
        [itemName]: newCount,
      };
    });
  };

  const clearCart = () => setCartItems({});

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />
        <Route path="/menu" element={<Menu cartItems={cartItems} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/ambience" element={<Ambience cartItems={cartItems} />} />
        <Route path="/signup" element={<Signup cartItems={cartItems} />} />
        <Route path="/signin" element={<SignIn cartItems={cartItems} />} />
        <Route path="/locationcontact" element={<LocationContact cartItems={cartItems} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
      </Routes>
    </Router>
  );
};

export default App;
