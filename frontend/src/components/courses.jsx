import React, { useState } from 'react';
import { 
  Rocket, Brain, Banknote, Clock, Target, Users, 
  MessageCircle, Phone, User, Globe, Briefcase, GraduationCap 
} from 'lucide-react';
import '../css/careerSelector.css';
import { useNavigate } from 'react-router-dom';

const careerData = {
  "IT": {
    overview: {
      summary: "Tech & software careers",
      skills: "Coding, Logic",
      salary: "₹5–30 LPA",
      duration: "3–4 years",
      scope: "AI, Software",
      recruiters: "Google, Amazon"
    },
    courses: {
      domestic: { course: "B.Tech / BCA", colleges: "IIT, NIT, BITS", exams: "JEE, CUET" },
      international: { course: "BS in CS", colleges: "MIT, Stanford", exams: "SAT, IELTS" },
      opportunities: ["Software Engineer", "Cloud Architect", "Cybersecurity Analyst"]
    }
  },
  "Science": {
    overview: {
      summary: "Engineering & Medical careers",
      skills: "Analytical, Math",
      salary: "₹4–25 LPA",
      duration: "4–5 years",
      scope: "Robotics, Healthcare",
      recruiters: "ISRO, Tesla, AIIMS"
    },
    courses: {
      domestic: { course: "B.Tech / MBBS", colleges: "IIT, AIIMS", exams: "JEE, NEET" },
      international: { course: "Pre-Med / B.Eng", colleges: "Oxford, Harvard", exams: "MCAT, SAT" },
      opportunities: ["Doctor", "Research Scientist", "Aerospace Engineer"]
    }
  },
  "Commerce": {
    overview: {
      summary: "Finance & Management",
      skills: "Finance, Accounts",
      salary: "₹3–18 LPA",
      duration: "3 years",
      scope: "Investment Banking",
      recruiters: "EY, Deloitte, KPMG"
    },
    courses: {
      domestic: { course: "B.Com / BBA / CA", colleges: "SRCC, IIM", exams: "CUET, CAT" },
      international: { course: "BSc Finance", colleges: "LSE, Wharton", exams: "GMAT, SAT" },
      opportunities: ["Investment Banker", "Chartered Accountant", "Data Analyst"]
    }
  },
   "Arts": {
    overview: {
      summary: "Humanities & creative careers",
      skills: "Creativity, Writing",
      salary: "₹3–12 LPA",
      duration: "3 years",
      scope: "Media, psychology",
      recruiters: "Media, NGO"
    },
    courses: {
      domestic: { course: "BA", colleges: "DU", exams: "CUET" },
      international: { course: "Liberal Arts", colleges: "Yale", exams: " SAT" },
      opportunities: ["Journalist", "Psychologist"]
    }
  },
  "Design": {
    overview: {
      summary: "Creative design careers",
      skills: "Creativity, Design Thinking",
      salary: "₹4–20 LPA",
      duration: "3–4 years",
      scope: "UI/UX, fashion",
      recruiters: "Adobe, Google"
    },
    courses: {
      domestic: { course: "B.Des", colleges: "NIFT,NID", exams: "NIFT, NID" },
      international: { course: "Design", colleges: "Parsons", exams: " SAT, Portfolio" },
      opportunities: ["Designer"]
    }
  },
  "Law": {
    overview: {
      summary: "Legal profession",
      skills: "Argument, Research",
      salary: "₹5–25 LPA",
      duration: "5 years",
      scope: "Corporate law",
      recruiters: "Law Firms"
    },
    courses: {
      domestic: { course: "BA LLB", colleges: "NLU", exams: "CLAT" },
      international: { course: "LLB", colleges: "Oxford", exams: " LNAT" },
      opportunities: ["Lawyer"]
    }
  },
  "Hospitality": {
    overview: {
      summary: "Hotel & tourism industry",
      skills: "Communication, Service",
      salary: "₹3–12 LPA",
      duration: "3–4 years",
      scope: "Global tourism",
      recruiters: "Hotels"
    },
    courses: {
      domestic: { course: "Hotel Mgmt", colleges: "IHM", exams: "NCHM" },
      international: { course: "Hospitality", colleges: "Les Roches", exams: " IELTS" },
      opportunities: ["Hotel Manager"]
    }
  },
  "Media": {
    overview: {
      summary: "Media & communication",
      skills: "Communication, Creativity",
      salary: "₹3–15 LPA",
      duration: "3 years",
      scope: "Digital media boom",
      recruiters: "OTT, News"
    },
    courses: {
      domestic: { course: "BJMC", colleges: "IIMC", exams: "CUET" },
      international: { course: "Film", colleges: "NYFA", exams: " SAT" },
      opportunities: ["Journalist, Content Creator"]
    }
  },
  "Defence": {
    overview: {
      summary: "Army, Navy, Air Force",
      skills: "Discipline, Leadership",
      salary: "₹6–15 LPA",
      duration: "Training",
      scope: "Government career",
      recruiters: "Army"
    },
    courses: {
      domestic: { course: "NDA", colleges: "NDA", exams: "NDA" },
      international: { course: "Defense", colleges: "West Point", exams: " SAT" },
      opportunities: ["Officer"]
    }
  },
  "Education": {
    overview: {
      summary: "Teaching careers",
      skills: "Teaching, Communication",
      salary: "₹3–10 LPA",
      duration: "3–4 years",
      scope: "Growing education sector",
      recruiters: "Schools"
    },
    courses: {
      domestic: { course: "B.Ed", colleges: "DU", exams: "CUET" },
      international: { course: "Education", colleges: "Cambridge", exams: " IELTS" },
      opportunities: ["Teacher, Professor"]
    }
  },
  // Note: Add similar structures for Arts, Design, Law, etc.
};

const CareerSelector = () => {
  const [activeTab, setActiveTab] = useState("Science");
  const [view, setView] = useState("overview"); // 'overview' or 'courses'
  const data = careerData[activeTab] || careerData["Science"];
  const navigate = useNavigate();

  return (
    <div className="modern-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="icon-badge">🎓</div>
        <h1>Smart Career <span>Stream Selector</span></h1>
        <p>Choose your path with AI-driven insights</p>
      </div>

      {/* View Toggle (Overview vs Courses) */}
      <div className="view-toggle-container">
        <div className="view-toggle">
          <button 
            className={`toggle-btn ${view === 'overview' ? 'active' : ''}`} 
            onClick={() => setView('overview')}
          >
            Overview
          </button>
          <button 
            className={`toggle-btn ${view === 'courses' ? 'active' : ''}`} 
            onClick={() => setView('courses')}
          >
            Courses
          </button>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="glass-card main-ui">
        {/* Category Tabs */}
        <div className="tabs-grid">
          {['Science', 'Commerce', 'Arts', 'Design', 'Law', 'Hospitality', 'IT', 'Media', 'Defence', 'Education'].map((tab) => (
            <button 
              key={tab}
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Switching Logic */}
        {view === 'overview' ? (
          /* --- OVERVIEW TAB --- */
          <div className="info-display-grid animate-in">
            <div className="info-card">
              <div className="info-icon"><Rocket size={20}/></div>
              <div><label>Overview</label><p>{data.overview.summary}</p></div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Brain size={20}/></div>
              <div><label>Skills</label><p>{data.overview.skills}</p></div>
            </div>
            <div className="info-card highlight">
              <div className="info-icon"><Banknote size={20}/></div>
              <div><label>Salary Package</label><p>{data.overview.salary}</p></div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Clock size={20}/></div>
              <div><label>Course Duration</label><p>{data.overview.duration}</p></div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Target size={20}/></div>
              <div><label>Future Scope</label><p>{data.overview.scope}</p></div>
            </div>
            <div className="info-card">
              <div className="info-icon"><Users size={20}/></div>
              <div><label>Top Recruiters</label><p>{data.overview.recruiters}</p></div>
            </div>
          </div>
        ) : (
          /* --- COURSES TAB --- */
          /* --- COURSES TAB (Attractive Card Layout) --- */
        <div className="modern-courses-grid animate-in">
          {/* Domestic Card */}
          <div className="course-gradient-card">
            <div className="card-badge">Local Path</div>
            <div className="card-header-icon"><GraduationCap size={32} /></div>
            <h3>Domestic Opportunities</h3>
            <div className="course-details">
              <div className="detail-item">
                <label>Primary Course</label>
                <p>{data.courses.domestic.course}</p>
              </div>
              <div className="detail-item">
                <label>Top Colleges</label>
                <p>{data.courses.domestic.colleges}</p>
              </div>
              <div className="detail-item highlight-border">
                <label>Entrance Exams</label>
                <p>{data.courses.domestic.exams}</p>
              </div>
            </div>
          </div>

          {/* International Card */}
          <div className="course-gradient-card intl-card">
            <div className="card-badge">Global Path</div>
            <div className="card-header-icon"><Globe size={32} /></div>
            <h3>International Paths</h3>
            <div className="course-details">
              <div className="detail-item">
                <label>Global Degree</label>
                <p>{data.courses.international.course}</p>
              </div>
              <div className="detail-item">
                <label>Ivy League & Others</label>
                <p>{data.courses.international.colleges}</p>
              </div>
              <div className="detail-item highlight-border-intl">
                <label>Required Exams</label>
                <p>{data.courses.international.exams}</p>
              </div>
            </div>
          </div>

          {/* Career Opportunities - Full Width */}
          <div className="career-path-box">
            <div className="path-title">
              <Briefcase size={22} />
              <h3>Future Career Roles</h3>
            </div>
            <div className="modern-tag-cloud">
              {data.courses.opportunities.map((job, index) => (
                <div key={index} className="floating-tag">
                  <span className="dot"></span> {job}
                </div>
              ))}
            </div>
          </div>
        </div>
        )}

        {/* Action Buttons */}
        <div className="action-bar">
          <button className="btn-counseling" onClick={()=>navigate("/counselling-registration")}>✨ Get Free Counseling</button>
          <button className="btn-whatsapp"><MessageCircle size={18}/> WhatsApp</button>
        </div>
      </div>

      {/* Guidance Form Section */}
      <div className="glass-card form-section">
        <div className="form-header">
          <div className="form-icon">📋</div>
          <h2>Get Personalized Guidance</h2>
        </div>
        <form className="modern-form">
          <div className="input-group">
            <User className="input-icon" size={18}/>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="input-group">
            <Target className="input-icon" size={18}/>
            <input type="text" placeholder="Current Class" />
          </div>
          <div className="input-group">
            <Phone className="input-icon" size={18}/>
            <input type="tel" placeholder="Phone Number" />
          </div>
          <button type="submit" className="btn-submit">Submit Details</button>
        </form>
      </div>
    </div>
  );
};

export default CareerSelector;