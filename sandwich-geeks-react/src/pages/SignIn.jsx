import React, { useEffect, useState } from "react";
import "../styles/signin.css";
import { Link } from "react-router-dom";

const SignIn = () => {
    const [cartItems, setCartItems] = useState({});
    
    useEffect(() => {
        import('vanilla-tilt').then((VanillaTilt) => {
          VanillaTilt.default.init(document.querySelector(".signin-card"), {
            max: 6,
            speed: 1000,
            glare: true,
            "max-glare": 0.2,
          });
        });
      }, []);

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
                <a href="#about">About Us</a>
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

      <section className="signin-section">
        <div className="signin-div" id="signin">
          <hr className="rule1" />
          <h1 className="signin-heading">Sign In</h1>
          <hr className="rule2" />
        </div>
      </section>

      <div className="signin-card">
        <form className="signin-form">
          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />

          <button type="submit">Sign In</button>
        </form>
<br /><br /><br /><br />
        <div className="signin-prompt">
          <p style={{fontSize: "large"}}>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>

      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2><br/>
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
              <li>
              <Link to="/ambience">Ambience</Link>
              </li>
              <li>
              <Link to="/menu">Menu</Link>
              </li>
              <li>
                <a>Newsletter</a>
              </li>
              <li>
              <Link to="/signin">Account</Link>
              </li>
              <li>
              <Link to="/locationcontact">Contact Us</Link>
              </li>
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

export default SignIn;
