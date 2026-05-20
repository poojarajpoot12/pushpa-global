import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { serviceData } from '../components/serviceData';
import '../css/ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceName } = useParams();
  const data = serviceData[serviceName] || serviceData["career-counselling"];
  const navigate= useNavigate();

  return (
    <div className="service-page-container">
      {/* 1. Hero Section */}
      <section className="sp-hero">
        <div className="sp-hero-content">
          <span className="sp-badge">{data.category}</span>
          <h1>{data.title} <span className="sp-accent">{data.titleAccent}</span></h1>
          <p>{data.description}</p>
          <div className="sp-btn-group">
            <button className="sp-btn-primary" onClick={()=>navigate("/register")}>Connect With Us →</button>
            <button className="sp-btn-outline">Explore Services →</button>
          </div>
        </div>
        <div className="sp-hero-image">
            <img src={data.images.heroImg} alt="Hero illustration" height={350} />
        </div>
      </section>

      {/* 2. Overview & Offerings */}
      <section className="sp-overview">
        <div className="sp-overview-box">
           <div>
             <h3 style={{color: '#2e7d32'}}>OVERVIEW</h3>
             <p>{data.overview}</p>
           </div>
           <button className="sp-btn-primary" onClick={()=>navigate("/about")}>About Us →</button>
        </div>
        
        <h2 style={{textAlign: 'center', margin: '40px 0'}}>••• WHAT WE OFFER •••</h2>
        <div className="sp-offers-grid">
          {data.offers.map((item, idx) => (
            <div key={idx} className="sp-offer-card">
              <div style={{fontSize: '30px'}}>{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Benefits (3 Columns) */}
     <section className="sp-benefit-section">

  <div className="sp-benefit-col bg-green">
    <h3 className='banafits'>
      {data.benefits.titles.first}
    </h3>

    {data.benefits.who.map(li => (
      <p key={li}>✓ {li}</p>
    ))}
  </div>

  <div className="sp-benefit-col bg-blue">
    <h3 className='banafit-cc'>
      {data.benefits.titles.second}
    </h3>

    {data.benefits.whyCounselling.map(li => (
      <p key={li}>✓ {li}</p>
    ))}
  </div>

  <div className="sp-benefit-col bg-orange">
    <h3 className='why-pgs'>
      {data.benefits.titles.third}
    </h3>

    {data.benefits.whyPushpa.map(li => (
      <p key={li}>✓ {li}</p>
    ))}
  </div>

</section>

      {/* 4. Journey (Dark Section) */}
      <section className="sp-journey">
          <div className="sp-journey-img-container">
            <img src={data.images.journeyImg} alt="Our Process" height={250}/>
        </div>
          <div className="sp-journey-content-side">
            <h2>Start Your Career <span className="sp-accent">Journey Today</span></h2>
            <p className="sp-journey-desc">
                {data.journeyDescription}
            </p>

            {/* Steps Grid */}
            <div className="sp-steps-wrapper">
            {data.steps.map((step) => (
                <div key={step.id} className="sp-step-item">
                <div className="sp-icon-circle">
                    {step.icon}
                </div>
                <div className="sp-step-num-title">
                    {step.id}. {step.label}
                </div>
                <p className="sp-step-desc">{step.desc}</p>
                </div>
            ))}
            </div>

            <div className="sp-journey-footer">
                {data.journeyBelowDescription}
            </div>
        </div>
      </section>
    </div>
  );
};
export default ServiceDetail