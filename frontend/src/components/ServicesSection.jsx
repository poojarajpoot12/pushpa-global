import React from "react";

const SERVICES = [
  { icon: "🎓", title: "Career Counselling", desc: "Expert guidance to help students choose the right course & career path.", color: "#3b82f6" },
  { icon: "🏛️", title: "University Partnerships", desc: "Access to top universities in India and global destinations.", color: "#10b981" },
  { icon: "✈️", title: "Study Abroad Guidance", desc: "End-to-end support for studying in USA, UK, Canada, Australia, Europe and more.", color: "#f59e0b" },
  { icon: "🤝", title: "School Partnerships", desc: "Collaborating with schools for career guidance programs, fairs, and educational initiatives.", color: "#ef4444" },
  { icon: "💼", title: "Career Fairs & Events", desc: "Meet university representatives and explore academic opportunities at curated events.", color: "#743077" },
  { icon: "🖥️", title: "IT Support & Services", desc: "Cutting-edge technology solutions including interactive panels and digital infrastructure.", color: "#b95910" },
  { icon: "🏆", title: "Teacher Recruitment", desc: "Connecting skilled educators with institutions seeking qualified teaching professionals.", color: "#f50b42" },
  { icon: "📚", title: "Workshops & Seminars", desc: "Structured learning experiences for students, educators, and institutional partners.", color: "#5b4f4f" },
];

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="services-header">
          <span className="pill">What We Offer</span>
          <h2>Our <span className="gtext">Services</span></h2>
          <p>
            Comprehensive education consulting services tailored to students,
            institutions, and educators.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              className="service-card"
              key={i}
              style={{ "--c": s.color }}
            >
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-card-h">{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-link">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;