import React, { useEffect, useRef } from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";

function SandwichGeeksMenu({ cartItems, onAddToCart, onRemoveFromCart }) {
  const cardRefs = useRef({});

  useEffect(() => {
    Object.values(cardRefs.current).forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 5,
          speed: 300,
          glare: false,
          scale: 1.01,
          perspective: 1000,
          gyroscope: false,
          reset: false,
          "mouse-event-element": card,
          "reset-to-start": false,
        });
      }
    });

    return () => {
      Object.values(cardRefs.current).forEach((card) => {
        if (card && card.vanillaTilt) {
          card.vanillaTilt.destroy();
        }
      });
    };
  }, [cartItems]);

  const MenuCard = ({ itemName, price, imageSrc, altText }) => {
    const quantity = cartItems[itemName] || 0;

    return (
      <div
        ref={(el) => (cardRefs.current[itemName] = el)}
        className={`menu-card ${quantity > 0 ? "active" : ""}`}
        data-tilt
        data-tilt-perspective="1000"
      >
        <img src={imageSrc} alt={altText} />
        <p className="item-name">| {itemName}</p>
        <h4 className="price">{price}</h4>
        <div className="quantity-controls">
          {quantity > 0 ? (
            <>
              <button
                className="quantity-btn minus"
                onClick={() => onRemoveFromCart(itemName)}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                className="quantity-btn plus"
                onClick={() => onAddToCart(itemName)}
              >
                +
              </button>
            </>
          ) : (
            <button
              className="add-btn"
              onClick={() => onAddToCart(itemName)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    );
  };

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
          <MenuCard 
            itemName="Bombay Grill"
            price="₹449"
            imageSrc="/assets/images/menuuu1.png"
            altText="Bombay Grill"
          />
          <MenuCard 
            itemName="Delhi Tikki"
            price="₹399"
            imageSrc="/assets/images/menuuu2.png"
            altText="Delhi Tikki"
          />
          <MenuCard 
            itemName="Cheese Melt"
            price="₹479"
            imageSrc="/assets/images/menuuu3.png"
            altText="Cheese Melt"
          />
          <MenuCard 
            itemName="Grilled Crust"
            price="₹429"
            imageSrc="/assets/images/grilledcrust.png"
            altText="Grilled Crust"
          />
        </div>

        <h2 className="section-title">GEEK CRAFTED</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Chilli Cheese"
            price="₹459"
            imageSrc="/assets/images/menuuu4.png"
            altText="Chilli Cheese"
          />
          <MenuCard 
            itemName="Paneer Achari"
            price="₹479"
            imageSrc="/assets/images/menuuu5.png"
            altText="Paneer Achari"
          />
          <MenuCard 
            itemName="Crunchy Mexican"
            price="₹439"
            imageSrc="/assets/images/menuuu6.png"
            altText="Crunchy Mexican"
          />
          <MenuCard 
            itemName="Crunchy American"
            price="₹449"
            imageSrc="/assets/images/menuuu7.avif"
            altText="Cheesy American"
          />
        </div>

        <h2 className="section-title">Veg Sandwiches</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Aloo Patty Sandwich"
            price="₹329"
            imageSrc="/assets/images/vegsand1.JPG"
            altText="Aloo Patty Sandwich"
          />
          <MenuCard 
            itemName="Veg Shammi Sandwich"
            price="₹349"
            imageSrc="/assets/images/vegsand2.JPG"
            altText="Veg Shammi Sandwich"
          />
          <MenuCard 
            itemName="Paneer Tikka Sandwich"
            price="₹379"
            imageSrc="/assets/images/vegsand3.JPG"
            altText="Paneer Tikka Sandwich"
          />
          <MenuCard 
            itemName="Veggie Delite Sandwich"
            price="₹299"
            imageSrc="/assets/images/vegsand4.JPG"
            altText="Veggie Delite Sandwich"
          />
        </div>

        <h2 className="section-title">The Cravers</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Tandoori Paneer Craver"
            price="₹429"
            imageSrc="/assets/images/craver1.avif"
            altText="Tandoori Paneer Craver"
          />
          <MenuCard 
            itemName="Classic Veggie Craver"
            price="₹399"
            imageSrc="/assets/images/craver2.avif"
            altText="Classic Veggie Craver"
          />
          <MenuCard 
            itemName="Soya Roll Craver"
            price="₹379"
            imageSrc="/assets/images/craver3.avif"
            altText="Soya Roll Craver"
          />
          <MenuCard 
            itemName="Aloo Patty Craver"
            price="₹349"
            imageSrc="/assets/images/craver4.avif"
            altText="Aloo Patty Craver"
          />
        </div>

        <h2 className="section-title">Signature Wraps</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Paneer Tikka Signature Wrap"
            price="₹429"
            imageSrc="/assets/images/wrap1.JPG"
            altText="Paneer Tikka Signature Wrap"
          />
          <MenuCard 
            itemName="Corn & Peas Signature Wrap"
            price="₹399"
            imageSrc="/assets/images/wrap2.JPG"
            altText="Corn & Peas Signature Wrap"
          />
          <MenuCard 
            itemName="Veggie Delite Signature Wrap"
            price="₹379"
            imageSrc="/assets/images/wrap3.JPG"
            altText="Veggie Delite Signature Wrap"
          />
          <MenuCard 
            itemName="Veg Shammi Signature Wrap"
            price="₹409"
            imageSrc="/assets/images/wrap4.JPG"
            altText="Veg Shammi Signature Wrap"
          />
        </div>

        <h2 className="section-title">Veg Salads</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Paneer Tikka Salad"
            price="₹399"
            imageSrc="/assets/images/salad1.avif"
            altText="Paneer Tikka Salad"
          />
          <MenuCard 
            itemName="Veggie Delite Salad"
            price="₹399"
            imageSrc="/assets/images/salad2.avif"
            altText="Veggie Delite Salad"
          />
          <MenuCard 
            itemName="Aloo Patty Salad"
            price="₹399"
            imageSrc="/assets/images/salad3.avif"
            altText="Aloo Patty Salad"
          />
          <MenuCard 
            itemName="Veg Shammi Salad"
            price="₹399"
            imageSrc="/assets/images/salad4.avif"
            altText="Veg Shammi Salad"
          />
        </div>

        <h2 className="section-title">Hot Beverages</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Cafe Mocha"
            price="₹249"
            imageSrc="/assets/images/hb2.png"
            altText="Cafe Mocha"
          />
          <MenuCard 
            itemName="Latte"
            price="₹199"
            imageSrc="/assets/images/hb1.png"
            altText="Latte"
          />
          <MenuCard 
            itemName="Hot Chocolate"
            price="₹249"
            imageSrc="/assets/images/hb3.png"
            altText="Hot Chocolate"
          />
          <MenuCard 
            itemName="French Vanilla"
            price="₹199"
            imageSrc="/assets/images/hb4.png"
            altText="French Vanilla"
          />
        </div>

        <h2 className="section-title">Cold Beverages</h2>
        <div className="menu-row">
          <MenuCard 
            itemName="Java Chip Frappe"
            price="₹299"
            imageSrc="/assets/images/cb1.png"
            altText="Java Chip Frappe"
          />
          <MenuCard 
            itemName="Iced Latte"
            price="₹249"
            imageSrc="/assets/images/cb3.png"
            altText="Iced Latte"
          />
          <MenuCard 
            itemName="Caramel Iced Frappe"
            price="₹299"
            imageSrc="/assets/images/cb2.png"
            altText="Caramel Iced Frappe"
          />
          <MenuCard 
            itemName="Iced Americano"
            price="₹249"
            imageSrc="/assets/images/cb4.png"
            altText="Iced Americano"
          />
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
              <Link to="/locationcontact">Location</Link>
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
