import React, { useEffect, useRef } from "react";
import '../styles//ambience.css';
import { Link } from 'react-router-dom';
import NewsletterSuccess from '../components/NewsletterSuccess';


const Ambience = ({ cartItems }) => {
  const cursorImgRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const imgPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const [showNewsletterSuccess, setShowNewsletterSuccess] = React.useState(false);

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

  return (
    <div style={{ cursor: "default" }}>
      <img
        ref={cursorImgRef}
        src="/assets/images/icon2.png"
        alt="Cursor Follower"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 38,
          height: 48,
          pointerEvents: "none",
          zIndex: 9999,
          transition: "opacity 0.2s",
          opacity: 1,
          mixBlendMode: "multiply"
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
                      <sup style={{ fontSize: "14px" }}> ({Object.values(cartItems).reduce((a, b) => a + b, 0)}) </sup>
                    </Link>
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
    </div>
  );
};

export default Ambience;
