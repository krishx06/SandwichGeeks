import React, { useEffect, useRef, useState } from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import NewsletterSuccess from '../components/NewsletterSuccess';
import { HashLink } from 'react-router-hash-link';  

function SandwichGeeksMenu({ cartItems, onAddToCart, onRemoveFromCart }) {
  const cardRefs = useRef({});
  const cursorImgRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const imgPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const [showNewsletterSuccess, setShowNewsletterSuccess] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Menu categories and items
  const menuCategories = {
    "all": "All Items",
    "grills": "Meet The Grills",
    "crafted": "Geek Crafted",
    "sandwiches": "Veg Sandwiches",
    "cravers": "The Cravers",
    "wraps": "Signature Wraps",
    "salads": "Veg Salads",
    "hotBeverages": "Hot Beverages",
    "coldBeverages": "Cold Beverages"
  };

  const menuItems = {
    grills: [
      { itemName: "Bombay Grill", price: "₹449", imageSrc: "/assets/images/menuuu1.png", altText: "Bombay Grill" },
      { itemName: "Delhi Tikki", price: "₹399", imageSrc: "/assets/images/menuuu2.png", altText: "Delhi Tikki" },
      { itemName: "Cheese Melt", price: "₹479", imageSrc: "/assets/images/menuuu3.png", altText: "Cheese Melt" },
      { itemName: "Grilled Crust", price: "₹429", imageSrc: "/assets/images/grilledcrust.png", altText: "Grilled Crust" }
    ],
    crafted: [
      { itemName: "Chilli Cheese", price: "₹459", imageSrc: "/assets/images/menuuu4.png", altText: "Chilli Cheese" },
      { itemName: "Paneer Achari", price: "₹479", imageSrc: "/assets/images/menuuu5.png", altText: "Paneer Achari" },
      { itemName: "Crunchy Mexican", price: "₹439", imageSrc: "/assets/images/menuuu6.png", altText: "Crunchy Mexican" },
      { itemName: "Crunchy American", price: "₹449", imageSrc: "/assets/images/menuuu7.avif", altText: "Cheesy American" }
    ],
    sandwiches: [
      { itemName: "Aloo Patty Sandwich", price: "₹329", imageSrc: "/assets/images/vegsand1.JPG", altText: "Aloo Patty Sandwich" },
      { itemName: "Veg Shammi Sandwich", price: "₹349", imageSrc: "/assets/images/vegsand2.JPG", altText: "Veg Shammi Sandwich" },
      { itemName: "Paneer Tikka Sandwich", price: "₹379", imageSrc: "/assets/images/vegsand3.JPG", altText: "Paneer Tikka Sandwich" },
      { itemName: "Veggie Delite Sandwich", price: "₹299", imageSrc: "/assets/images/vegsand4.JPG", altText: "Veggie Delite Sandwich" }
    ],
    cravers: [
      { itemName: "Tandoori Paneer Craver", price: "₹429", imageSrc: "/assets/images/craver1.avif", altText: "Tandoori Paneer Craver" },
      { itemName: "Classic Veggie Craver", price: "₹399", imageSrc: "/assets/images/craver2.avif", altText: "Classic Veggie Craver" },
      { itemName: "Soya Roll Craver", price: "₹379", imageSrc: "/assets/images/craver3.avif", altText: "Soya Roll Craver" },
      { itemName: "Aloo Patty Craver", price: "₹349", imageSrc: "/assets/images/craver4.avif", altText: "Aloo Patty Craver" }
    ],
    wraps: [
      { itemName: "Paneer Tikka Signature Wrap", price: "₹429", imageSrc: "/assets/images/wrap1.JPG", altText: "Paneer Tikka Signature Wrap" },
      { itemName: "Corn & Peas Signature Wrap", price: "₹399", imageSrc: "/assets/images/wrap2.JPG", altText: "Corn & Peas Signature Wrap" },
      { itemName: "Veggie Delite Signature Wrap", price: "₹379", imageSrc: "/assets/images/wrap3.JPG", altText: "Veggie Delite Signature Wrap" },
      { itemName: "Veg Shammi Signature Wrap", price: "₹409", imageSrc: "/assets/images/wrap4.JPG", altText: "Veg Shammi Signature Wrap" }
    ],
    salads: [
      { itemName: "Paneer Tikka Salad", price: "₹399", imageSrc: "/assets/images/salad1.avif", altText: "Paneer Tikka Salad" },
      { itemName: "Veggie Delite Salad", price: "₹399", imageSrc: "/assets/images/salad2.avif", altText: "Veggie Delite Salad" },
      { itemName: "Aloo Patty Salad", price: "₹399", imageSrc: "/assets/images/salad3.avif", altText: "Aloo Patty Salad" },
      { itemName: "Veg Shammi Salad", price: "₹399", imageSrc: "/assets/images/salad4.avif", altText: "Veg Shammi Salad" }
    ],
    hotBeverages: [
      { itemName: "Cafe Mocha", price: "₹249", imageSrc: "/assets/images/hb2.png", altText: "Cafe Mocha" },
      { itemName: "Latte", price: "₹199", imageSrc: "/assets/images/hb1.png", altText: "Latte" },
      { itemName: "Hot Chocolate", price: "₹249", imageSrc: "/assets/images/hb3.png", altText: "Hot Chocolate" },
      { itemName: "French Vanilla", price: "₹199", imageSrc: "/assets/images/hb4.png", altText: "French Vanilla" }
    ],
    coldBeverages: [
      { itemName: "Java Chip Frappe", price: "₹299", imageSrc: "/assets/images/cb1.png", altText: "Java Chip Frappe" },
      { itemName: "Iced Latte", price: "₹249", imageSrc: "/assets/images/cb3.png", altText: "Iced Latte" },
      { itemName: "Caramel Iced Frappe", price: "₹299", imageSrc: "/assets/images/cb2.png", altText: "Caramel Iced Frappe" },
      { itemName: "Iced Americano", price: "₹249", imageSrc: "/assets/images/cb4.png", altText: "Iced Americano" }
    ]
  };

  // Filter menu items based on search query and active category
  const filteredItems = () => {
    let items = [];
    if (activeCategory === "all") {
      Object.values(menuItems).forEach(categoryItems => {
        items = [...items, ...categoryItems];
      });
    } else {
      items = menuItems[activeCategory] || [];
    }

    if (searchQuery) {
      return items.filter(item => 
        item.itemName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return items;
  };

  useEffect(() => {
    Object.values(cardRefs.current).forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 5,
          speed: 800,
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
  }, [cartItems, searchQuery, activeCategory]);

  // Custom trailing image cursor effect
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
        cursor: "default",
      }}
    >
      {/* Trailing cursor image */}
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
      {showNewsletterSuccess && <NewsletterSuccess onClose={() => setShowNewsletterSuccess(false)} />}
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
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {Object.entries(menuCategories).map(([key, label]) => (
            <button
              key={key}
              className={`category-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="menu-grid">
          {filteredItems().map((item) => (
            <MenuCard
              key={item.itemName}
              itemName={item.itemName}
              price={item.price}
              imageSrc={item.imageSrc}
              altText={item.altText}
            />
          ))}
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
          <form className="subscribe-form" onSubmit={e => { e.preventDefault(); setShowNewsletterSuccess(true); }}>
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
            <li><HashLink smooth to="/#aboutus">About Us</HashLink></li>
            <li><HashLink smooth to="/#topproducts">Top Products</HashLink></li>
              <li>
                <a href="#customer-feedbacks">Reviews</a>
              </li>
              <li>
                <a href="#offers">Offers</a>
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
