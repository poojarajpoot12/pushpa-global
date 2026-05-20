// import React from "react";
// import "../css/counselling.css";
// import bgImg from "../assets/cta-card-bg3.jpg"; 
// import book from "../assets/subtitle-icon1-5.svg";
// import {  useNavigate } from "react-router-dom";


// const CounsellingSection = () => {
//   const navigate = useNavigate();
//   return (
//     <section
//       className="counselling-section"
//       style={{ backgroundImage: `url(${bgImg})` }}
//     >
//       <div className="overlay"></div>

//       <div className="content">
//         <p className="subtitle"><img src={book} alt="counselling"/> Book your Counselling Session</p>

//         <h1 className="couselling-h">
//           Call To Book Your First Counselling <br />
//           Session With Our Expert
//         </h1>

//         <h2 className="phone">(+91) 8287-543-429</h2>

//         <button className="btn" onClick={() => navigate("/register")}>
//           REGISTER NOW →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default CounsellingSection;

import React from "react";
import "../css/counselling.css";
import bgImg from "../assets/cta-card-bg3.jpg"; 
import book from "../assets/subtitle-icon1-5.svg";
import { useNavigate } from "react-router-dom";

const DESTINATIONS = [
  "Australia", "Canada",  "France", "Germany", "Ireland", "Japan", "Moldova", "New-Zealand", "Netherlands", "Singapore", "UK", "USA","UAE"
];

const CounsellingSection = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* DESTINATIONS (Moved from PopularCTA) */}
      <section className="dest-section">
        <div className="container">
          <div className="heading">
            <span className="pill">Study Abroad</span>
            <h2 className="couselling-h">Popular <span>Destinations</span></h2>
          </div>

          <div className="destinations">
            {DESTINATIONS.map((d, i) => (
              <button key={i} className="dest-btn">
                🌍 {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COUNSELLING MAIN */}
      <section
        className="counselling-section"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="overlay"></div>

        <div className="content">
          <p className="subtitle"><img src={book} alt="counselling"/> Book your Counselling Session</p>

          <h1 className="couselling-h">
            Call To Book Your First Counselling <br />
            Session With Our Expert
          </h1>

          <h2 className="phone">(+91) 8287-543-429</h2>

          <button className="btn" onClick={() => navigate("/register")}>
            REGISTER NOW →
          </button>
        </div>
      </section>
    </>
  );
};

export default CounsellingSection;