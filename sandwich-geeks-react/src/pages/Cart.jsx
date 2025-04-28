import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/cart.css';
import NewsletterSuccess from '../components/NewsletterSuccess';

const Cart = ({ cartItems }) => {
  const cartContainerRef = useRef(null);
  const cursorImgRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const imgPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const [showNewsletterSuccess, setShowNewsletterSuccess] = React.useState(false);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) animate();
    };
    const animate = () => {
      imgPos.current.x += (mousePos.current.x - imgPos.current.x) * 0.18;
      imgPos.current.y += (mousePos.current.y - imgPos.current.y) * 0.18;
      if (cursorImgRef.current) {
        cursorImgRef.current.style.transform = `translate3d(${imgPos.current.x - 1}px, ${imgPos.current.y - 3}px, 0)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);


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
    <div style={{ cursor: "default" }}>
      <img
        ref={cursorImgRef}
        src="/assets/images/icon2.png"
        alt="Cursor Follower"
        style={{
          position: "fixed",
          left: -17,
          top: -13,
          width: 40,
          height: 40,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "opacity 0.2s",
          opacity: 1,
          mixBlendMode: "multiply",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
        }}
      />
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
            <h2>Subscribe to our Newsletter</h2><br />
            <p>
              From crunchy bites to byte-sized updates—our newsletter serves up sizzling offers,
              <br /> tasty surprises, and the freshest sandwich stories straight to your inbox!
            </p>
            <form className="subscribe-form" onSubmit={e => { e.preventDefault(); setShowNewsletterSuccess(true); }}>
              <input type="email" placeholder="Enter Your Email" required />
              <button type="submit">Subscribe</button>
            </form>
            {showNewsletterSuccess && <NewsletterSuccess onClose={() => setShowNewsletterSuccess(false)} />}
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
                <li><HashLink smooth to="/#aboutus">About Us</HashLink></li>
                <li><HashLink smooth to="/#topproducts">Top Products</HashLink></li>
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
    </div>
  );
};

export default Cart; 