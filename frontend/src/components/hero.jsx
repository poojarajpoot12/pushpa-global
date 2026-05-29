import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/hero.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8,
  img9, img10, img11, img12, img13, img14, img15, img16
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [shrink, setShrink] = useState(false);
  const navigate = useNavigate();

  // 🔁 Smooth Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds interval for a better user experience

    return () => clearInterval(interval);
  }, []);

  // 🔽 Scroll & TCS Shrink Effect
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      setScrollY(scroll);
      setShrink(scroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`hero ${shrink ? "shrink" : ""}`}>
      {/* Background Fade Wrapper */}
      <div className="hero-bg-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-bg-layer ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className="hero-content"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: `${1 - scrollY / 400}`,
        }}
      >
        <h1 className="hero-h">Your Future Starts Here</h1>
        <h3 className="hero-h">Dream Bigger. Learn Smarter. Achieve Greater.</h3>

        <p className="hero-h">
          Pushpa Global Solutions helps students discover the right education pathways and connects institutions with talented learners. From career counselling and university partnerships to career fairs and technology solutions, we create opportunities that shape the future.
        </p>

        <div className="hero-buttons">
          <button className="primary" onClick={() => navigate("/courses")}>My Career Path</button>
          <button 
            className="secondary" 
            onClick={() => navigate("/counselling-registration")}
          >
            Book Free Counselling
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;