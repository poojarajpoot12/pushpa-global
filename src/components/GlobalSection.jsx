// import React, { useEffect, useState } from "react";
// import "../css/GlobalSection.css";
// import { useNavigate } from "react-router-dom";

// import eventImg from "../assets/event2-3.jpg";

// const statsData = [
//   { number: 10000, label: "Students" },
//   { number: 500, label: "Universities" },
//   { number: 95, label: "Countries" },
//   { number: 25, label: "Years Experience" },
// ];
// const SERVICES = [
//   {
//     icon: "🎓",
//     title: "Career Counselling",
//     desc: "Expert guidance to help students choose the right course & career path.",
//     color: "#3b82f6",
//   },
//   {
//     icon: "🏛️",
//     title: "University Partnerships",
//     desc: "Access to top universities in India and global destinations.",
//     color: "#10b981",
//   },
//   {
//     icon: "✈️",
//     title: "Study Abroad Guidance",
//     desc: "End-to-end support for studying in USA, UK, Canada, Australia, Europe and more.",
//     color: "#f59e0b",
//   },
//   {
//     icon: "🤝",
//     title: "School Partnerships",
//     desc: "Collaborating with schools for career guidance programs, fairs, and educational initiatives.",
//     color: "#ef4444",
//   },
//   {
//     icon: "💼",
//     title: "Career Fairs & Events",
//     desc: "Meet university representatives and explore academic opportunities at curated events.",
//     color: "#743077",
//   },
//   {
//     icon: "🖥️",
//     title: "IT Support & Services",
//     desc: "Cutting-edge technology solutions including interactive panels and digital infrastructure.",
//     color: "#b95910",
//   },
//   {
//     icon: "🏆",
//     title: "Teacher Recruitment",
//     desc: "Connecting skilled educators with institutions seeking qualified teaching professionals.",
//     color: "#f50b42",
//   },
//   {
//     icon: "📚",
//     title: "Workshops & Seminars",
//     desc: "Structured learning experiences for students, educators, and institutional partners.",
//     color: "#5b4f4f",
//   },
// ];

// // 🔥 Number Counter Component
// const Counter = ({ target }) => {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     let start = 0;
//     const speed = 20;
//     const increment = target / 100;

//     const update = () => {
//       start += increment;
//       if (start < target) {
//         setCount(Math.ceil(start));
//         setTimeout(update, speed);
//       } else {
//         setCount(target);
//       }
//     };

//     update();
//   }, [target]);

//   return <h2 className="globar-h">{count}+</h2>;
// };

// function GlobalSection() {
//   const navigate = useNavigate();

  
//   return (
//     <>
//     <section className="global-section">

//       {/* 🔢 STATS */}
//       <div className="stats">
//         {statsData.map((item, i) => (
//           <div className="stat-box" key={i}>
//             <Counter target={item.number} />
//             <p>{item.label}</p>
//           </div>
//         ))}
//       </div>


//     </section>
//     {/* SERVICES */}
//     <section id="services" className="services-section">
//       <div className="container">

//         <div className="services-header">
//           <span className="pill">What We Offer</span>
//           <h2>Our <span className="gtext">Services</span></h2>
//           <p>
//             Comprehensive education consulting services tailored to students,
//             institutions, and educators.
//           </p>
//         </div>

//         <div className="services-grid">
//           {SERVICES.map((s, i) => (
//             <div
//               className="service-card"
//               key={i}
//               style={{ "--c": s.color }}
//             >
//               <div className="service-icon">{s.icon}</div>

//               <h3 className="service-card-h">{s.title}</h3>

//               <p>{s.desc}</p>

//               <span className="service-link">Learn more →</span>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//     <div className="services-header">
//       <span className="pill">Featured Events</span>
//         <h2>Our  Upcoming <span> Educational Events</span></h2>
          
//     </div>
//     <div className="event-card">

//       {/* LEFT IMAGE */}
//       <div className="event-img">
//         <img src={eventImg} alt="event" />
//       </div>

//       {/* CENTER CONTENT */}
//       <div className="event-content">
//         <span className="event-date">April, 2026</span>

//         <h3 >Shri P K Das Memorial Best Teachers Award 2026</h3>

//         <p className="event-location">
//           📍 Darjeeling, Siliguri & Sikkim
//         </p>

//         <p className="event-time">
//           ⏰ 11:00 am – 4:00 pm
//         </p>
//           <h4 className="event-card-h">Hosted by Organizing Committee</h4>
//         <p>
//           Education Leadership Panel (NGI)
//         </p>
//       </div>

//       {/* RIGHT BUTTON */}
//       <div className="event-action">
//         <button onClick={() => navigate("/register")}>Join With Us →</button>
//       </div>

//     </div>
// </>
//   );
// }

// export default GlobalSection;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/GlobalSection.css";
import eventImg from "../assets/event2-3.jpg";

const statsData = [
  { number: 10000, label: "Students" },
  { number: 500, label: "Universities" },
  { number: 95, label: "Countries" },
  { number: 25, label: "Years Experience" },
];

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const speed = 20;
    const increment = target / 100;
    const update = () => {
      start += increment;
      if (start < target) {
        setCount(Math.ceil(start));
        setTimeout(update, speed);
      } else {
        setCount(target);
      }
    };
    update();
  }, [target]);

  return <h2 className="globar-h">{count}+</h2>;
};

function GlobalSection() {
  const navigate = useNavigate();

  return (
    <div className="global-wrapper">
      {/* 🔢 STATS SECTION */}
      <section className="global-section">
        <div className="stats">
          {statsData.map((item, i) => (
            <div className="stat-box" key={i}>
              <Counter target={item.number} />
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}

export default GlobalSection;