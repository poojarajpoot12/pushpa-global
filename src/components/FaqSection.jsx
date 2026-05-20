import React, { useState } from "react";
import "../css/faq.css";

import leftImg from "../assets/faq_2.jpg";
import book from "../assets/subtitle-icon1-5.svg";
import faqimg from "../assets/about_shape1_1.png";

const faqData = [
  {
    question:
      "How does Pushpa Global Solutions help students choose the right course?",
    answer:
      "Yes. We help students explore study opportunities in top destinations such as the USA, UK, Canada, Australia, Germany, Ireland, and other countries. Our team supports students throughout the process, including university selection, application guidance, and documentation support.",
  },
  {
    question:
      "Can Pushpa Global Solutions help with study abroad opportunities?",
    answer:
      "Yes. We help students explore study opportunities in top destinations such as the USA, UK, Canada, Australia, Germany, Ireland, and other countries. Our team supports students throughout the process, including university selection, application guidance, and documentation support.",
  },
  {
    question:
      "What services do you provide for universities and institutions?",
    answer:
      "We collaborate with universities and institutions by offering student outreach programs, university partnerships, career fairs, and recruitment support. Our goal is to connect institutions with talented students across different regions.",
  },
  {
    question: "Do you organize career fairs or education events?",
    answer:
      "Yes. Pushpa Global Solutions organizes career fairs, university interaction sessions, and education events where students can meet university representatives, learn about courses, and explore global education opportunities.",
  },
  {
    question: "Is career counselling available for students after Class 10 or Class 12?",
    answer:
      "Yes. Our counselling services are designed especially for students after Class 10 and Class 12, helping them understand different career paths, course options, and future opportunities.",
  },
  {
    question: "How can I book a counselling session with Pushpa Global Solutions?",
    answer:
      "Students can easily book a counselling session through our website, contact form, or by contacting our team directly. Our advisors will guide students through the next steps of their academic journey.",
  },
  {
    question: "Do you provide scholarship guidance?",
    answer: 
      "Yes. We assist students in identifying scholarship opportunities and financial aid options offered by universities and institutions to support their higher education plans.",
  },
  {
    question: "How can schools or institutions collaborate with Pushpa Global Solutions?",
    answer: 
      "Schools and institutions can partner with us for career guidance programs, education fairs, institutional partnerships, and teacher recruitment initiatives.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-wrapper">
      
      {/* LEFT IMAGE */}
      <div
        className="faq-left"
        style={{ backgroundImage: `url(${leftImg})` }}
      ></div>
      <div className="faq-strip">

      </div>
      {/* RIGHT CONTENT */}
      <div className="faq-right">
        <p className="faq-subtitle">
          <img src={book} alt="" /> Faq’s
        </p>

        <h2 className="faq-h">Frequently Asked Questions?</h2>

        <img src={faqimg} className="overlay-img" alt="" />

        <div className="faq-box">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              {/* QUESTION */}
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{item.question}</span>

                <span className="icon">
                  {activeIndex === index ? "▼" : "▶"}
                </span>
              </div>

              {/* ANSWER */}
              <div
                className={`faq-answer ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;