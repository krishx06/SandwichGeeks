import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/cart.css';

const Cart = ({ cartItems }) => {
  const cartContainerRef = useRef(null);

  useEffect(() => {
    const initTilt = async () => {
      const VanillaTilt = (await import('vanilla-tilt')).default;
      VanillaTilt.init(cartContainerRef.current, {
        max: 0.8,
        speed: 1000,
        glare: true,
        "max-glare": 0.1,
        scale: 1
      });
    };

    initTilt();

    return () => {
      if (cartContainerRef.current?.vanillaTilt) {
        cartContainerRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  // Calculate total price
  const calculateTotal = () => {
    const prices = {
      "Bombay Grill": 449,
      "Delhi Tikki": 399,
      "Cheese Melt": 479,
      "Grilled Crust": 429,
      "Chilli Cheese": 459,
      "Paneer Achari": 479,
      "Crunchy Mexican": 439,
      "Crunchy American": 449,
      "Aloo Patty Sandwich": 329,
      "Veg Shammi Sandwich": 349,
      "Paneer Tikka Sandwich": 379,
      "Veggie Delite Sandwich": 299,
      "Tandoori Paneer Craver": 429,
      "Classic Veggie Craver": 399,
      "Soya Roll Craver": 379,
      "Aloo Patty Craver": 349,
      "Paneer Tikka Signature Wrap": 429,
      "Corn & Peas Signature Wrap": 399,
      "Veggie Delite Signature Wrap": 379,
      "Veg Shammi Signature Wrap": 409,
      "Paneer Tikka Salad": 399,
      "Veggie Delite Salad": 399,
      "Aloo Patty Salad": 399,
      "Veg Shammi Salad": 399,
      "Cafe Mocha": 249,
      "Latte": 199,
      "Hot Chocolate": 249,
      "French Vanilla": 199,
      "Java Chip Frappe": 299,
      "Iced Latte": 249,
      "Caramel Iced Frappe": 299,
      "Iced Americano": 249
    };

    return parseInt(Object.entries(cartItems).reduce((total, [itemName, quantity]) => {
      return total + (parseInt(prices[itemName]) * parseInt(quantity));
    }, 0));
  };

  const getItemPrice = (itemName) => {
    const prices = {
      "Bombay Grill": 449,
      "Delhi Tikki": 399,
      "Cheese Melt": 479,
      "Grilled Crust": 429,
      "Chilli Cheese": 459,
      "Paneer Achari": 479,
      "Crunchy Mexican": 439,
      "Crunchy American": 449,
      "Aloo Patty Sandwich": 329,
      "Veg Shammi Sandwich": 349,
      "Paneer Tikka Sandwich": 379,
      "Veggie Delite Sandwich": 299,
      "Tandoori Paneer Craver": 429,
      "Classic Veggie Craver": 399,
      "Soya Roll Craver": 379,
      "Aloo Patty Craver": 349,
      "Paneer Tikka Signature Wrap": 429,
      "Corn & Peas Signature Wrap": 399,
      "Veggie Delite Signature Wrap": 379,
      "Veg Shammi Signature Wrap": 409,
      "Paneer Tikka Salad": 399,
      "Veggie Delite Salad": 399,
      "Aloo Patty Salad": 399,
      "Veg Shammi Salad": 399,
      "Cafe Mocha": 249,
      "Latte": 199,
      "Hot Chocolate": 249,
      "French Vanilla": 199,
      "Java Chip Frappe": 299,
      "Iced Latte": 249,
      "Caramel Iced Frappe": 299,
      "Iced Americano": 249
    };
    return parseInt(prices[itemName]);
  };

  return (
    <div
      style={{
        backgroundImage: `url("/assets/images/BackgroundImg.png")`,
        fontFamily: "Niramit",
        overflowX: "hidden",
        margin: "0"
      }}
    >
      <header>
        <div className="container">
          <div className="glass-card">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/ambience">Ambience</Link>
                </li>
                <li>
                  <Link to="/signup">Signup</Link>
                </li>
                <li>
                  <Link to="/cart">Cart
                    <sup style={{fontSize: "14px"}}> ({Object.values(cartItems).reduce((a, b) => a + b, 0)}) </sup>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="cart-section">
        <div className="cart-container" ref={cartContainerRef}>
          <h1>Your Cart</h1>
          
          {Object.keys(cartItems).length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <Link to="/menu" className="continue-shopping">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {Object.entries(cartItems).map(([itemName, quantity]) => (
                  <div key={itemName} className="cart-item">
                    <div className="item-details">
                      <h3>{itemName}</h3>
                      <p>Quantity: {quantity}</p>
                    </div>
                    <div className="item-price">
                      <p>₹{parseInt(getItemPrice(itemName) * quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="total">
                  <h3>Total:</h3>
                  <p>₹{parseInt(calculateTotal())}</p>
                </div>
                <Link to="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <p>
            From crunchy bites to byte-sized updates—our newsletter serves up sizzling offers,
            <br /> tasty surprises, and the freshest sandwich stories straight to your inbox!
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        <hr />
        <div className="footer-columns">
          <div className="brand">
            <div className="logo-container">
              <div>
                <h1 className="footer-logo">Sandwich<br />Geeks</h1>
              </div>
              <div className="footer-logo-image-div">
                <img className="footer-logo-image" src="/assets/images/image 3.png" alt="LogoImage" />
              </div>
            </div>
          </div>

          <div className="link-group1">
            <h3>Our Brand:</h3>
            <ul className="our-brand">
              <li><a href="/#aboutus">About Us</a></li>
              <li><a href="/#topproducts">Top Products</a></li>
              <li><a href="/#customer-feedbacks">Reviews</a></li>
              <li><a href="/#offers">Offers</a></li>
              <li><Link to="/locationcontact">Location</Link></li>
            </ul>
          </div>

          <div className="link-group2">
            <h3>More:</h3>
            <ul className="more">
              <li><Link to="/ambience">Ambience</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><a>Newsletter</a></li>
              <li><Link to="/signin">Account</Link></li>
              <li><Link to="/locationcontact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="link-group3">
            <h3>Our Socials:</h3>
            <ul className="social-icons-grid">
              <li><a href="#" className="social-btn ig"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="social-btn yt"><i className="fab fa-youtube"></i></a></li>
              <li><a href="#" className="social-btn tw"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="social-btn lin"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#" className="social-btn fb"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#" className="social-btn dc"><i className="fab fa-discord"></i></a></li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-bottom-bar">
          <p className="p1">An Exotic Sandwich Brand <br /></p>
          <p className="p2">Copyright © 2025 All rights reserved. Made with ♡ by Krish.</p>
        </div>
      </footer>
    </div>
  );
};

export default Cart; 