import React from "react";
import "../css/aboutsection.css";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/learning.jpg";
import shapeLeft from "../assets/about_shape3_1.png";
import shapeRight from "../assets/event_shape2_1.png";

const features = [
  {
    icon: "🎯",
    title: "Career Counselling",
    desc: "Expert guidance to help students choose the right course & career path.",
  },
  {
    icon: "🏛️",
    title: "University Partnerships",
    desc: "Access to top universities in India and global destinations.",
  },
  {
    icon: "🌐",
    title: "Global Education Opportunities",
    desc: "Explore study options in USA, UK, Canada, Australia, Europe and more.",
  },
  {
    icon: "🎪",
    title: "Career Fairs & Events",
    desc: "Meet university representatives and explore academic opportunities.",
  },
];

const AboutSection = () => {
  const navigate =useNavigate();
  return (
    <section className="about-section" id="about">

      {/* ✅ ONLY ADDED BACKGROUND SHAPES */}
      <img src={shapeLeft} className="bg-shape left" alt="" />
      <img src={shapeRight} className="bg-shape right" alt="" />

      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src={img1} alt="Students" />

          <div className="about-badge bottom">
            <h3>1000+</h3>
            <p>Happy Students</p>
          </div>

          <div className="about-badge top">
            <p>Admission Success</p>
            <h3 className="green">95%</h3>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <span className="about-tag">About Us</span>

          <h2>
            A Smarter Way to Plan Your <br />
            <span className="gradient-text">Education Journey</span>
          </h2>

          <p className="about-desc">
            Pushpa Global Solutions helps students discover the right academic
            pathways and connect with leading universities in India and around
            the world. Our expert guidance, institutional partnerships, and
            career events empower students to make confident decisions about
            their future.
          </p>

          <div className="about-features">
            {features.map((item, i) => (
              <div className="feature" key={i}>
                <div className="icon">{item.icon}</div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="about-btn" onClick={()=> navigate('/service')}>
            Learn More About Us →
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;