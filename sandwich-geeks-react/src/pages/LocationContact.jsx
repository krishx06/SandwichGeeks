import React from "react";
import "../styles/locationcontact.css"; 
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const LocationContact = () => {
    useEffect(() => {

        VanillaTilt.init(document.querySelector('.location-contact-container'), {
          max: 6,
          speed: 1000,
          glare: true,
          'max-glare': 0.2,
        });

        return () => {
          const tiltElement = document.querySelector('.location-contact-container');
          if (tiltElement) {
            tiltElement.vanillaTilt.destroy();
          }
        };
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
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="location-contact-section">
        <div className="location-contact-container">
          <div className="location-card">
            <h2>Location:</h2>
            <br /><br /><br /><br />
            <p style={{ marginLeft: "-2.8vw" }}>
              <i className="fas fa-map-marker-alt"></i> Shop 42, Food Galaxy, <br />
            </p> 
            <br /><br /><br /><br />
            <p style={{ marginLeft: "-1.5vw" }}>Sector Sizzle, Layer 3, <br /></p>
            <br /><br /><br /><br />
            <p style={{ marginLeft: "-3vw" }}>Breadverse Central, <br /></p>
            <br /><br /><br /><br />
            <p style={{ marginLeft: "-7.8vw" }}>Pune, India</p>
          </div>

          <hr className="location-contact-divider" />

          <div className="contact-card">
            <h2>Contact Us:</h2>
            <br /><br /><br /><br />
            <p>
              <i className="fas fa-phone-alt fa-flip-horizontal"></i> +91 000000XXXX<br />
              <i className="fas fa-phone-alt fa-flip-horizontal"></i> +91 XXXXXX0000
            </p><br /><br /><br /><br />
            <p>
              <i className="fas fa-envelope"></i>{" "}
              <a href="mailto:sandwichgeeksin@gmail.com">sandwichgeeksin@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2><br />
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
                <h1 className="footer-logo">
                  Sandwich<br />Geeks
                </h1>
              </div>
              <div className="footer-logo-image-div">
                <img className="footer-logo-image" src="/assets/images/image 3.png" alt="Logo" />
              </div>
            </div>
          </div>

          <div className="link-group1">
            <h3>Our Brand:</h3>
            <ul className="our-brand">
              <li><a href="index.html#aboutus">About Us</a></li>
              <li><a href="index.html#topproducts">Top Products</a></li>
              <li><a href="index.html#customer-feedbacks">Reviews</a></li>
              <li><a href="index.html#offers">Offers</a></li>
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

export default LocationContact;
