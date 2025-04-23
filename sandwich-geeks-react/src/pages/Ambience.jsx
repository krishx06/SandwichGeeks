import React from 'react';
import '../styles//ambience.css';
import { Link } from 'react-router-dom';


const Ambience = () => {
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

      <section className="ambience-section">
        <div className="ambience-div" id="ambience">
          <hr className="rule1" />
          <h1 className="ambience-heading">Ambience</h1>
          <hr className="rule2" />
        </div>

        <div className="ambiencediv1">
          {[
            { src: '/assets/images/Ambienceee.jpg', text: 'Cozy Café with a View' },
            { src: '/assets/images/Ambienceee7.jpg', text: 'Minimalist Charm with a Homely Touch' },
            { src: '/assets/images/Ambienceee3.jpg', text: 'Fresh & Airy Outdoors' },
            { src: '/assets/images/Ambienceee4.jpg', text: 'Nature-Framed Serenity' },
            { src: '/assets/images/Ambienceee5.jpg', text: 'Soft Lights & Rustic Vibes' },
            { src: '/assets/images/Ambienceee9.jpg', text: 'Warm Wood, Natural Light' },
          ].map((item, index) => (
            <div className="ambience-overlay-container" key={index}>
              <img src={item.src} alt={`Ambience ${index + 1}`} className="ambienceimg1" />
              <div className="ambience-color-tint"></div>
              <div className="ambience-overlay-text">{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2><br/>
          <p>
            From crunchy bites to byte-sized updates—our newsletter serves up sizzling offers,<br />
            tasty surprises, and the freshest sandwich stories straight to your inbox!
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
              <h1 className="footer-logo">Sandwich<br />Geeks</h1>
              <div className="footer-logo-image-div">
                <img className="footer-logo-image" src="/assets/images/image 3.png" alt="Logo" />
              </div>
            </div>
          </div>

          <div className="link-group1">
            <h3>Our Brand:</h3>
            <ul className="our-brand">
              <li><a href="/#about">About Us</a></li>
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
          <p className="p1">An Exotic Sandwich Brand</p>
          <p className="p2">© 2025 All rights reserved. Made with ♡ by Krish.</p>
        </div>
      </footer>
    </div>
  );
};

export default Ambience;
