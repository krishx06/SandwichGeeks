import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section className="newsletter-footer">
      <div className="newsletter-content" id="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <p>
          From crunchy bites to byte-sized updates—our newsletter serves up
          sizzling offers,
          <br />
          tasty surprises, and the freshest sandwich stories straight to your
          inbox!
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
              <h1 className="footer-logo">
                Sandwich
                <br />
                Geeks
              </h1>
            </div>
            <div className="footer-logo-image-div">
              <img
                className="footer-logo-image"
                src="/src/images/image 3.png"
                alt="Logo Image"
              />
            </div>
          </div>
        </div>

        <div className="link-group1">
          <h3>Our Brand:</h3>
          <ul className="our-brand">
            <li><a href="#aboutus">About Us</a></li>
            <li><a href="#topproducts">Top Products</a></li>
            <li><a href="#customer-feedbacks">Reviews</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><Link to="/locationcontact">Location</Link></li>
          </ul>
        </div>

        <div className="link-group2">
          <h3>More:</h3>
          <ul className="more">
            <li><Link to="/ambience">Ambience</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><a href="#newsletter">Newsletter</a></li>
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

      <footer>
        <div className="footer-bottom-bar">
          <p className="p1">An Exotic Sandwich Brand</p>
          <p className="p2">
            Copyright © 2025 All rights reserved. Made with ♡ by Krish.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
