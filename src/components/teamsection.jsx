import React from "react";
import "../css/team.css";


import img1 from "../assets/Sukanta Dey.png";
import img2 from "../assets/Swapan Roy.png";
import img3 from "../assets/Pradeep Kumar Halder.png";
import img4 from "../assets/Shaweta Berry.png";
import img5 from "../assets/subtitle-icon1-5.svg";

const teamData = [
  {
    name: "Sukanta Dey",
    role: "Strategy & Operations Head",
    desc: "Plays a key role in strategic planning and organizational decision-making. Oversees operational frameworks, drives process improvements, and supports business growth by aligning institutional goals with execution strategies. Actively contributes to policy development and long-term planning initiatives.",
    img: img1,
  },
  {
    name: "Swapan Roy",
    role: "Founder & CEO",
    desc: "Visionary leader driving the organization’s growth and strategic direction. With extensive experience in the education sector, he focuses on building partnerships, expanding services, and creating a sustainable education ecosystem. ",
    img: img2,
  },
  {
    name: "Pradeep Kumar Halder",
    role: "Admissions, Outreach & Partnerships",
    desc: "Leads student admissions, school outreach, and institutional partnerships across regions. Specializes in building strong relationships with schools, universities, and stakeholders to create impactful educational opportunities and drive student success. ",
    img: img3,
  },
  {
    name: "Shaweta Berry",
    role: "Senior Counsellor – Study Abroad & Career Guidance",
    desc: "Provides expert guidance to students for domestic and international admissions. Specializes in career counselling, university shortlisting, and helping students choose the right academic path aligned with their goals. ",
    img: img4,
  },
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <p className="team-subtitle"><img src={img5} /> Our Team</p>
      <h2 className="team-title">Meet Our Team</h2>
    
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>

            <h3>{member.name}</h3>
            <h4>{member.role}</h4>
            <p>{member.desc}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;