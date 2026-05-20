import React, { useState } from 'react';
import '../css/LegalPolicies.css';

const LegalPolicies = () => {
  // Default section 'terms' rakha hai
  const [activeSection, setActiveSection] = useState('terms');

  // Ab humein scroll listener ki zaroorat nahi hai kyunki sections hide ho rahe hain
  const handleTabChange = (id) => {
    setActiveSection(id);
    // Jab naya section load ho, toh page automatically top par scroll ho jaye
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="legal-page">
      {/* Header Section */}
      <header className="legal-hero">
        <div className="legal-container">
          <span className="legal-badge">Compliance</span>
          <h1>Pushpa Global Solutions <span>Legal Policies</span></h1>
          <p>Compliance & User Agreement Framework</p>
        </div>
      </header>

      <div className="legal-wrapper">
        <div className="legal-container flex-layout">
          
          {/* Sticky Sidebar */}
          <aside className="legal-sidebar">
            <div className="sidebar-inner">
              <h3>Legal Sections</h3>
              <button 
                className={activeSection === 'terms' ? 'active' : ''} 
                onClick={() => handleTabChange('terms')}
              >
                Terms & Conditions
              </button>
              <button 
                className={activeSection === 'privacy' ? 'active' : ''} 
                onClick={() => handleTabChange('privacy')}
              >
                Privacy Policy
              </button>
              <button 
                className={activeSection === 'disclaimer' ? 'active' : ''} 
                onClick={() => handleTabChange('disclaimer')}
              >
                Disclaimer
              </button>
            </div>
          </aside>

          {/* Content Area - Yahan Logic Change Hua Hai */}
          <main className="legal-content">
            
            {/* TERMS SECTION - Only shows if activeSection is 'terms' */}
            {activeSection === 'terms' && (
              <section id="terms" className="legal-card">
                <h2>Terms & Conditions</h2>
                <div className="legal-block alert-box">
                  <h3>1. Legal Agreement</h3>
                  <p>By accessing this website, submitting personal data, or availing services of Pushpa Global Solutions, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms.</p>
                </div>

                <div className="legal-block alert-box">
                  <h3>2. Scope of Services</h3>
                  <ul className="modern-check-list">
                    <li>Career counselling and academic advisory</li>
                    <li>Study abroad consultancy (multi-country support)</li>
                    <li>University admissions and documentation assistance</li>
                    <li>Scholarship and financial guidance</li>
                    <li>Career fairs and educational events</li>
                  </ul>
                </div>

                <div className="legal-block alert-box">
                  <h3>3. Nature of Engagement</h3>
                  <p>All services provided are advisory, consultative, and facilitative in nature and do not constitute any contractual guarantee of outcomes.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>4. No Guarantee Clause</h3>
                  <p>Pushpa Global Solutions explicitly disclaims any assurance of:</p>
                  <ul className="modern-check-list">
                    <li>Admission to educational institutions</li>
                    <li>Visa approval or immigration success</li>
                    <li>Scholarship allocation</li>
                    <li>Employment or internship opportunities</li>
                  </ul>
                </div>
                <div className="legal-block alert-box">
                  <h3>5. User Obligations</h3>
                  <p>Users must provide accurate, complete, and verifiable information. Any false representation may result in immediate termination of services.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>6. Financial Terms</h3>
                  <p>All service fees are non-refundable unless explicitly stated. External costs such as university fees, visa charges, and examination fees are independent.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>7. Limitation of Liability</h3>
                  <p>The Company shall not be liable for any direct, indirect, incidental, or consequential damages arising from reliance on our services.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>8. Intellectual Property</h3>
                  <p>All content is proprietary and protected under applicable intellectual property laws.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>9. Governing Law</h3>
                  <p>These Terms shall be governed by the laws of India, with exclusive jurisdiction vested in courts located in New Delhi.</p>
                </div>
              </section>
            )}

            {/* PRIVACY SECTION - Only shows if activeSection is 'privacy' */}
            {activeSection === 'privacy' && (
              <section id="privacy" className="legal-card">
                <h2>Privacy Policy</h2>
                <div className="legal-block alert-box">
                  <h3>1. Data Collection</h3>
                  <p>We collect personal, academic, and technical data required to deliver services efficiently.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>2. Purpose of Processing</h3>
                  <ul className="modern-check-list">
                    <li>Career counselling and advisory</li>
                    <li>University application processing</li>
                    <li>Communication and updates</li>
                    <li>Event invitations and outreach</li>
                  </ul>
                </div>
                <div className="legal-block alert-box">
                  <h3>3. Data Sharing</h3>
                  <p>Data may be shared with partner universities and institutions strictly for educational purposes.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>4. Data Security</h3>
                  <p>We implement administrative and technical safeguards; however, no system is completely secure.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>5. User Rights</h3>
                  <ul className="modern-check-list">
                    <li>Access to personal data</li>
                    <li>Correction or deletion</li>
                    <li>Withdrawal of consent</li>
                  </ul>
                </div>
                <div className="legal-block alert-box">
                  <h3>6. Cookies</h3>
                  <p>Cookies may be used to enhance user experience and analytics.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>7. Consent</h3>
                  <p>Use of this website constitutes acceptance of this Privacy Policy.</p>
                </div>
              </section>
            )}

            {/* DISCLAIMER SECTION - Only shows if activeSection is 'disclaimer' */}
            {activeSection === 'disclaimer' && (
              <section id="disclaimer" className="legal-card">
                <h2>Disclaimer</h2>
                <div className="legal-block alert-box">
                  <h3>1. General Disclaimer</h3>
                  <p>Pushpa Global Solutions provides educational consultancy and advisory services only. All outcomes are determined by external authorities.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>2. No Guarantees</h3>
                  <ul className="modern-check-list">
                    <li>No admission guarantee</li>
                    <li>No visa guarantee</li>
                    <li>No scholarship guarantee</li>
                    <li>No employment guarantee</li>
                  </ul>
                </div>
                <div className="legal-block alert-box">
                  <h3>3. External Decisions</h3>
                  <p>All outcomes are determined by universities, institutions, and government authorities.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>4. Information Accuracy</h3>
                  <p>While we strive for accuracy, information may change without notice.</p>
                </div>
                <div className="legal-block alert-box">
                  <h3>5. Liability</h3>
                  <p>We shall not be liable for any losses or decisions made by users.</p>
                </div>
              </section>
            )}

          </main>
        </div>
      </div>

      <footer className="legal-footer">
        © Pushpa Global Solutions | Okhla Phase 1, New Delhi – 110020
      </footer>
    </div>
  );
};

export default LegalPolicies;