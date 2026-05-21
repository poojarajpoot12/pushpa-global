import { useState, useEffect } from "react";
import "../css/header.css";
import logo from "../assets/PUSHPA-FINAL-LOGO.png";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, BookOpen, Users, Calendar, UniversityIcon, University } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(null); 
  const [subDropdown, setSubDropdown] = useState(null); 
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Updated Navigation Logic
  const handleNavigation = (label, parentLabel = null) => {
    setMenuOpen(false);
    setDropdown(null);
    setSubDropdown(null);
    
    // Sabhi paths ko lowercase aur dash-separated banane ke liye common logic
    const dynamicPath = label.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-');

    if (parentLabel === "Study Abroad") {
      navigate(`/study-abroad/${dynamicPath}`);
    } else if (parentLabel === "Services") {
      // Yeh aapke /services/:serviceName route par bhejega
      navigate(`/services/${dynamicPath}`);
    } else {
      const routes = {
        "Home": "/",
        "About Us": "/about",
        "Courses": "/courses",
        "Blog": "/blog",
        "Contact": "/register",
        "Register Now": "/register"
      };
      if (routes[label]) navigate(routes[label]);
    }
    
    window.scrollTo(0, 0); // Click ke baad page top par le jaye
  };

  const toggleDropdown = (label) => {
    if (dropdown === label) {
      setDropdown(null);
      setSubDropdown(null);
    } else {
      setDropdown(label);
      setSubDropdown(null);
    }
  };

  const navLinks = [
    { label: "Home" },
    {
      label: "Study Abroad",
      children: ["Australia", "Canada", "France", "Germany", "Ireland", "Japan", "Moldova", "NewZealand", "Netherlands", "Singapore", "UK", "USA", "UAE"]
    },
    { label: "About Us" },
    {
      label: "Services",
      isMultiLevel: true,
      categories: [
        {
          name: "Career Counselling",
          icon: <BookOpen size={16} />,
          items: ["Career Counselling", "Student Counselling", "Study Abroad Guidance", "University Partnerships", "School Partnerships", "NIFT NID UCEED Coaching"]
        },
        {
          name: "Teacher Recruitment",
          icon: <Users size={16} />,
          items: ["Teacher Recruitment", "IT Support Services", "Interactive Panels"]
        },
        {
          name: "Events & Seminars",
          icon: <Calendar size={16} />,
          items: ["Career Fairs", "Workshops  Seminars", "Education Events"]
        }
      ]
    },
    { label: "Courses" },
    {
      label: "Our Parnters",
      isMultiLevel: true,
      categories: [
        {
          name: "Domastic",
          icon: <University size={16} />,
          items: ["Career Counselling", "Student Counselling", "Study Abroad Guidance", "University Partnerships", "School Partnerships", "NIFT NID UCEED Coaching"]
        },
        {
          name: "Abroad",
          icon: <users size={16} />,
          items: ["Teacher Recruitment", "IT Support Services", "Interactive Panels"]
        },
        {
          name: "Events & Seminars",
          icon: <Calendar size={16} />,
          items: ["Career Fairs", "Workshops  Seminars", "Education Events"]
        }
      ]
    },
    { label: "Blog" },
    { label: "Contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo" onClick={() => navigate("/")} style={{cursor: 'pointer'}}>
          <img src={logo} alt="logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label} className={dropdown === link.label ? "active" : ""}>
              <div 
                className="nav-item-header" 
                onClick={() => (link.children || link.isMultiLevel) ? toggleDropdown(link.label) : handleNavigation(link.label)}
              >
                {link.label}
                {(link.children || link.isMultiLevel) && <ChevronDown size={14} className="arrow" />}
              </div>

              {link.children && dropdown === link.label && (
                <div className="dropdown">
                  {link.children.map((item) => (
                    <p key={item} onClick={() => handleNavigation(item, link.label)}>{item}</p>
                  ))}
                </div>
              )}

              {link.isMultiLevel && dropdown === link.label && (
                <div className={`mega-dropdown ${subDropdown ? "expanded" : ""}`}>
                  <div className="side-menu">
                    {link.categories.map((cat) => (
                      <div 
                        key={cat.name}
                        className={`side-item ${subDropdown === cat.name ? "active-sub" : ""}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSubDropdown(subDropdown === cat.name ? null : cat.name);
                        }}
                      >
                        <span className="cat-link">{cat.icon} {cat.name}</span>
                        <ChevronRight size={14} className={subDropdown === cat.name ? "rotate-icon" : ""} />
                      </div>
                    ))}
                  </div>

                  {subDropdown && (
                    <div className="content-menu">
                      {link.categories.find(c => c.name === subDropdown)?.items.map((item) => (
                        <p key={item} onClick={() => handleNavigation(item, "Services")}>{item}</p>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button className="btn" onClick={() => handleNavigation("Register Now")}>
            Register Now →
          </button>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        </div>
      </div>
    </header>
  );
};

export default Header;