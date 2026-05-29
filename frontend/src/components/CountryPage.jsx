import React from 'react';
import '../css/CountryPage.css';
import { countryData } from './countryData';
import { useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import {
  BookOpen, GraduationCap, Globe, ArrowRight, DollarSign,
  Plane, MapPin, Home, FileText, ShieldPlus, Sun, Target, User
} from "lucide-react";

const StudyAbroad = () => {
  const { countryName } = useParams();
  const [isCityOpen, setIsCityOpen] = useState(false);
  const navigate = useNavigate();

  const currentCountry = countryName || "australia";
  const data = countryData[currentCountry.toLowerCase()];

  if (!data) {
    return <div className="error-msg">Country Data Not Found</div>;
  }

  const iconMap = {
    Plane, GraduationCap, Globe, MapPin, Home,
    FileText, ShieldPlus, Sun, Target
  };

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section
        className="heroStudyAbroad"
        style={{
          backgroundImage: `linear-gradient(rgba(55, 54, 54, 0.6), rgba(247, 242, 242, 0.6)), url(${data.heroBg})`,
          height: "600px",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="hero-content">
          <h1 className='studyabroadheading'>
            STUDY IN <br />
            <span>{data.title.toUpperCase()}</span>
          </h1>
          <p className="hero-subtitle">{data.description}</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate("/counselling-registration")}>Book Free Counselling →</button>
            <button className="btn-primary" onClick={()=> navigate("/comparison-chart")}>View Comparison Chart</button>
          </div>
        </div>
        <div className="hero-image-card">
          <img src={data.heroImage} alt={data.title} />
        </div>
      </section>

      {/* Info Grid (Top Row) */}
      <div className="info-grid">
        {data.infoCards && data.infoCards.map((card, index) => {
          const Icon = iconMap[card.icon] || BookOpen;
          const ListIcon = iconMap[card.listIcon];
          
          return (
            <div className="info-card" key={index}>
              <div className="card-icon" style={{ backgroundColor: `${card.color}20`, padding: "10px", borderRadius: "10px", display: "inline-flex" }}>
                <Icon size={22} color={card.color} />
              </div>
              <h3>{card.title}</h3>
              <p className="card-sub">{card.subtitle}</p>

              {card.sections ? (
                card.sections.map((section, idx) => {
                  // ONLY change: Checking for 'companies' to apply 2-column grid
                  const isCompanies = section.heading.toLowerCase().includes("companies");
                  
                  return (
                    <div key={idx} style={{ marginBottom: "8px" }}>
                      <h6 className='cardheading'>{section.heading}</h6>
                      <ul className={isCompanies ? "company-grid-list" : "card-list"}>
                        {section.items.map((item, i) => (
                          <li key={i} className={isCompanies ? "company-btn-item" : ""}>
                            {!isCompanies && ListIcon && <ListIcon size={14} color={card.color} style={{ marginRight: '6px' }} />}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })
              ) : (
                <ul className="card-list">
                  {card.items && card.items.map((item, i) => (
                    <li key={i}>
                      {ListIcon && <ListIcon size={14} color={card.color} style={{ marginRight: '6px' }} />}
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              {card.footer && <p className="card-footer-msg">{card.footer}</p>}
            </div>
          );
        })}
      </div>

      {/* Middle Grid */}
      <div className="extra-info-grid">
        {data.extraInfo && data.extraInfo.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Globe;
          return (
            <div className="info-card extra-card" key={index}>
              <div className="card-icon circle-icon" style={{ backgroundColor: `${card.color}15` }}>
                <IconComponent size={20} color={card.color} />
              </div>
              <h3>{card.title}</h3>
              <p className="card-sub">{card.subtitle}</p>
              {card.highlightText && <div className="highlight-blue">{card.highlightText}</div>}
              <ul className={`card-list ${card.useCheck ? 'check-list' : ''}`}>
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {card.footer && <p className="card-footer-msg center-footer">{card.footer}</p>}
            </div>
          );
        })}
      </div>

      {/* Bottom Row Grid */}
      <div className="extra-info-grid bottom-row-grid">
        {data.bottomRow && data.bottomRow.map((card, index) => {
          const IconComponent = iconMap[card.icon] || Globe;
          return (
            <div className="info-card bottom-card" key={index}>
              <div className="card-icon circle-icon" style={{ backgroundColor: `${card.color}15` }}>
                <IconComponent size={20} color={card.color} />
              </div>
              <h3>{card.title}</h3>
              {card.subtitle && <p className="card-sub">{card.subtitle}</p>}

              {card.steps && (
                <div className="steps-list">
                  {card.steps.map((step, sIdx) => (
                    <div key={sIdx} className="step-item">
                      <span className="step-num">{sIdx + 1}</span>
                      <span className="step-text">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {card.heading && <h6 className="inner-heading">{card.heading}</h6>}

              {card.checkItems && (
                <ul className="check-list-green">
                  {card.checkItems.map((item, iIdx) => (
                    <li key={iIdx}>{item}</li>
                  ))}
                </ul>
              )}

              {card.rentInfo && (
                <div className="rent-box">
                  <p className="rent-label">Rent:</p>
                  <p className="rent-value">{card.rentInfo}</p>
                </div>
              )}

              {card.footer && (
                <p className="bottom-footer-msg" style={{ color: card.footerColor }}>
                  {card.footer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Final CTA & FAQ (Same as your original code) */}
      <section className="countrycta-section">
        <div className="countrycta-container">
          <div className="countrycta-text-wrapper">
            <h2>Confused if {data.title} is right for you?</h2>
            <p>Get expert counselling based on your profile.</p>
            <button className="btn-counselling" onClick={() => navigate("/counselling-registration")}>
              Book Free Counselling Now
              <span className="btn-icon">→ <User size={20} /></span>
            </button>
          </div>
          <div className="countrycta-image-3d">
            <img className='couselling-img' src="https://th.bing.com/th/id/OIP.IQqQ7iDihXvbS06JyLVD6AHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Counselling Illustration" />
          </div>
        </div>
      </section>

      <section className="faq-quick-section">
        <div className="faq-external-header">
          <h2 className='common-qa'>Common Questions <span>(Solved)</span></h2>
        </div>
        <div className="faq-main-card">
          <div className="faq-grid-internal">
            {data.quickFaqs && data.quickFaqs.map((item, index) => (
              <div className="faq-item-row" key={index}>
                <div className="faq-question-side">
                  <span className="q-bullet">?</span>
                  <span className="q-text">{item.q}</span>
                </div>
                <div className="faq-answer-side">
                  <span className={`a-badge ${item.a === "Yes" ? "is-yes" : "is-other"}`}>
                    {item.a === "Yes" ? "✓ Yes" : item.a}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default StudyAbroad;