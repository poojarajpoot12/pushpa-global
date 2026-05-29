import React from 'react';
import '../css/ComparisonChart.css';
import { Globe, GraduationCap, Home, Briefcase, Clock, Star, Target } from 'lucide-react';

const ComparisonChart = () => {
  const countryData = [
    { country: "Ireland", tuition: "₹10 - 25 L", living: "₹70K - 1.1L", work: "20 hrs/wk", psw: "2 Years", pr: "Medium",language:"English", best: "IT, Business, Pharma" },
    { country: "UK", tuition: "₹15 - 35 L", living: "₹80K - 1.5L", work: "20 hrs/wk", psw: "2 Years", pr: "Medium",language:"English", best: "Fast Degree, Prestige" },
    { country: "Canada", tuition: "₹10 - 25 L", living: "₹70K - 1.2L", work: "20 hrs/wk", psw: "Up to 3 Yrs", pr: "High", language:"English", best: "PR + Job" },
    { country: "Australia", tuition: "₹18 - 35 L", living: "₹80K - 1.5L", work: "24 hrs/wk", psw: "2 - 4 Years", pr: "High", language:"English", best: "PR + Lifestyle" },
    { country: "Moldova", tuition: "₹2 - 6 L", living: "₹25K - 50L", work: "Limited", psw: "Limited", pr: "Low", language:"Mixed", best: "Budget MBBS" },
    { country: "France", tuition: "₹3 - 25 L", living: "₹50K - 1.2L", work: "20 hrs/wk", psw: "2 Years", pr: "Medium", language:"Franch Helpful", best: "Business, Fashion" },
    { country: "Japan", tuition: "₹5 - 12 L", living: "₹60K - 1.2L", work: "28 hrs/wk", psw: "Job-based", pr: "Medium", language:"Japanese Needed", best: "Tech Robotics" },
    { country: "Netherlands", tuition: "₹10 - 20 L", living: "₹80K - 1.2L", work: "16 hrs/wk", psw: "1 Years", pr: "Medium", language:"English", best: "Europe + Jobs" },
    { country: "New Zealand", tuition: "₹15 - 25 L", living: "₹80K - 1.3L", work: "20 hrs/wk", psw: "Up to 3 Years", pr: "High", language:"English", best: "PR + Safe" },
    { country: "Germany", tuition: "₹0 - 2 L", living: "₹70K - 1.1L", work: "20 hrs/wk", psw: "18 Months", pr: "Medium", language:"German Needed", best: "Engineering" },
    { country: "USA", tuition: "₹25 - 50 L", living: "₹1 L - 1.8L", work: "Limited", psw: "OPT (1-3 Yrs)", pr: "Low", language:"English", best: "High Salary" },
    { country: "Singapore", tuition: "₹20 - 40 L", living: "₹80K - 1.5L", work: "Limited", psw: "Job-based", pr: "Medium", language:"English", best: "Asia Career" },
    { country: "UAE", tuition: "₹10 - 30 L", living: "₹70K - 1.5L", work: "Limited", psw: "Job-based", pr: "No PR", language:"English", best: "Business Hub" },
  ];

  return (
    <div className="comp-page-wrapper">
      <div className="comp-header">
        <span className="comp-badge">Expert Comparison</span>
        <h1>Study Abroad <span>Comparison Chart</span></h1>
        <p>Compare costs, work rights, and PR chances to find your perfect destination.</p>
      </div>

      <div className="comp-container">
        {/* Table Section */}
        <div className="comp-table-card">
          <div className="comp-table-responsive">
            <table className="comp-main-table">
              <thead>
                <tr>
                  <th><Globe size={16}/> Country</th>
                  <th><GraduationCap size={16}/> Tuition (Year)</th>
                  <th><Home size={16}/> Living (Month)</th>
                  <th><Briefcase size={16}/> Work Rights</th>
                  <th><Clock size={16}/> Post Study Work</th>
                  <th><Star size={16}/> PR Chances</th>
                  <th><Target size={16}/> Language</th>
                  <th><Target size={16}/> Best For</th>
                </tr>
              </thead>
              <tbody>
                {countryData.map((item, index) => (
                  <tr key={index}>
                    <td className="comp-country-name"><strong>{item.country}</strong></td>
                    <td>{item.tuition}</td>
                    <td>{item.living}</td>
                    <td>{item.work}</td>
                    <td>{item.psw}</td>
                    <td>
                      <span className={`comp-pr-status ${item.pr.toLowerCase()}`}>{item.pr}</span>
                    </td>
                    <td>{item.language}</td>
                    <td className="comp-best-for">{item.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Decision Guide Section */}
        <div className="comp-guide-header">
          <h3>Quick Decision Guide</h3>
        </div>
        <div className="comp-guide-grid">
          <div className="guide-box green">
            <h5>Best for PR</h5>
            <p>Canada, Australia, New Zealand</p>
          </div>
          <div className="guide-box orange">
            <h5>Best for Low Cost</h5>
            <p>Germany, France, Moldova</p>
          </div>
          <div className="guide-box blue">
            <h5>Best for High Salary</h5>
            <p>USA, UK, Ireland</p>
          </div>
          <div className="guide-box purple">
            <h5>Europe Exposure</h5>
            <p>Germany, France, Netherlands</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonChart;