import React from 'react';
import '../css/BlogPage.css';
import { useNavigate } from 'react-router-dom';
import blog1 from "../assets/blog1.avif";
import blog2 from "../assets/blog2.avif";
import blog3 from "../assets/blog3.avif";
import blog4 from "../assets/blog4.avif";
import blog5 from "../assets/blog5.avif";
import blog6 from "../assets/blog1.avif";


const BlogComponent = () => {
  const blogs = [
    { id: 1, title: "Best Career Options After 12th", desc: "Explore top career paths across Science, Commerce & Arts streams.", img: blog1 },
    { id: 2, title: "Study in Canada: Complete Guide", desc: "Everything you need to know about studying in Canada.", img: blog2 },
    { id: 3, title: "Top Design Colleges in India", desc: "NIFT vs UID vs WUD vs UDIT - full comparison.", img: blog3 },
    { id: 4, title: "Germany vs Canada for Students", desc: "Comparison of education quality and living costs.", img: blog4 },
    { id: 5, title: "Highest Paying Careers in India", desc: "Discover which professions offer the best salary packages.", img: blog5 },
    { id: 6, title: "How to Choose the Right Career", desc: "A step-by-step guide to finding your true passion.", img: blog1 },
  ];
  const navigate=useNavigate();
  return (
    <div className="blog-page-container">
      {/* SECTION 1: HERO SECTION */}
      <section className="blog-hero">
        <div className="hero-overlay">
          <span className="badge">Pushpa Global Blog</span>
          <h1 className='blog-h'>Career, College & Study Abroad Insights</h1>
          <p className='blog-p'>Explore expert guidance, admission trends, top universities, and practical career advice to help students choose the right path with confidence.</p>
          <div className="hero-btns">
            <button className="btn-white" onClick={() => navigate("/courses")}>My Career Path</button>
            <button className="btn-yellow" onClick={() => navigate("/counselling-registration")}>Book Free Counselling</button>
          </div>
        </div>
      </section>

      {/* SECTION 2: BLOG CARDS GRID */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {blogs.map(blog => (
            <div className="blog-card" key={blog.id}>
              <div className="card-img">
                 <img src={blog.img} alt={blog.title} />
              </div>
              <div className="card-content">
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
                <button className="read-more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: BOTTOM CTA */}
      <section className="bottom-cta-section">
        <div className="cta-card">
          <span className="cta-badge">Need Expert Help?</span>
          <h2 className='blog-h'>Still Confused About Your Career?</h2>
          <p className='blog-p'>Let our experts guide you to the best path</p>
          <button className="btn-yellow" onClick={()=>navigate("/counselling-registration")}>Book Free Counselling</button>
        </div>
      </section>
    </div>
  );
};

export default BlogComponent;