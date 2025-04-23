import React from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";

function SandwichGeeksMenu() {
  return (
    <div
      style={{
        backgroundImage: `url("/assets/images/BackgroundImg.png")`,
        fontFamily: "Niramit",
        overflowX: "hidden",
        margin: "0",
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

      <section className="menu-section1">
        <div className="menu-div" id="menuid">
          <hr className="rule1" />
          <h1 className="menu-heading">Menu</h1>
          <hr className="rule2" />
        </div>
      </section>

      <section className="menu-section2">
        <h2 className="section-title">MEET THE GRILLS</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/menuuu1.png" alt="Bombay Grill" />
            <p className="item-name">| Bombay Grill
                <h4 className="price">$30</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/menuuu2.png" alt="Delhi Tikki" />
            <p className="item-name">| Delhi Tikki
                <h4 className="price">$30</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/menuuu3.png" alt="Cheese Melt" />
            <p className="item-name">| Cheese Melt
                <h4 className="price">$30</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img
              src="/assets/images/Screenshot 2025-04-11 at 11.18.58 PM.png"
              alt="Grilled Crust"
              style={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.491)" }}
            />
            <p className="item-name">| Grilled Crust
                <h4 className="price">$30</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">GEEK CRAFTED</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/menuuu4.png" alt="Chilli Cheese" />
            <p className="item-name">| Chilli Cheese
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/menuuu5.png" alt="Paneer Achari" />
            <p className="item-name">| Paneer Achari
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/menuuu6.png" alt="Crunchy Mexican" />
            <p className="item-name">| Crunchy Mexican
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img
              src="/assets/images/menuuu7.avif"
              alt="Cheesy American"
              style={{ boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.491)" }}
            />
            <p className="item-name">| Crunchy American
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">Veg Sandwiches</h2>
        <div className="menu-row">
          <div className="menu-card" style={{height: "260px"}}>
            <img src="/assets/images/vegsand1.JPG" alt="Aloo Patty Sandwich" />
            <p className="item-name">| Aloo Patty Sandwich
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card" style={{height: "260px"}}>
            <img src="/assets/images/vegsand2.JPG" alt="Veg Shammi Sandwich" />
            <p className="item-name">| Veg Shammi Sandwich
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card" style={{height: "260px"}}>
            <img src="/assets/images/vegsand3.JPG" alt="Paneer Tikka Sandwich" />
            <p className="item-name">| Paneer Tikka Sandwich
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card" style={{height: "260px"}}>
            <img src="/assets/images/vegsand4.JPG" alt="Veggie Delite Sandwich" />
            <p className="item-name">| Veggie Delite Sandwich
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">The Cravers</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/craver1.avif" alt="Tandoori Paneer Craver" />
            <p className="item-name">| Tandoori Paneer Craver
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/craver2.avif" alt="Classic Veggie Craver" />
            <p className="item-name">| Classic Veggie Craver
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/craver3.avif" alt="Soya Roll Craver" />
            <p className="item-name">| Soya Roll Craver
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/craver4.avif" alt="Aloo Patty Craver" />
            <p className="item-name">| Aloo Patty Craver
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">Signature Wraps</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img
              src="/assets/images/wrap1.JPG"
              alt="Paneer Tikka Signature Wrap"
            />
            <p className="item-name">| Paneer Tikka Signature Wrap
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/wrap2.JPG" alt="Corn & Peas Signature Wrap" />
            <p className="item-name">| Corn & Peas Signature Wrap
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img
              src="/assets/images/wrap3.JPG"
              alt="Veggie Delite Signature Wrap"
            />
            <p className="item-name">| Veggie Delite Signature Wrap
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/wrap4.JPG" alt="Veg Shammi Signature Wrap" />
            <p className="item-name">| Veg Shammi Signature Wrap
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">Veg Salads</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/salad1.avif" alt="Paneer Tikka Salad" />
            <p className="item-name">| Paneer Tikka Salad
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/salad2.avif" alt="Veggie Delite Salad" />
            <p className="item-name">| Veggie Delite Salad
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/salad3.avif" alt="Aloo Patty Salad" />
            <p className="item-name">| Aloo Patty Salad
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/salad4.avif" alt="Veg Shammi Salad" />
            <p className="item-name">| Veg Shammi Salad
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">Hot Beverages</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/hb2.png" alt="Cafe Mocha" />
            <p className="item-name">| Cafe Mocha
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/hb1.png" alt="Latte" />
            <p className="item-name">| Latte
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/hb3.png" alt="Hot Chocolate" />
            <p className="item-name">| Hot Chocolate
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/hb4.png" alt="French Vanilla" />
            <p className="item-name">| French Vanilla
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>

        <h2 className="section-title">Cold Beverages</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src="/assets/images/cb1.png" alt="Java Chip Frappe" />
            <p className="item-name">| Java Chip Frappe
                <h4 className="price">$45</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/cb3.png" alt="Iced Latte" />
            <p className="item-name">| Iced Latte
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/cb2.png" alt="Caramel Iced Frappe" />
            <p className="item-name">| Caramel Iced Frappe
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
          <div className="menu-card">
            <img src="/assets/images/cb4.png" alt="Iced Americano" />
            <p className="item-name">| Iced Americano
                <h4 className="price">$60</h4>
            </p>
            <button className="add-btn">Add</button>
          </div>
        </div>
      </section>

      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2>
          <br></br>
          <p>
            From crunchy bites to byte-sized updates—our newsletter serves up
            sizzling offers,
            <br /> tasty surprises, and the freshest sandwich stories straight
            to your inbox!
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
                  src="/assets/images/image 3.png"
                  alt="LogoImage"
                />
              </div>
            </div>
          </div>

          <div className="link-group1">
            <h3>Our Brand:</h3>
            <ul className="our-brand">
              <li>
                <a href="index.html#aboutus">About Us</a>
              </li>
              <li>
                <a href="index.html#topproducts">Top Products</a>
              </li>
              <li>
                <a href="index.html#customer-feedbacks">Reviews</a>
              </li>
              <li>
                <a href="index.html#offers">Offers</a>
              </li>
              <li>
                <a href="/locationcontact">Location</a>
              </li>
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
              <li>
                <a href="#" className="social-btn ig">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-btn yt">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-btn tw">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-btn lin">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-btn fb">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="social-btn dc">
                  <i className="fab fa-discord"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-bottom-bar">
          <p className="p1">
            An Exotic Sandwich Brand <br />
          </p>
          <p className="p2">
            Copyright © 2025 All rights reserved. Made with ♡ by Krish.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default SandwichGeeksMenu;
