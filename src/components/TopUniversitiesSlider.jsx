import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Swiper original animations bundle
import "swiper/css/bundle";
import "../css/topUniversitiesSlider.css";

// Images imports
import img1 from "../assets/Management.png";
import img2 from "../assets/Medical_Healthcare.png";
import img3 from "../assets/Creative_Art.png";
import img4 from "../assets/Study_Abroad.png";

const data = [
  { title: "Study Abroad Universities", desc: "Explore partner universities in USA, UK, Canada, Australia, Europe, and Asia.", img: img1, gradient: "linear-gradient(135deg, #ffb366 0%, #ff944d 100%)" },
  { title: "Engineering & Technology", desc: "Top institutes for Engineering, Computer Science, AI, Data Science, and Technology programs.", img: img2, gradient: "linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)" },
  { title: "Design & Creative Arts", desc: "Explore leading universities for Design, Fashion, Animation, Architecture, and Creative Arts.", img: img3, gradient: "linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)" },
  { title: "Business & Management", desc: "Discover top universities offering BBA, MBA, Business Analytics, Entrepreneurship, and Global Business.", img: img4, gradient: "linear-gradient(135deg, #fb7185 0%, #e11d48 100%)" }
];

const TopUniversitiesSlider = () => {
  // Navigation element nodes ko catch karne ke liye states
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  // Loop warning hatane ke liye array double kiya (Jaise console ne kaha tha)
  const safeData = [...data, ...data];

  return (
    <section className="uni-section">
      <div className="header-container">
        <div className="header-text">
          <h2>Explore Top Universities In India & Abroad</h2>
          <p className="sub-heading">Find the right universities</p>
        </div>

        {/* 🔵 EXACT SCREENSHOT BLUE BUTTONS - React refs attached seamlessly */}
        <div className="custom-nav-buttons">
          <button ref={(node) => setPrevEl(node)} className="custom-prev">←</button>
          <button ref={(node) => setNextEl(node)} className="custom-next">→</button>
        </div>
      </div>

      <div className="slider-wrapper">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={25}
          slidesPerView={1}
          loop={true}
          observer={true}
          observeParents={true}
          autoplay={{ 
            delay: 2500, 
            disableOnInteraction: false 
          }}
          navigation={{ prevEl, nextEl }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 }
          }}
          className="uni-swiper"
        >
          {safeData.map((item, i) => (
            <SwiperSlide key={i} className="uni-swiper-slide">
              <div className="uni-card-v2" style={{ background: item.gradient }}>
                <div className="card-top">
                  <div className="imgBox">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="card-bottom">
                  <div className="arrow-btn">
                    <span className="arrow-icon">→</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopUniversitiesSlider;