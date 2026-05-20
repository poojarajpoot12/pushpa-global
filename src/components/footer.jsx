import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

import logo from "../assets/PUSHPA-FINAL-LOGO.png";

/* ✅ Sorted automatically */
const DESTINATIONS = [
  "Australia", "Canada", "France", "Germany", "Ireland", "Japan", "Moldova", "New Zealand", "Netherlands", "Singapore", "UK", "USA", "UAE"
].sort((a, b) => a.localeCompare(b));

const Footer = () => {
  const navigate = useNavigate();

  // ✅ Common Navigation Logic (Header wala sync)
  const handleCountryClick = (country) => {
    const countryPath = country.toLowerCase().replace(/\s+/g, '-');
    navigate(`/study-abroad/${countryPath}`);
    window.scrollTo(0, 0); // Click karte hi page top par chala jaye
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div>
          <div className="logo" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="logo" />
          </div>

          <p className="desc">
            Pushpa Global Solutions helps students discover the right education
            pathways and connects institutions with talented learners.
          </p>

          <p className="tagline">
            Dream Bigger. Learn Smarter. Achieve Greater.
          </p>
        </div>

        {/* ✅ DESTINATIONS (Fixed Clicking) */}
        <div>
          <h4>Study Abroad</h4>
          {DESTINATIONS.map((d, i) => (
            <p 
              key={i} 
              className="footer-link-item" 
              onClick={() => handleCountryClick(d)}
            >
              {d}
            </p>
          ))}
        </div>

        {/* RESOURCES */}
        <div>
          <h4>Resources</h4>
          {["Home", "About Us", "Contact Us", "Event", "Services"]
            .sort((a, b) => a.localeCompare(b))
            .map((d, i) => (
              <p
                key={i}
                className="footer-link-item"
                onClick={() => {
                  if (d === "Home") navigate("/");
                  else if (d === "About Us") navigate("/about");
                  else if (d === "Contact Us") navigate("/register");
                  else if (d === "Services") navigate("/register");
                  window.scrollTo(0, 0);
                }}
              >
                {d}
              </p>
            ))}
        </div>

        {/* CONTACT */}
        <div className="contact">
          <h4>Get In Touch</h4>

          <p className="phone">+(91) 8287–543–429</p>
          <p className="email">info@pushpags.com</p>
          <p className="address">
            A-23, 1st Floor, Okhla Phase 1,<br />
            New Delhi–110020 (India)
          </p>
          <div className="map-wrapper">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.3492881434486!2d77.26959665107431!3d28.529219226369232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce158069cd889%3A0x79c25a54bce22e65!2sRoy%20Mediative%20Groups!5e0!3m2!1sen!2sus!4v1778155027451!5m2!1sen!2sus" 
              style={{ border: 0, borderRadius: "12px" }} 
              width="100%" 
              height="150" 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="social">
            <h5>Follow with Us:</h5>
            <div className="icons">
              <span><FaFacebookF /></span>
              <span><FaInstagram /></span>
              <span><FaLinkedinIn /></span>
              <span><FaWhatsapp /></span>
            </div>
          </div>
        </div>

      </div>

      <div className="copy">
        <div className="leftcopy">© 2026 Pushpa Global Solutions. All rights reserved.</div>
        <div className="rightcopy">
          <a onClick={() => {navigate("/legal-policies"); window.scrollTo(0,0);}}>Privacy Policy</a>
          <a onClick={() => {navigate("/legal-policies"); window.scrollTo(0,0);}}>Terms</a>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;