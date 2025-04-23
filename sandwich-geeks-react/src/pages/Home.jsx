import React from "react";
import "../styles/style.css";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';



const Home = () => {
  const targetRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      const rect = targetRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.85;

      if (rect.top < triggerPoint) {
        targetRef.current.classList.add("slide-in");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, []);
  useEffect(() => {
    VanillaTilt.init(document.querySelector(".testimonial-section"), {
      max: 3,
      speed: 950,
      glare: true,
      "max-glare": 0.2,
    });

    VanillaTilt.init(document.querySelector(".feedback-card-new"), {
      max: 4,
      speed: 650,
      glare: true,
      "max-glare": 0.2,
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
        <div className="container" id="homepage">
          <div className="glass-card">
            <nav>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <a href="#aboutus">About Us</a>
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

      {/* Hero Section */}
      <div className="circle1">
        <div>
          <h1 className="logo">
            Sandwich
            <br />
            Geeks
          </h1>
        </div>
        <p className="tagline">
          Premium range of mouth-watering
          <br />
          Exotic Sandwiches
        </p>
        <hr className="vertical-line" />
        <div className="logo-image">
          <img src="/assets/images/image 3.png" alt="Logo" />
        </div>
        <div className="index">
          <img
            className="imgclass"
            src="/assets/images/image.png"
            alt="Sandwich"
          />
        </div>
        <div className="circle2"></div>
      </div>

      {/* Buttons */}
      <div className="button-container">
        <a href="/locationcontact">
          <button className="side-btn">| Location</button>
        </a>
        <a href="#topproducts">
          <button className="top-products-btn">| Top Products</button>
        </a>
        <a href="/locationcontact">
          <button className="side-btn">| Contact Us</button>
        </a>
      </div>
      

      {/* About Us */}
      <section className="abt" id="aboutus">
        <div className="about-us">
          <hr className="rule2" />
          <h1 className="abt-heading">About Us</h1>
          <hr className="rule3" />
        </div>
        <p className="abt-para">
          Welcome to{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>
          , where every sandwich tells a story! We believe in
          <br /> transforming fresh, high-quality ingredients into sandwiches
          that satisfy and surprise.
          <br /> From the crispy crust of freshly baked bread to the savory
          layers of carefully sourced
          <br /> meats, cheeses, and seasonal produce, each bite delivers a
          burst
          <br /> of flavor that’s sure to bring a smile.
        </p>

        <p className="abt-para" style={{ paddingTop: "16vh" }}>
          Founded with a passion for food and a love for community,{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          is a place
          <br /> for everyone—whether you’re looking for a quick lunch, a cozy
          family meal,
          <br /> or a new local favorite. Our Geeks take pride in making each
          sandwich with care,
          <br /> drawing from classic recipes and innovative flavor
          combinations. We aim to create an
          <br /> experience that’s not just about the food but about the warmth
          and enjoyment
          <br /> that good food can bring.
        </p>
      </section>

      {/* Animated Side Image */}
      <div className="sideangle-img">
        <img
          ref={targetRef}
          className="sideangle-class"
          src="/assets/images/Sideangle.webp"
          alt="Side Image"
        />
      </div>

      {/* Top Products */}
      <section className="tp-section" id="topproducts">
        <div className="tp-container">
          <hr className="rule4" />
          <h1 className="tp-heading">Top Products</h1>
          <hr className="rule5" />
        </div>
      </section>

      {/* Product Cards */}
      <div className="pa1">
        <img
          className="pa1-img"
          src="/assets/images/image 17.png"
          alt="Paneer Achari"
        />
        <hr className="rule6" />
        <p className="pa-para1">
          The Paneer Achari Sandwich at{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          brings an Indian twist to the classic
          <br />
          sandwich with a flavorful, tangy filling that’s all about spice and
          zest. The real highlight of
          <br />
          the Paneer Achari Sandwich lies in its achari spices, which mimic the
          bold and aromatic flavors
          <br />
          of traditional Indian pickles.
          <br />
          It’s an ideal choice for those who want a satisfying, protein-rich
          sandwich with a true taste of
          <br />
          Indian cuisine, all wrapped up in the fresh, crunchy goodness that{" "}
          <br />
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          is known for.
        </p>
      </div>
      <p className="title1">Paneer Achari</p>

      <div className="pa2">
        <p className="pa-para2">
          The Crunchy Mexican Sandwich at{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          is a flavorful creation that packs
          <br />
          a satisfying crunch and zesty Mexican-inspired flavors.
          <br />
          A key feature of this sandwich is the Mexican-inspired sauces—often
          including <br />
          creamy Chipotle Southwest sauce or spicy salsa—infusing each bite with
          a tangy,
          <br />
          smoky kick. Combined, these ingredients give a satisfying balance of
          crunch, spice, <br />
          and creaminess, making the Crunchy Mexican Sandwich a popular choice.
        </p>
        <hr className="rule7" />
        <img
          className="pa2-img"
          src="/assets/images/image 18.png"
          alt="Crunchy Mexican"
        />
      </div>
      <p className="title2">Crunchy Mexican</p>

      <div className="pa3">
        <p className="pa-para3">
          The Café Mocha at{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          is a rich, velvety blend of bold espresso and luscious
          <br />
          chocolate, topped with a swirl of creamy steamed milk and a hint of
          cocoa magic.
          <br />
          It’s more than just a coffee—it’s a cozy hug in a cup that satisfies
          both coffee lovers and
          <br />
          chocolate enthusiasts alike.
          <br />
          With the perfect balance of bitterness and sweetness, our Café Mocha
          is the ultimate
          <br />
          crowd favorite, whether you’re kick-starting your day or winding down
          with a treat.
          <br />
          No wonder it’s our best seller—it’s the sip everyone keeps coming back
          for.
        </p>
        <hr className="rule8" />
        <img
          className="pa3-img"
          src="/assets/images/HotBeverages_04_CafeMocha.png"
          alt="Cafe Mocha"
        />
      </div>
      <p className="title3">Cafe Mocha</p>

      <div className="pa4">
        <p className="pa-para4">
          The Java Chip Frappe at{" "}
          <span style={{ fontFamily: "Sedgwick Ave", color: "#ff7023" }}>
            Sandwich Geeks
          </span>{" "}
          is a frosty blend of bold coffee, rich
          <br />
          chocolate, and crunchy java chips, whipped to perfection. This icy
          delight
          <br />
          combines the punch of espresso with indulgent chocolate chips
          <br />
          for a textured twist that’s both creamy and satisfying. <br />
          Topped with swirls of whipped cream and drizzled with chocolate sauce,
          it's the
          <br />
          go-to drink for those who crave a dessert-like coffee experience.
        </p>
        <hr className="rule9" />
        <img
          className="pa4-img"
          src="/assets/images/ColdBeverages_10_JavaChipIcedCapp.png"
          alt="Java Chip Frappe"
        />
      </div>
      <p className="title4">Java Chip Frappe</p>

      {/* Feedback Section */}
      <section className="customer-feedback">
        <div className="feedback-container">
          <hr className="rule10" />
          <h1 className="feedback-heading" id="customer-feedbacks">
            Customer Feedbacks
          </h1>
          <hr className="rule11" />
        </div>
      </section>

      <div className="testimonial-section">
        <div className="feedback-box">
          <p className="feedback-text">
            “Absolutely love the Paneer Achari! Tangy, spicy, and so fresh.”
          </p>
          <p className="user-name">– Aarya S.</p>
        </div>

        <div className="feedback-box">
          <p className="feedback-text">
            “Cafe Mocha was heavenly. It’s my new comfort drink!”
          </p>
          <p className="user-name">– Raghav M.</p>
        </div>

        <div className="feedback-box">
          <p className="feedback-text">
            “Super chill place and the Java Chip Frappe is unbeatable.”
          </p>
          <p className="user-name">– Neha P.</p>
        </div>

        <div className="feedback-box">
          <p className="feedback-text">
            “The ambience is warm and welcoming. Feels like my second home!”
          </p>
          <p className="user-name">– Devansh K.</p>
        </div>

        <div className="feedback-box">
          <p className="feedback-text">
            “I come here every weekend. The Paneer Achari is a must-try!”
          </p>
          <p className="user-name">– Aarav S.</p>
        </div>

        <div className="feedback-box">
          <p className="feedback-text">
            “Affordable, delicious, and served with a smile. Love this place!”
          </p>
          <p className="user-name">– Riya K.</p>
        </div>
      </div>

      {/* Special Offers */}
      <div className="offer-section">
        <section className="special-offers">
          <div className="offers-container" id="offers">
            <hr className="rule12" />
            <h1 className="offers-heading">Special Offers</h1>
            <hr className="rule13" />
          </div>
        </section>

        <div className="offer-box">
          <p className="offer-text">
            🔥 Buy 1 Get 1 Free on all sandwiches every Tuesday!{" "}
            <span className="badge">Limited Time</span>
          </p>
        </div>

        <div className="offer-box">
          <p className="offer-text">
            🧡 20% off on your first order when you sign up for our newsletter!
          </p>
        </div>

        <div className="offer-box">
          <p className="offer-text">
            ⏰ Happy Hour: 50% off on all beverages from 3 PM to 5 PM!
          </p>
        </div>

        <div className="offer-box">
          <p className="offer-text">
            🍨 Free dessert with every sandwich order on weekends!
          </p>
        </div>
      </div>

      {/* Feedback Form */}
      <section className="feedback-section-new" id="feedback-form">
        <div className="feedback-container-new">
          <hr className="rule14" />
          <h1 className="feedback-heading-new">We Value Your Feedback</h1>
          <hr className="rule15" />
        </div>
        <div className="feedback-card-new">
          <form className="feedback-form-new">
            <p className="feedback-desc-new">
              Tell us what made you smile or what could be tastier – we’re all
              ears!
            </p>
            <input type="text" placeholder="➤ Your Name" required />
            <input type="email" placeholder="➤ Your Email" required />
            <textarea
              rows="4"
              placeholder="➤ Your Feedback..."
              required
            ></textarea>
            <button type="submit">Send Feedback</button>
          </form>
        </div>
      </section>

      {/* Newsletter Footer */}
      <section className="newsletter-footer">
        <div className="newsletter-content" id="newsletter">
          <h2>Subscribe to our Newsletter</h2><br></br>
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
                  src="/assets/images/image 3.png"
                  alt="Logo Image"
                />
              </div>
            </div>
          </div>

          <div className="link-group1">
            <h3>Our Brand:</h3>
            <ul className="our-brand">
              <li>
                <a href="#aboutus">About Us</a>
              </li>
              <li>
                <a href="#topproducts">Top Products</a>
              </li>
              <li>
                <a href="#customer-feedbacks">Reviews</a>
              </li>
              <li>
                <a href="#offers">Offers</a>
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
};

export default Home;
