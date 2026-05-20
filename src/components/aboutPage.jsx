import React from 'react';
import { 
  Users, Target, Eye, Globe, UserCheck, Laptop, Layout, Calendar, Zap, Puzzle, ShieldCheck
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import founder from "../assets/Swapan Roy.png"
import sukanta from "../assets/Sukanta Dey.png"
import pradeep from "../assets/Pradeep Kumar Halder.png"
import shaweta from "../assets/Shaweta Berry.png"
import pooja from "../assets/pooja.jpeg"
import rashmi from "../assets/MS. Rashmi yadav.png"
import ratan from "../assets/MR. RATAN ROY.png"
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/aboutcourse.css';

const AboutUs = () => {
  const cardData = [
    { title: "Our Vision", content: "Building futures through education, innovation, and global opportunities." },
    { title: "Value for Students", content: "Helping students choose the right career path with personalized guidance and complete educational support." },
    { title: "Value for Institutions", content: "Supporting institutions with recruitment, technology integration, and growth-driven solutions." },
    { title: "What We Value", content: "Pushpa Global Solutions believes in integrity, innovation, excellence, and long-term commitment." }
  ];

  const valueData = [
    { title: "Student Counselling", desc: "Expert guidance for career planning, university selection, and admissions.", icon: <Users size={24} />, color: "#4f46e5" },
    { title: "Study Abroad Services", desc: "Complete international admission and visa assistance for global education.", icon: <Globe size={24} />, color: "#10b981" },
    { title: "Staff Recruitment", desc: "Helping institutions hire qualified and experienced teaching professionals.", icon: <UserCheck size={24} />, color: "#f59e0b" },
    { title: "IT Infrastructure", desc: "Advanced computer labs, networking, and educational software solutions.", icon: <Laptop size={24} />, color: "#ef4444" },
    { title: "Smart Classroom", desc: "Interactive panels and digital classroom technologies for modern learning.", icon: <Layout size={24} />, color: "#8b5cf6" },
    { title: "Event Management", desc: "Career fairs and workshops connecting students with opportunities.", icon: <Calendar size={24} />, color: "#ec4899" }
  ];

  const teamMembers = [
    { name: "Swapan Roy", pos: "Founder & CEO", dept: "Visionary Leader", img: founder },
    { name: "Sukanta Dey", pos: "Strategy & Operations Head", dept: "Strategy & Operations", img: sukanta },
    { name: "Pradeep Kumar Halder", pos: "Trainer", dept: " Admissions & Counselling Department", img: pradeep },
    { name: "Pooja Rajpoot", pos: "Cousellor ", dept: "Couselling & IT & Infrastructure", img: pooja },
    { name: "MS. Rashmi yadav", pos: "Cousellor", dept: "Couselling & graphic designer", img: rashmi },
    { name: "Mr. Ratan Roy", pos: "Trainer", dept: "Study Abroad & Career Guidance", img: ratan },
    { name: "Mrs. Shaweta Berry", pos: "Senior Cousellor", dept: "Study Abroad & Career Guidance", img: shaweta }
  ];
  const statsData = [
    { label: "Students Guided", value: "1000+", icon: <Users size={28} /> },
    { label: "Partner Institutions", value: "50+", icon: <Globe size={28} /> },
    { label: "Educational Events", value: "50+", icon: <Calendar size={28} /> },
    { label: "Countries Covered", value: "10+", icon: <Target size={28} /> },
    { label: "Career Counselling", value: "100+", icon: <UserCheck size={28} /> },
    { label: "Successful Admissions", value: "500+", icon: <Zap size={28} /> },
    { label: "Institutional Collaborations", value: "25+", icon: <Puzzle size={28} /> },
    { label: "Student Satisfaction", value: "95%", icon: <ShieldCheck size={28} /> }
  ];
  const whyChooseData = [
    { title: "Personalized Counselling", desc: "Customized approach to match every student's unique goals.", icon: <Users size={24} /> },
    { title: "Strong Institution Network", desc: "Access to a vast network of top-tier universities and colleges.", icon: <Globe size={24} /> },
    { title: "End-to-End Support", desc: "From application to enrollment, we handle every step for you.", icon: <Zap size={24} /> },
    { title: "Global Expertise", desc: "Professional guidance for both domestic and international education.", icon: <Target size={24} /> },
    { title: "Integrated Solutions", desc: "Seamless educational services tailored for growth and success.", icon: <Puzzle size={24} /> },
    { title: "Smart IT Services", desc: "Modern smart classroom setups and advanced IT infrastructure.", icon: <Laptop size={24} /> },
    { title: "Proven Success Record", desc: "A history of successful admissions and satisfied students.", icon: <UserCheck size={24} /> },
    { title: "Dedicated Support", desc: "Long-term commitment to ensure your educational journey is smooth.", icon: <ShieldCheck size={24} /> },
  ];
  const approachData = [
    { step: "01", title: "Understand Goals", desc: "We deep dive into student aspirations and career dreams to set a solid foundation." },
    { step: "02", title: "Tailored Counselling", desc: "Expert guidance for personalized course selection based on your unique interests." },
    { step: "03", title: "Shortlist Universities", desc: "Finding the best-fit global universities that match your profile and budget." },
    { step: "04", title: "Application Support", desc: "Complete assistance with documentation, essays, and error-free applications." },
    { step: "05", title: "Visa & Pre-Departure", desc: "Smooth visa processing and essential guidance before you fly to your destination." },
    { step: "06", title: "Career Success", desc: "Dedicated support to ensure your long-term professional growth and career success." },
  ];
  return (
    <div className="about-page-main-wrapper">
      {/* SECTION 1: HERO BANNER */}
      <div className="about-banner">
        <div className="banner-overlay">
          <div className="banner-content">
            <span className="about-subtitle">Get to know us</span>
            <h1 className='about-h'>About <span>Us</span></h1>
            <div className="banner-line"></div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        {/* SECTION 2: WHO WE ARE */}
        <section className="pgs-about-unique-wrapper">
          <div className="pgs-text-center-header">
            <h2>Who We <span>Are</span></h2>
            <p className="pgs-sub-para-text">
              Pushpa Global Solutions is a dynamic education platform committed to transforming how students and institutions connect. We bridge the gap between career paths and measurable success.
            </p>
          </div>
          <div className="pgs-values-grid-layout">
            {cardData.map((card, index) => (
              <div className="pgs-value-item-card" key={index}>
                <div className="pgs-card-top-accent"><h3>{card.title}</h3></div>
                <div className="pgs-card-content-body-card"><p>{card.content}</p></div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WE BRING VALUE */}
        <section className="pgs-value-section">
          <h2>We Bring <span>Value Through</span></h2>
          <div className="pgs-three-card-row">
            {valueData.map((item, index) => (
              <div className="pgs-premium-card" key={index}>
                <div className="pgs-icon-floating" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                  {item.icon}
                </div>
                <div className="pgs-card-content">
                  <h3 className="pgs-card-title">{item.title}</h3>
                  <p className="pgs-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: TEAM SLIDER (V2 SCREENSHOT STYLE) */}
        <section className="pgs-team-section">
          <h2>Our Better <span>Team</span></h2>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 5 }
            }}
            className="pgs-team-swiper"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="pgs-team-card-v2">
                  <div className="pgs-card-banner">
                    <div className="pgs-member-img-circle">
                      <img src={member.img} alt={member.name} onError={(e) => e.target.src='https://via.placeholder.com/150'} />
                    </div>
                  </div>
                  <div className="pgs-member-info">
                    <h4>{member.name}</h4>
                    <span className="pgs-member-pos">{member.pos}</span>
                    <p className="pgs-member-dept">{member.dept}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        
        <section className="pgs-stats-section">
          <div className="pgs-container">
            <h2>We Just Keep <span>Growing</span></h2>
            <div className="pgs-stats-grid">
              {statsData.map((stat, index) => (
                <div className="pgs-stat-card" key={index}>
                  <div className="pgs-stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="pgs-stat-info">
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pgs-why-choose-section">
          <div className="pgs-container">
            <div className="pgs-section-header">
              <h2>Why Choose <span>Pushpa Global Solutions</span></h2>
              <p>We provide the expertise and support needed to turn your educational dreams into reality.</p>
            </div>
            
            <div className="pgs-why-grid">
              {whyChooseData.map((item, index) => (
                <div className="pgs-why-card" key={index}>
                  <div className="pgs-why-icon">{item.icon}</div>
                  <div className="pgs-why-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="pgs-new-approach-wrapper">
          <div className="pgs-container">
            <div className="pgs-text-center-header">
              <h2>Our <span>Approach</span></h2>
            </div>
            <div className="pgs-approach-flex-grid">
              {approachData.map((item, index) => (
                <div className="pgs-approach-step-item" key={index}>
                  <div className="pgs-step-indicator">
                    <span className="pgs-step-num">{item.step}</span>
                    
                    {/* Logic: Agar card number 3, 6, 9 (multiple of 3) hai, 
                        toh connector mat dikhao 
                    */}
                    {(index + 1) % 3 !== 0 && index !== approachData.length - 1 && (
                      <div className="pgs-step-connector"></div>
                    )}
                  </div>
                  <div className="pgs-approach-details">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;