import { footer } from "framer-motion/client";

export const countryData = {
  australia: {
    title: "Australia",
    heroImage: "https://www.expat.com/images/guide-cover/australia-hero_size-t1524808170.jpg",
    heroBg: "https://www.expat.com/images/guide-cover/australia-hero_size-t1524808170.jpg",
    description: "Australia offers world-class education, strong job opportunities, and PR-friendly pathways in a safe, multicultural, and vibrant environment.",
    highlights: ["Globally Ranked Universities", "Strong Job Opportunities", "PR-Friendly Pathways", "High Quality of Life", "English-Speaking Country"],
    infoCards: [
      {
        title: "Courses Available",
        subtitle: "After 12th & Graduation",
        icon: "BookOpen", // Sirf naam likhein
        color: "#4f46e5",
        sections: [
          { heading: "After 12th (UG Options)", items: ["Bachelor's Degree (3–4 years)", "Diploma / Advanced Diploma (pathway to degree)"] },
          { heading: "After Graduation (PG Options)", items: ["Master's Degree (1.5–2 years)","PG Diploma"] }
        ],
        footer: "Most Preferred: Industry-focused + PR pathway"
      },
      {
        title: "Top Universities",
        subtitle: "in Australia",
        icon: "GraduationCap",
        listIcon: "GraduationCap",
        color: "#16a34a",
        items: ["The University of Melbourne", "The University of Sydney", "Monash University","Australian National University"],
        footer: ["✓ Globally ranked" ,"✓ Industry-connected"]
      },
      {
        title: "Cost of Study & Living",
        subtitle: "Overview",
        icon: "DollarSign",
        color: "#f59e0b",
        sections: [
          { heading: "Tuition Fees", items: ["UG: ₹15 – 25 Lakhs / year", "PG: ₹18 – 35 Lakhs (total)"] },
          { heading: "Living Cost", items: ["₹80,000 – ₹1.5 Lakhs / month"] },
          { heading: "Part-Time Work", items: ["48 hours per fortnight (~24 hrs/week)","Full-time during holidays"]}
        ],
        footer: "Students can earn ₹1 – ₹1.5 Lakhs / month"
      },
      {
        title: "Job Opportunities & ROI",
        subtitle: "Top Sectors",
        icon: "ArrowRight",
        color: "#ef4444",
        sections: [
          { heading: "Top Sectors", items: ["IT & Software","Healthcare","Engineering","Accounting & Finance","Hospitality"] },
          { heading: "Top Companies", items: ["Deloitte","Commonwealth Bank", "Telstra","Accenture"] },
        ],
        footer: "Strong job market → Good ROI"
      }
    ],
  
  // Isi tarah UK, Canada ka bhi infoCards yahan add ho
    // --- NAYA DATA ROW 2 KE LIYE ---
    extraInfo: [
      {
        title: "Post Study Work Visa",
        subtitle: "(based on course & location)",
        icon: "Plane",
        color: "#3b82f6",
        highlightText: "2 – 4 years",
        items: ["Work full-time", "Gain international experience", "Apply for PR"],
        useCheck: true
      },
      {
        title: "PR Pathway",
        subtitle: "(Permanent Residency)",
        icon: "GraduationCap",
        color: "#059669",
        highlightText: "Study → Job → PR",
        items: ["Skilled Occupation List", "Points-based system"],
        footer: "Courses aligned with PR demand",
        useCheck: true
      },
      {
        title: "Culture & Lifestyle",
        subtitle: "Living Experience",
        icon: "Globe",
        color: "#ea580c",
        items: ["Multicultural society", "Large Indian population", "Indian food available"],
        footer: "Feel Comfortable & Welcomed"
      },
      {
        title: "Travel & Exploration",
        subtitle: "Must Visit",
        icon: "MapPin",
        color: "#0284c7",
        items: ["Sydney Opera House", "Great Barrier Reef", "Bondi Beach"],
        footer: "Beaches • Travel • Outdoor"
      },
      {
        title: "Campus Life",
        subtitle: "Facilities",
        icon: "Home",
        color: "#7c3aed",
        items: ["Industry-focused", "Modern campuses", "Career services"],
        footer: "Industry exposure"
      }
    ],
    // Australia ke object ke andar ye add karein
    bottomRow: [
      {
        title: "VISA PROCESS",
        subtitle: "Step-by-Step",
        icon: "FileText",
        color: "#1e40af",
        steps: ["Offer letter (CoE)", "Fee payment", "GTE (Genuine Temporary Entrant)", "Apply visa"],
        footer: "Visa success depends on profile strength",
        footerColor: "#16a34a"
      },
      {
        title: "ACCOMMODATION",
        subtitle: "Options:",
        icon: "Home",
        color: "#ea580c",
        checkItems: ["On-campus", "Off-campus shared housing"],
        rentInfo: "₹50,000 – ₹1,00,000 / month"
      },
      {
        title: "SAFETY & HEALTHCARE",
        subtitle: "Australia is very safe",
        icon: "ShieldPlus",
        color: "#16a34a",
        heading: "Healthcare:",
        checkItems: ["OSHC (insurance mandatory)"],
        footer: "Parents feel Safe & Secure",
        footerColor: "#16a34a"
      },
      {
        title: "WEATHER (ADVANTAGE)",
        icon: "Sun",
        color: "#f59e0b",
        checkItems: ["Pleasant climate", "Better than Canada/UK winters", "No extreme cold"],
        footer: "Comfortable for Indian students",
        footerColor: "#16a34a"
      },
      {
        title: "WHO SHOULD CHOOSE AUSTRALIA?",
        subtitle: "Students who want:",
        icon: "Target",
        color: "#be123c",
        checkItems: ["PR opportunities", "Good weather", "Strong job market", "Balanced lifestyle"]
      }
    ],
    quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Indian food available?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "PR possible?", a: "Yes" },
    { q: "Weather?", a: "Comfortable" }
  ]
  },

  canada: {
    title: "Canada",
    heroImage: "https://wallpaperaccess.com/full/279281.jpg",
    heroBg: "https://wallpaperaccess.com/full/279281.jpg",
    description: "Canada is known for its welcoming culture and post-study work permits.",
    highlights: ["Easy PR", "Affordable Education", "Work while Study"],
    infoCards: [
      {
        title: "Courses Available",
        subtitle: "After 12th & Graduation",
        icon: "BookOpen", // Sirf naam likhein
        color: "#4f46e5",
        sections: [
          { heading: "After 12th (UG Options)", items: ["Bachelor's Degree (4 years)", "Diploma (2–3 years) - very popular","Advanced Diploma"] },
          { heading: "After Graduation (PG Options)", items: ["Master's Degree (1.5–2 years)","PG Diploma / Graduate Certificate (1–2 years)"] }
        ],
        footer: "Most Preferred: PG Diploma (fast + job-focused + affordable)"
      },
      {
        title: "Top Universities",
        subtitle: "in Canada",
        icon: "GraduationCap",
        listIcon: "GraduationCap",
        color: "#16a34a",
        items: ["University of Toronto", "University of British Columbia", "McGill University", "Seneca College"],
        footer: ["✓  Universities = research-based"," ✓ Colleges = job-oriented"]
      },
      {
        title: "Cost of Study & Living",
        subtitle: "Cost of Study & Living",
        icon: "DollarSign",
        color: "#f59e0b",
        sections: [
          { heading: "Tuition Fees", items: ["UG: ₹10 – 20 Lakhs / year", "Diploma: ₹8 – 15 Lakhs / year","PG: ₹12 – 25 Lakhs (total)"] },
          { heading: "Living Cost", items: ["₹70,000 – ₹1.2 Lakhs / month"] },
          { heading: "Part-Time Work", items:["20 hours / week","Full-time during holidays"]}
        ],
        footer: "Students can earn ₹80,000 – ₹1.2 Lakhs / month"
      },
      {
        title: "Job Opportunities & ROI",
        subtitle: "Top Sectors",
        icon: "ArrowRight",
        color: "#ef4444",
        sections: [
          { heading: "Top Sectors", items: ["IT & Software","Healthcare","Business / Management","Construction","Hospitality"] },
          { heading: "Top Companies", items: ["Amazon","Shopify", "RBC","Google"] },
        ],
        footer: "Strong job market → Excellent ROI"
      }
    ],
    // --- NAYA DATA ROW 2 KE LIYE ---
    extraInfo: [
      {
        title: "Post Study Work Permit (PGWP)",
        subtitle: "(PGWP)",
        icon: "Plane",
        color: "#3b82f6",
        highlightText: "Up to 3 years",
        items: ["Work full-time", "Gain Canadian experience", "Apply for PR"],
        footer:"Canada's biggest advantage"
      },
      {
        title: "PR Pathway",
        subtitle: "(Biggest Advantage)",
        icon: "GraduationCap",
        color: "#059669",
        highlightText: "Study → Work → PR",
        items: ["Express Entry ", "Provincial Nominee Program (PNP)"],
        footer: "Most Indian students choose Canada for PR",
        useCheck: true
      },
      {
        title: "Culture & Lifestyle",
        subtitle: "Diverse Environment",
        icon: "Globe",
        color: "#ea580c",
        items: ["Highly multicultural", "Large Indian community", "Friendly people","Indian food widely available"],
        footer: "Students feel Comfortable & Safe"
      },
      {
        title: "Travel & Exploration",
        subtitle: "Must Visit",
        icon: "MapPin",
        color: "#0284c7",
        items: ["Niagara Falls", "Banff National Park", "CN Tower"],
        footer: "Nature • Lakes • Winter Sports"
      },
      {
        title: "Education & Campus Life",
        subtitle: "Support Services",
        icon: "Home",
        color: "#7c3aed",
        items: ["Practical & job-oriented", "Industry-focused learning", "Co-op (paid internships) available","Modern campuses","Career support","Co-op programs"],
        footer: "Work experience during study"
      }
    ],
    bottomRow: [
      {
        title: "VISA PROCESS",
        subtitle: "Step-by-Step",
        icon: "FileText",
        color: "#1e40af",
        steps: ["Offer letter (DLI college/university)", "Pay tuition fee", "GIC (₹10 Lakhs approx)", "Apply student visa"],
        footer: "High visa success rate with strong profile",
        footerColor: "#16a34a"
      },
      {
        title: "ACCOMMODATION",
        subtitle: "Options:",
        icon: "Home",
        color: "#ea580c",
        checkItems: ["On-campus", "Off-campus shared housing"],
        rentInfo: "₹30,000 – ₹80,000  / month"
      },
      {
        title: "SAFETY & HEALTHCARE",
        subtitle: "One of the safest countries",
        icon: "ShieldPlus",
        color: "#16a34a",
        heading: "Healthcare:",
        checkItems: ["Good medical system","Insurance required"],
        footer: "Parents feel Safe & Secure",
        footerColor: "#16a34a"
      },
      {
        title: "WEATHER (Important)",
        icon: "Sun",
        color: "#f59e0b",
        checkItems: ["Winters are very cold ", "-10°C to -25°C", "No extreme cold"],
        heading: "Important to prepare:",
        checkItems: ["Warm clothes","Lifestyle adjustment"],
        footer: "Comfortable for Indian students",
        footerColor: "#16a34a"
      },
      {
        title: "Who Should Choose Canada?",
        subtitle: "Students who want:",
        icon: "Target",
        color: "#be123c",
        checkItems: ["PR opportunities", "Affordable education", "Job-oriented courses", "Safe environment"]
      }
    ],
    quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Indian food available?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "PR possible?", a: "Yes" },
    { q: "Cold weather manageable?", a: "Yes (with prep)" } // Canada ke liye change kar diya
  ]

  },
  france: {
  title: "France",
  heroImage: "https://wallpaperaccess.com/full/1192224.jpg",
  heroBg: "https://wallpaperaccess.com/full/1192224.jpg",
  description: "France offers affordable European education, globally recognized degrees, and is a hub for business, fashion & hospitality.",
  highlights: ["Affordable Education", "Globally Recognized Degrees", "Scholarships Available"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3 years)", 
            "Foundation programs",
            "Many UG programs are in French"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1–2 years) - most popular",
            "MBA (top-ranked globally)",
            "Specialized programs"
          ] 
        }
      ],
      footer: "Most Preferred: English-taught Master's programs"
    },
    {
      title: "Top Universities",
      subtitle: "in France",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "HEC Paris",
        "ESSEC Business School",
        "Sorbonne University",
        "INSEAD"
      ],
      footer: ["✓ World-renowned for Business", "✓ Luxury & Fashion focused"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "Public universities: ₹3 – 8 Lakhs / year",
            "Private schools: ₹10 – 25 Lakhs"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "Paris: ₹80,000 – ₹1.3 Lakhs / month",
            "Other cities: ₹50,000 – ₹90,000 / month"
          ] 
        },
        { 
          heading: "Scholarships", 
          items: [
            "Eiffel Scholarship",
            "Government subsidies"
          ] 
        }
      ],
      footer: "Most affordable European country with scholarships"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "Business & Management",
            "Luxury Brands",
            "Hospitality & Tourism",
            "Engineering",
            "IT"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "LVMH",
            "Chanel",
            "L'Oréal",
            "TotalEnergies"
          ] 
        }
      ],
      footer: "Strong opportunities after graduation"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Up to 2 years",
      items: [
        "Stay & work in France",
        "Gain experience",
        "Apply for work visa"
      ],
      footer: "Good opportunity after study"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Study → Job → PR",
      items: [
        "Possible after 5 years",
        "French language helps"
      ],
      footer: "Long-term settlement possible",
      useCheck: true
    },
    {
      title: "Language & Communication",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Courses available in English",
        "French important for jobs",
        "Learn basic French recommended"
      ],
      footer: "Helps in daily life & jobs"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Eiffel Tower",
        "Louvre Museum",
        "Palace of Versailles",
        "Travel across Europe easily"
      ],
      footer: "History • Art • Travel"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Research-based learning",
        "Industry collaboration",
        "Internship opportunities",
        "Modern campuses",
        "Innovation focused"
      ],
      footer: "Strong academic + industry exposure"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Admission",
        "Campus France process",
        "Visa application"
      ],
      footer: "Structured but manageable process",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University housing",
        "Shared apartments"
      ],
      rentInfo: "₹30,000 – ₹80,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Generally safe",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Government-supported",
        "Insurance required"
      ],
      footer: "Safe for international students",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cold winters",
        "Pleasant summers"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Seasonal clothes",
        "Lifestyle adjustment"
      ],
      footer: "Manageable for Indian students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose France?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Affordable European education",
        "Business / fashion careers",
        "Cultural exposure",
        "Scholarship opportunities"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Indian food available?", a: "Yes" },
    { q: "French required?", a: "Recommended" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "PR possible?", a: "Yes" }
  ]
},
germany: {
  title: "Germany",
  heroImage: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/26135503/berlin.jpeg",
  heroBg: "https://images.travelandleisureasia.com/wp-content/uploads/sites/5/2023/12/26135503/berlin.jpeg",
  description: "Germany offers zero or low tuition fees, world-class engineering education, and strong job opportunities in Europe's largest economy.",
  highlights: ["Zero Tuition Fees", "Strong Engineering & Tech", "Excellent Job Market"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3–4 years)",
            "Most UG programs in German",
            "Foundation year (Studienkolleg) may be needed"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1.5–2 years) - most popular",
            "MBA / Technical specialization"
          ] 
        }
      ],
      footer: "Most Preferred: English-taught Master's programs"
    },
    {
      title: "Top Universities",
      subtitle: "in Germany",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "Technical University of Munich",
        "RWTH Aachen University",
        "University of Heidelberg",
        "Humboldt University of Berlin"
      ],
      footer: ["✓ Globally ranked", "✓ Strong research & industry links"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "Public: ₹0 – 2 Lakhs / year (almost FREE)",
            "Private: ₹8 – 20 Lakhs / year"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹70,000 – ₹1.1 Lakhs / month"
          ] 
        },
        { 
          heading: "Blocked Account (Required)", 
          items: [
            "€11,208 (~₹10 Lakhs) for 1 year",
            "Covers accommodation, food & transport"
          ] 
        }
      ],
      footer: "Most affordable option for quality education"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "Engineering (Mechanical, Automotive)",
            "IT / Software",
            "Manufacturing",
            "Automotive",
            "Data Science"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "BMW",
            "Mercedes",
            "Siemens",
            "SAP"
          ] 
        }
      ],
      footer: "Industrial powerhouse → High ROI"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "18 months",
      items: [
        "Stay & find a job",
        "Convert to work visa"
      ],
      footer: "Great opportunity after graduation"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Study → Job → PR",
      items: [
        "Possible after 5 years",
        "Faster with good job + German language"
      ],
      footer: "Strong long-term settlement option",
      useCheck: true
    },
    {
      title: "Language (Very Important)",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Courses available in English",
        "German VERY important for jobs",
        "Required for daily life & PR",
        "Learn German (A2–B1 minimum)"
      ],
      footer: "Key factor for success in Germany"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Brandenburg Gate",
        "Neuschwanstein Castle",
        "Cologne Cathedral",
        "Travel across EU countries"
      ],
      footer: "Travel • History • Nature"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Research-based learning",
        "Practical & technical focus",
        "Industry-focused education",
        "Modern infrastructure",
        "Research labs",
        "Industry collaboration"
      ],
      footer: "Strong technical exposure"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "University admission",
        "Blocked account setup",
        "Visa application"
      ],
      footer: "Straightforward process",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "Student dorms",
        "Shared apartments"
      ],
      rentInfo: "₹25,000 – ₹60,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Germany is very safe",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Mandatory insurance",
        "Excellent facilities"
      ],
      footer: "Safe & secure for students",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cold winters",
        "-5°C to -15°C"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Warm clothing"
      ],
      footer: "Manageable with preparation",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Germany?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Low-cost education",
        "Engineering / technical career",
        "European exposure",
        "Strong job market"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Indian food available?", a: "Limited" },
    { q: "German required?", a: "Yes (important)" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "PR possible?", a: "Yes" },
    { q: "Tuition fees?", a: "Mostly FREE" }
  ]
},
ireland: {
  title: "Ireland",
  heroImage: "https://tr-images.condecdn.net/image/AMLZDZkVXPm/crop/1620/f/kinsale-county-cork-gettyimages-458882773.jpg",
  heroBg: "https://tr-images.condecdn.net/image/AMLZDZkVXPm/crop/1620/f/kinsale-county-cork-gettyimages-458882773.jpg",
  description: "Ireland offers fast 1-year master's programs, strong job opportunities, and is a major tech hub in Europe with global companies.",
  highlights: ["1-Year Master's", "Tech & Pharma Hub", "2-Year Work Visa"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3–4 years)",
            "Foundation Programs (if required)",
            "Business, Computer Science, Engineering, Hospitality"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1 year mostly)",
            "PG Diploma (1 year, job-oriented)"
          ] 
        }
      ],
      footer: "Most Preferred: 1-year Master's (fast + cost-effective)"
    },
    {
      title: "Top Universities",
      subtitle: "in Ireland",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "Trinity College Dublin",
        "University College Dublin",
        "NUI Galway",
        "University College Cork"
      ],
      footer: ["✓ Globally recognized degrees", "✓ Strong industry connections"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹10 – 18 Lakhs / year",
            "PG: ₹10 – 25 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹70,000 – ₹1.1 Lakhs / month"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "20 hrs/week during study",
            "40 hrs/week during holidays",
            "Earn €800 – €1200 / month"
          ] 
        }
      ],
      footer: "Affordable with part-time earning support"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "IT / Software",
            "Data Analytics",
            "Finance",
            "Pharma",
            "Healthcare"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "Google",
            "Apple",
            "Microsoft",
            "Meta",
            "Pfizer"
          ] 
        }
      ],
      footer: "High employability → Strong ROI"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "Third Level Graduate Scheme",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Up to 2 years",
      items: [
        "UG: 1 year | PG: 2 years",
        "Find a job",
        "Apply for work permit",
        "Start PR journey"
      ],
      footer: "Strong opportunity after study"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Job → Work Permit → PR",
      items: [
        "Possible after 5 years",
        "Not direct PR like Canada",
        "Strong job market helps transition"
      ],
      footer: "PR possible via job pathway",
      useCheck: true
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Friendly & welcoming people",
        "Safe for international students",
        "Multicultural environment",
        "Indian food easily available",
        "Strong Indian community"
      ],
      footer: "Students settle quickly & comfortably"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Cliffs of Moher",
        "Dublin Castle",
        "Ring of Kerry"
      ],
      footer: "Nature • History • Weekend Trips"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Practical learning",
        "Assignments + projects",
        "Industry-focused curriculum",
        "Research-based teaching",
        "World-class libraries",
        "Career support centers"
      ],
      footer: "Focus: Job readiness, not just theory"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Offer letter from university",
        "Pay tuition fees",
        "Arrange funds",
        "Apply visa online",
        "Biometrics + documents"
      ],
      footer: "High success rate with correct docs",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "On-campus (safe, convenient)",
        "Off-campus shared apartments"
      ],
      rentInfo: "€400 – €800 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "One of the safest countries",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Mandatory insurance",
        "Good medical facilities"
      ],
      footer: "Parents feel Safe & Secure",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Mild but rainy climate",
        "Cool summers",
        "Cold winters"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Rain gear",
        "Warm clothes"
      ],
      footer: "Manageable for Indian students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Ireland?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Budget ₹15–25 Lakhs",
        "IT / Business / Pharma career",
        "Fast ROI (1-year PG)",
        "English-speaking country"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Indian food available?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "PR possible?", a: "Yes (via job)" },
    { q: "Job opportunities?", a: "Strong" }
  ]
},
japan: {
  title: "Japan",
  heroImage: "https://s3-ap-northeast-1.amazonaws.com/thegate/2020/10/15/17/09/06/Asimo-Top.jpg",
  heroBg: "https://s3-ap-northeast-1.amazonaws.com/thegate/2020/10/15/17/09/06/Asimo-Top.jpg",
  description: "Japan offers world-class technology, affordable education, and strong career opportunities in engineering, robotics & IT.",
  highlights: ["World-Class Technology", "Affordable Education", "Safe & Disciplined"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (4 years)",
            "Diploma / Vocational programs",
            "Many UG programs require Japanese language"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (2 years)",
            "Research programs",
            "English-taught PG or Japanese-medium with language prep"
          ] 
        }
      ],
      footer: "Language preparation is important for better opportunities"
    },
    {
      title: "Top Universities",
      subtitle: "in Japan",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Tokyo",
        "Kyoto University",
        "Osaka University",
        "Tokyo Institute of Technology"
      ],
      footer: ["✓ Globally ranked", "✓ Strong research & innovation"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹5 – 10 Lakhs / year",
            "PG: ₹6 – 12 Lakhs / year"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹60,000 – ₹1.2 Lakhs / month",
            "Tokyo is more expensive"
          ] 
        },
        { 
          heading: "Scholarships", 
          items: [
            "MEXT Scholarship (Govt)",
            "University scholarships",
            "Can cover tuition + living expenses"
          ] 
        }
      ],
      footer: "More affordable than UK/USA with scholarships"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "Engineering",
            "Robotics",
            "IT / Software",
            "Manufacturing",
            "Automotive"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "Toyota",
            "Sony",
            "Honda",
            "Panasonic"
          ] 
        }
      ],
      footer: "Strong demand for skilled professionals"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Work visa after graduation",
      items: [
        "Get a job offer",
        "Convert student visa to work visa",
        "Start your career in Japan"
      ],
      footer: "Good career opportunities after study"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Job → Work Visa → PR",
      items: [
        "Typically 5–10 years",
        "Faster with high salary",
        "Skilled professionals preferred"
      ],
      footer: "Long-term settlement possible",
      useCheck: true
    },
    {
      title: "Language (Very Important)",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Some courses in English",
        "Japanese crucial for jobs",
        "Important for daily life",
        "Learn JLPT N3/N2 level"
      ],
      footer: "Must be ready to learn Japanese"
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Highly disciplined society",
        "Respectful & safe",
        "Organized environment",
        "Unique cultural experience"
      ],
      footer: "Safe & structured lifestyle"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Mount Fuji",
        "Tokyo Tower",
        "Fushimi Inari Shrine"
      ],
      footer: "Nature • Technology • Culture"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Get admission",
        "Certificate of Eligibility (COE)",
        "Visa application"
      ],
      footer: "Documents: Passport, academics, financial proof",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University dorms",
        "Shared apartments"
      ],
      rentInfo: "₹30,000 – ₹70,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "One of the safest countries",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "High-quality healthcare",
        "Insurance required"
      ],
      footer: "Parents feel very secure",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cold winters",
        "Hot summers"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Seasonal clothing",
        "Adapt to weather changes"
      ],
      footer: "Manageable for students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Japan?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Technology-focused career",
        "Affordable international education",
        "Unique cultural experience",
        "Safe environment",
        "Ready to learn Japanese"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Sometimes" },
    { q: "Japanese required?", a: "Yes" },
    { q: "PR possible?", a: "Yes (long-term)" },
    { q: "Safe for International Students?", a: "Extremely" },
    { q: "Indian food available?", a: "Limited" }
  ]
},
moldova: {
  title: "Moldova",
  heroImage: "https://static.independent.co.uk/2021/09/24/16/iStock-1066138896.jpg",
  heroBg: "https://static.independent.co.uk/2021/09/24/16/iStock-1066138896.jpg",
  description: "Moldova offers budget-friendly European education with low living costs and is especially popular for MBBS and technical studies.",
  highlights: ["Affordable Education", "Low Living Cost", "MBBS Popular"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "MBBS (Most popular)",
            "Engineering",
            "Business Administration",
            "Computer Science"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1.5–2 years)",
            "Specialization programs"
          ] 
        }
      ],
      footer: "MBBS is the top choice for Indian students"
    },
    {
      title: "Top Universities",
      subtitle: "in Moldova",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "Nicolae Testemitanu State Univ. of Medicine & Pharmacy",
        "Technical University of Moldova",
        "State University of Moldova"
      ],
      footer: ["✓ WHO & NMC recognized (MBBS)", "✓ Affordable tuition"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "MBBS: ₹3 – 6 Lakhs / year",
            "Other courses: ₹2 – 5 Lakhs / year"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹25,000 – ₹50,000 / month"
          ] 
        }
      ],
      footer: "One of the most affordable options in Europe"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Post-Study Options",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Important to Know", 
          items: [
            "Limited part-time jobs",
            "Local economy is small"
          ] 
        },
        { 
          heading: "Best Approach", 
          items: [
            "Focus on education",
            "Move to other EU countries",
            "Return to India (especially MBBS)"
          ] 
        }
      ],
      footer: "No strong post-study work system"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Options",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Multiple pathways",
      items: [
        "Higher studies in EU",
        "Move to other European countries",
        "Return to India for MBBS practice"
      ],
      footer: "Plan your next step wisely"
    },
    {
      title: "PR Pathway",
      subtitle: "(Important)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Not Direct",
      items: [
        "No strong PR system",
        "Not ideal for PR-focused students"
      ],
      footer: "Better for education, not settlement",
      useCheck: true
    },
    {
      title: "Language & Communication",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Courses available in English",
        "Local language: Romanian / Russian",
        "Basic local language needed"
      ],
      footer: "Helpful for daily life"
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Calm & peaceful country",
        "European lifestyle",
        "Smaller Indian community",
        "Limited Indian food",
        "Students often cook themselves"
      ],
      footer: "Adjustment required initially"
    },
    {
      title: "Education & System",
      subtitle: "",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Affordable & structured",
        "Theoretical + practical focus",
        "Globally recognized MBBS",
        "NMC / WHO approved universities"
      ],
      footer: "Strong foundation for medical careers"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Admission letter",
        "Document verification",
        "Visa application",
        "Travel"
      ],
      footer: "Simpler than most countries",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University hostel (most common)",
        "Shared apartments"
      ],
      rentInfo: "₹10,000 – ₹25,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Generally safe",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Basic healthcare facilities",
        "Insurance recommended"
      ],
      footer: "Safe for students",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cold winters (-5°C to -10°C)"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Warm clothing",
        "Adjustment needed"
      ],
      footer: "Manageable with preparation",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Moldova?",
      subtitle: "Students who:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Have low budget",
        "Want MBBS in Europe",
        "Cannot afford UK / Canada"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Usually No" },
    { q: "MBBS valid in India?", a: "Yes (NMC)" },
    { q: "Part-time job?", a: "Limited" },
    { q: "PR possible?", a: "Not direct" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "Indian food available?", a: "Limited" }
  ]
},
netherlands: {
  title: "Netherlands",
  heroImage: "https://th.bing.com/th/id/OIP.-I31B4wv2o9kmJdCoe0vigHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  heroBg: "https://th.bing.com/th/id/OIP.-I31B4wv2o9kmJdCoe0vigHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
  description: "The Netherlands offers English-friendly education, globally ranked universities, and strong career opportunities in Europe.",
  highlights: ["English-Taught Programs", "Strong Job Market", "High Quality of Life"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3–4 years)",
            "Business",
            "Engineering",
            "Data Science",
            "Economics"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1–2 years)",
            "Specialized programs"
          ] 
        }
      ],
      footer: "Most Preferred: English-taught Master's programs"
    },
    {
      title: "Top Universities",
      subtitle: "in Netherlands",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Amsterdam",
        "Delft University of Technology",
        "Erasmus University Rotterdam",
        "Leiden University"
      ],
      footer: ["✓ Globally ranked", "✓ Strong research & innovation"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹8 – 15 Lakhs / year",
            "PG: ₹10 – 20 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹80,000 – ₹1.2 Lakhs / month",
            "Amsterdam is more expensive"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "16 hrs/week during study",
            "Full-time during holidays",
            "Earn ₹60,000 – ₹1,00,000 / month"
          ] 
        }
      ],
      footer: "Balanced cost with earning opportunities"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "IT / Software",
            "Engineering",
            "Logistics",
            "Finance",
            "Business"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "Philips",
            "Shell",
            "ING",
            "Unilever"
          ] 
        }
      ],
      footer: "Strong job market → good ROI"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "Orientation Year Visa",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "1 Year",
      items: [
        "Stay & find a job",
        "Search for employment",
        "Convert to work visa",
        "Start your career in NL"
      ],
      footer: "Great opportunity after graduation"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Study → Job → PR",
      items: [
        "Possible after 5 years",
        "Clear and structured pathway"
      ],
      footer: "Good long-term option",
      useCheck: true
    },
    {
      title: "Language & Communication",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Most English-friendly country in Europe",
        "No major language barrier",
        "Dutch helps in jobs",
        "Helps social integration"
      ],
      footer: "Comfortable for Indian students"
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Liberal & open-minded",
        "Multicultural society",
        "Student-friendly",
        "Indian food available",
        "Indian grocery stores"
      ],
      footer: "Comfortable & independent life"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Anne Frank House",
        "Keukenhof Gardens",
        "Rijksmuseum",
        "Travel across Europe easily"
      ],
      footer: "Travel • Culture • City Life"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Get admission",
        "University applies for visa",
        "Residence permit issued"
      ],
      footer: "Smooth process",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University housing",
        "Shared apartments"
      ],
      rentInfo: "₹40,000 – ₹90,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Very safe country",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Excellent healthcare facilities",
        "Insurance mandatory"
      ],
      footer: "Parents feel secure",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Mild climate",
        "Rainy weather"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Rain gear",
        "Layered clothing"
      ],
      footer: "Comfortable overall",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Netherlands?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "English-friendly Europe",
        "Good job opportunities",
        "Global exposure",
        "Balanced lifestyle"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Dutch required?", a: "Not mandatory" },
    { q: "PR possible?", a: "Yes" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "Housing issue?", a: "Plan early" },
    { q: "Indian food available?", a: "Yes" }
  ]
},
newZealand: {
  title: "New Zealand",
  heroImage: "https://wallpaperaccess.com/full/1616106.jpg",
  heroBg: "https://wallpaperaccess.com/full/1616106.jpg",
  description: "New Zealand offers high-quality education, a safe environment, strong post-study work opportunities, and clear PR pathways.",
  highlights: ["High-Quality Education", "Safe & Peaceful", "3-Year Work Visa"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3 years)",
            "Diploma / Foundation programs",
            "Business, IT / CS, Engineering, Hospitality"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1–2 years)",
            "PG Diploma"
          ] 
        }
      ],
      footer: "Most Preferred: Master's in PR-friendly fields"
    },
    {
      title: "Top Universities",
      subtitle: "in New Zealand",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington",
        "University of Canterbury"
      ],
      footer: ["✓ Globally ranked", "✓ Industry-focused education"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹12 – 20 Lakhs / year",
            "PG: ₹15 – 25 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹80,000 – ₹1.3 Lakhs / month"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "20 hrs/week during study",
            "Full-time during holidays",
            "Earn ₹80,000 – ₹1.2 Lakhs / month"
          ] 
        }
      ],
      footer: "Balanced cost with earning opportunities"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "IT / Software",
            "Healthcare",
            "Engineering",
            "Agriculture",
            "Hospitality"
          ] 
        },
        { 
          heading: "Top Employers", 
          items: [
            "Fonterra",
            "Fisher & Paykel",
            "Spark NZ"
          ] 
        }
      ],
      footer: "Growing job market → good ROI"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Up to 3 Years",
      items: [
        "Work full-time after graduation",
        "Gain experience",
        "Build your career",
        "Apply for PR"
      ],
      footer: "Strong post-study opportunities"
    },
    {
      title: "PR Pathway",
      subtitle: "Skill-Based System",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Study → Job → PR",
      items: [
        "High chances in demand fields",
        "IT",
        "Healthcare",
        "Engineering"
      ],
      footer: "Good PR chances in skilled sectors",
      useCheck: true
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Friendly & welcoming",
        "Multicultural society",
        "Relaxed lifestyle",
        "Indian food available",
        "Vegetarian options available"
      ],
      footer: "Comfortable & safe for students"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Milford Sound",
        "Mount Cook",
        "Queenstown"
      ],
      footer: "Adventure • Nature • Travel"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Practical & research-based",
        "Industry-focused",
        "Skill-oriented learning",
        "Modern campuses",
        "Internship opportunities",
        "Career support"
      ],
      footer: "Focus: Job readiness"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Offer letter from university",
        "Fee payment",
        "Financial proof",
        "Visa application"
      ],
      footer: "Good visa success rate",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "On-campus housing",
        "Off-campus shared housing"
      ],
      rentInfo: "₹40,000 – ₹90,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "One of the safest countries",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "High-quality healthcare",
        "Insurance required"
      ],
      footer: "Parents feel very secure",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Mild climate",
        "No extreme winters"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Light winter clothing"
      ],
      footer: "Comfortable for Indian students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose NZ?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Safe environment",
        "PR opportunities",
        "English-speaking country",
        "Balanced lifestyle"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "PR possible?", a: "Yes" },
    { q: "Safe for International Students?", a: "Very safe" },
    { q: "Indian food available?", a: "Yes" },
    { q: "Weather?", a: "Comfortable" }
  ]
},
singapore: {
  title: "Singapore",
  heroImage: "https://media.architecturaldigest.com/photos/582ce2690058935c3e94c04b/master/pass/singapore-01.jpg",
  heroBg: "https://media.architecturaldigest.com/photos/582ce2690058935c3e94c04b/master/pass/singapore-01.jpg",
  description: "Singapore offers top-ranked universities, strong career opportunities in Asia, and a safe, modern environment close to India.",
  highlights: ["World-Class Universities", "Asian Career Hub", "Safe & Clean"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3–4 years)",
            "Diploma programs",
            "Business, IT / CS, Finance, Hospitality"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1–1.5 years)",
            "MBA"
          ] 
        }
      ],
      footer: "Most Preferred: Business & Management programs"
    },
    {
      title: "Top Universities",
      subtitle: "in Singapore",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "National University of Singapore (NUS)",
        "Nanyang Technological University (NTU)",
        "Singapore Management University (SMU)"
      ],
      footer: ["✓ Ranked among top universities globally", "✓ Strong industry connections"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹15 – 25 Lakhs / year",
            "PG: ₹20 – 40 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹1 – ₹1.8 Lakhs / month"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "Limited (mostly campus-based)",
            "Not as flexible as Canada / UK"
          ] 
        }
      ],
      footer: "Premium cost but high-quality education"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "Finance",
            "Banking",
            "IT",
            "Business",
            "Logistics"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "DBS Bank",
            "Google",
            "Grab",
            "Microsoft"
          ] 
        }
      ],
      footer: "Strong job market in Asia"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Options",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Job-first approach",
      items: [
        "Get job first",
        "Apply for work visa",
        "Start career in Singapore"
      ],
      footer: "Strong access to Asian job market"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Job → Work Visa → PR",
      items: [
        "Depends on job & salary",
        "Skills-based evaluation",
        "Competitive process"
      ],
      footer: "Possible but competitive",
      useCheck: true
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Multicultural society",
        "Modern & urban lifestyle",
        "Indian food widely available",
        "Vegetarian options easily available",
        "Diwali is an official holiday"
      ],
      footer: "Very comfortable for Indian students"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Marina Bay Sands",
        "Gardens by the Bay",
        "Sentosa Island",
        "Travel across Southeast Asia"
      ],
      footer: "City Life • SE Asia Travel"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Practical & industry-focused",
        "Highly competitive",
        "Globally recognized degrees",
        "Modern campuses",
        "Internship opportunities",
        "Industry exposure"
      ],
      footer: "Focus: Skills + Employability"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Student Pass",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Get admission",
        "Student Pass application",
        "Approval"
      ],
      footer: "Smooth process",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University hostels",
        "Private housing"
      ],
      rentInfo: "₹60,000 – ₹1.5 Lakhs / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "One of the safest countries",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Excellent healthcare facilities"
      ],
      footer: "Parents feel extremely safe",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Tropical climate",
        "Warm & humid"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Light clothing",
        "Hydration"
      ],
      footer: "Easy adjustment for Indian students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose Singapore?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Top universities",
        "Asian career opportunities",
        "Safe environment",
        "Close to India"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Limited" },
    { q: "PR possible?", a: "Yes (competitive)" },
    { q: "Safe for International Students?", a: "Very safe" },
    { q: "Indian food available?", a: "Yes" },
    { q: "Weather?", a: "Comfortable" }
  ]
},
uk: {
  title: "UK",
  heroImage: "https://images4.alphacoders.com/795/795081.jpg",
  heroBg: "https://images4.alphacoders.com/795/795081.jpg",
  description: "The UK offers globally ranked universities, fast 1-year master's programs, and strong career opportunities with a 2-year post-study work visa.",
  highlights: ["1-Year Master's", "Globally Ranked Universities", "2-Year Work Visa"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (3 years)",
            "Foundation Year (if required)",
            "Business, Engineering, Law, Arts & Design"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1 year)",
            "MBA (1 year)",
            "PG Diploma"
          ] 
        }
      ],
      footer: "Most Preferred: 1-year Master's (saves time + cost)"
    },
    {
      title: "Top Universities",
      subtitle: "in UK",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
        "University College London"
      ],
      footer: ["✓ Globally recognized degrees", "✓ High employability"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹12 – 25 Lakhs / year",
            "PG: ₹15 – 35 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "London: ₹1.2 – 1.8 Lakhs / month",
            "Other cities: ₹80,000 – ₹1.2 Lakhs / month"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "20 hrs/week during study",
            "40 hrs/week during holidays",
            "Earn ₹80,000 – ₹1.2 Lakhs / month"
          ] 
        }
      ],
      footer: "Good ROI with short-duration courses"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "Finance",
            "Business & Management",
            "IT & Data Science",
            "Healthcare",
            "Engineering"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "HSBC",
            "Deloitte",
            "PwC",
            "Amazon",
            "Barclays"
          ] 
        }
      ],
      footer: "Short duration + High-paying jobs"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "(PSW – Graduate Route)",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "2 Years",
      items: [
        "After UG & PG",
        "Stay in UK",
        "Work full-time",
        "Gain international experience"
      ],
      footer: "Strong post-study opportunity"
    },
    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Study → Job → PR",
      items: [
        "Via Skilled Worker Visa route",
        "Requires job + work visa",
        "Clear structured pathway"
      ],
      footer: "Not direct but achievable",
      useCheck: true
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Multicultural society",
        "Large Indian population",
        "Open & inclusive",
        "Indian food widely available",
        "Vegetarian options accessible"
      ],
      footer: "Comfortable & less homesick"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Big Ben",
        "Tower Bridge",
        "Buckingham Palace",
        "Easy travel to Europe"
      ],
      footer: "City Life • History • Travel"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Practical & research-based",
        "Assignment-driven learning",
        "Industry exposure",
        "World-class campuses",
        "Advanced research facilities"
      ],
      footer: "Focus: Real-world skills"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Offer letter (CAS)",
        "Fee payment",
        "Financial proof",
        "Apply student visa",
        "Biometrics"
      ],
      footer: "High success rate with proper docs",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "On-campus (safe, convenient)",
        "Off-campus shared flats"
      ],
      rentInfo: "₹40,000 – ₹1,00,000 / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Safe for students",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "NHS (included in visa fee)"
      ],
      footer: "Parents feel secure & confident",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Mild but rainy climate",
        "Cool winters"
      ],
      heading: "Important to prepare:",
      checkItems: [
        "Rain gear",
        "Warm clothing"
      ],
      footer: "Manageable for Indian students",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose UK?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Fast degree (1-year PG)",
        "Top global universities",
        "Strong career exposure",
        "English-speaking country"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "Indian food available?", a: "Yes" },
    { q: "PR possible?", a: "Yes (via job)" }
  ]
},
usa: {
  title: "USA",
  heroImage: "https://a.cdn-hotels.com/gdcs/production79/d567/927124e0-6bc6-4123-b007-e2b235afab1a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  heroBg: "https://a.cdn-hotels.com/gdcs/production79/d567/927124e0-6bc6-4123-b007-e2b235afab1a.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
  description: "The USA is the #1 study destination with top-ranked universities, flexible education, and the highest salary potential globally.",
  highlights: ["#1 Study Destination", "Top-Ranked Universities", "Highest Salary Potential"],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        { 
          heading: "After 12th (UG Options)", 
          items: [
            "Bachelor's Degree (4 years)",
            "Community College (2+2)",
            "Computer Science, Business, Engineering, Data Science"
          ] 
        },
        { 
          heading: "After Graduation (PG Options)", 
          items: [
            "Master's Degree (1.5–2 years)",
            "MBA (2 years)"
          ] 
        }
      ],
      footer: "Most Preferred: STEM courses (higher job opportunities)"
    },
    {
      title: "Top Universities",
      subtitle: "in USA",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "Harvard University",
        "MIT",
        "Stanford University",
        "UC Berkeley"
      ],
      footer: ["✓ Globally ranked", "✓ Industry & research leaders"]
    },
    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        { 
          heading: "Tuition Fees", 
          items: [
            "UG: ₹20 – 40 Lakhs / year",
            "PG: ₹25 – 50 Lakhs (total)"
          ] 
        },
        { 
          heading: "Living Cost", 
          items: [
            "₹80,000 – ₹1.5 Lakhs / month",
            "NY & California are more expensive"
          ] 
        },
        { 
          heading: "Scholarships", 
          items: [
            "Merit-based & need-based",
            "Partial funding available"
          ] 
        },
        { 
          heading: "Part-Time Work", 
          items: [
            "On-campus: 20 hrs/week",
            "Off-campus requires authorization"
          ] 
        }
      ],
      footer: "Premium investment with high return potential"
    },
    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        { 
          heading: "Top Sectors", 
          items: [
            "IT / Software",
            "Data Science",
            "Engineering",
            "Finance",
            "Healthcare"
          ] 
        },
        { 
          heading: "Top Companies", 
          items: [
            "Google",
            "Amazon",
            "Microsoft",
            "Apple"
          ] 
        }
      ],
      footer: "Highest salary potential globally"
    }
  ],

  extraInfo: [
    {
      title: "OPT & H1B (Post Study Work)",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Up to 3 Years (STEM)",
      items: [
        "OPT: 1 year (all students)",
        "STEM: up to 3 years",
        "H1B: Lottery-based work visa",
        "Path: Study → OPT → H1B"
      ],
      footer: "Key pathway to work in USA"
    },
    {
      title: "PR Pathway",
      subtitle: "(Green Card)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Job → H1B → PR",
      items: [
        "Employer sponsorship needed",
        "Long process",
        "Depends on job & category"
      ],
      footer: "Possible but takes time",
      useCheck: true
    },
    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Highly diverse society",
        "Independent lifestyle",
        "Fast-paced environment",
        "Indian food widely available",
        "Strong Indian community"
      ],
      footer: "Comfortable for Indian students"
    },
    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Statue of Liberty",
        "Grand Canyon",
        "Golden Gate Bridge"
      ],
      footer: "Travel • City Life • Nature"
    },
    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Flexible curriculum",
        "Credit-based system",
        "Research & practical learning",
        "Large campuses",
        "Clubs & activities",
        "Internship opportunities"
      ],
      footer: "Explore multiple fields & build skills"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Get admission",
        "Receive I-20 form",
        "Pay SEVIS fee",
        "Visa interview"
      ],
      footer: "Depends on interview performance",
      footerColor: "#16a34a"
    },
    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "On-campus housing",
        "Off-campus apartments"
      ],
      rentInfo: "₹50,000 – ₹1.2 Lakhs / month"
    },
    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Depends on city",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Insurance mandatory",
        "Healthcare is expensive"
      ],
      footer: "Stay insured & aware",
      footerColor: "#16a34a"
    },
    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cold (New York, Chicago)",
        "Warm (California, Florida)"
      ],
      heading: "Important to choose:",
      checkItems: [
        "Location based on preference"
      ],
      footer: "Varies by state",
      footerColor: "#16a34a"
    },
    {
      title: "Who Should Choose USA?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Top global universities",
        "High salary jobs",
        "Flexible education system",
        "Research opportunities"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Limited" },
    { q: "PR possible?", a: "Yes (long process)" },
    { q: "Safe for International Students?", a: "Yes (depends on location)" },
    { q: "Indian food available?", a: "Yes" }
  ]
},
uae: {
  title: "UAE",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  heroBg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
  description: "The UAE is becoming a top destination for international students due to its modern lifestyle, globally connected universities, tax-free salaries, and excellent career opportunities in Dubai & Abu Dhabi.",
  highlights: [
    "Global Education Hub",
    "Tax-Free Salary Opportunities",
    "Modern Lifestyle & Safety"
  ],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        {
          heading: "After 12th (UG Options)",
          items: [
            "Bachelor’s Degree (3–4 years)",
            "Foundation Programs",
            "Business, Hospitality, IT, Engineering, Media"
          ]
        },
        {
          heading: "After Graduation (PG Options)",
          items: [
            "Master’s Degree (1–2 years)",
            "MBA Programs",
            "Management & Technology Courses"
          ]
        }
      ],
      footer: "Popular for Business, Hospitality & Management programs"
    },

    {
      title: "Top Universities",
      subtitle: "in UAE",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Dubai",
        "Heriot-Watt University Dubai",
        "Middlesex University Dubai",
        "Canadian University Dubai"
      ],
      footer: [
        "✓ International campuses",
        "✓ Industry-focused education"
      ]
    },

    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        {
          heading: "Tuition Fees",
          items: [
            "UG: ₹8 – 18 Lakhs / year",
            "PG: ₹10 – 22 Lakhs (total)"
          ]
        },
        {
          heading: "Living Cost",
          items: [
            "₹60,000 – ₹1.2 Lakhs / month",
            "Dubai is more expensive than other cities"
          ]
        },
        {
          heading: "Scholarships",
          items: [
            "Merit-based scholarships available",
            "Early application discounts"
          ]
        },
        {
          heading: "Part-Time Work",
          items: [
            "Students can work part-time",
            "Internship opportunities available"
          ]
        }
      ],
      footer: "Affordable compared to USA & UK"
    },

    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        {
          heading: "Top Sectors",
          items: [
            "Hospitality",
            "Business & Finance",
            "IT & Software",
            "Construction",
            "Digital Marketing"
          ]
        },
        {
          heading: "Top Companies",
          items: [
            "Emirates",
            "Emaar",
            "Dubai Holding",
            "Microsoft UAE"
          ]
        }
      ],
      footer: "Tax-free salaries improve ROI"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Opportunities",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Strong Career Opportunities",
      items: [
        "Good internship exposure",
        "Work permits available through employers",
        "Networking opportunities in Dubai",
        "Easy access to Gulf job market"
      ],
      footer: "Career-focused study destination"
    },

    {
      title: "PR Pathway",
      subtitle: "(Residency Options)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "Long-Term Residency Possible",
      items: [
        "Golden Visa options available",
        "Employer sponsorship common",
        "Depends on salary & profession"
      ],
      footer: "Better opportunities for skilled professionals",
      useCheck: true
    },

    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Modern & luxury lifestyle",
        "Safe and clean cities",
        "Large Indian population",
        "Multicultural environment",
        "Indian food easily available"
      ],
      footer: "Very comfortable for Indian students"
    },

    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Burj Khalifa",
        "Palm Jumeirah",
        "Desert Safari"
      ],
      footer: "Luxury • Adventure • Beaches"
    },

    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Industry-oriented education",
        "Modern campuses",
        "International student community",
        "Internship opportunities",
        "Events & networking programs"
      ],
      footer: "Strong exposure to global industries"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Get admission offer",
        "Submit visa documents",
        "Medical test & verification",
        "Receive student visa"
      ],
      footer: "Fast and simple process",
      footerColor: "#16a34a"
    },

    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University hostels",
        "Shared apartments"
      ],
      rentInfo: "₹35,000 – ₹90,000 / month"
    },

    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Highly Safe Country",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Health insurance recommended",
        "Modern healthcare facilities"
      ],
      footer: "One of the safest study destinations",
      footerColor: "#16a34a"
    },

    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Very hot summers",
        "Pleasant winters"
      ],
      heading: "Important to know:",
      checkItems: [
        "Indoor lifestyle during summer"
      ],
      footer: "Sunny climate most of the year",
      footerColor: "#16a34a"
    },

    {
      title: "Who Should Choose UAE?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Affordable international education",
        "Luxury lifestyle",
        "Fast career growth",
        "Tax-free salary opportunities"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Depends on university" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "PR possible?", a: "Limited but residency options available" },
    { q: "Safe for International Students?", a: "Yes" },
    { q: "Indian food available?", a: "Easily available" }
  ]
},
newZealand: {
  title: "New Zealand",
  heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
  heroBg: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad",
  description: "New Zealand is known for its high-quality education, peaceful environment, affordable living, and excellent post-study work opportunities for international students.",
  highlights: [
    "High Quality Education",
    "Safe & Peaceful Country",
    "Strong PR Opportunities"
  ],

  infoCards: [
    {
      title: "Courses Available",
      subtitle: "After 12th & Graduation",
      icon: "BookOpen",
      color: "#4f46e5",
      sections: [
        {
          heading: "After 12th (UG Options)",
          items: [
            "Bachelor’s Degree (3–4 years)",
            "Diploma & Pathway Programs",
            "IT, Nursing, Agriculture, Business, Engineering"
          ]
        },
        {
          heading: "After Graduation (PG Options)",
          items: [
            "Master’s Degree (1–2 years)",
            "PG Diploma Programs",
            "MBA & Research Programs"
          ]
        }
      ],
      footer: "Popular for Nursing, IT & Agriculture programs"
    },

    {
      title: "Top Universities",
      subtitle: "in New Zealand",
      icon: "GraduationCap",
      listIcon: "GraduationCap",
      color: "#16a34a",
      items: [
        "University of Auckland",
        "University of Otago",
        "Victoria University of Wellington",
        "Massey University"
      ],
      footer: [
        "✓ Globally recognized degrees",
        "✓ Research-focused universities"
      ]
    },

    {
      title: "Cost of Study & Living",
      subtitle: "Cost of Study & Living",
      icon: "DollarSign",
      color: "#f59e0b",
      sections: [
        {
          heading: "Tuition Fees",
          items: [
            "UG: ₹10 – 18 Lakhs / year",
            "PG: ₹12 – 22 Lakhs (total)"
          ]
        },
        {
          heading: "Living Cost",
          items: [
            "₹60,000 – ₹1 Lakhs / month",
            "Auckland is comparatively expensive"
          ]
        },
        {
          heading: "Scholarships",
          items: [
            "Government scholarships available",
            "University merit scholarships"
          ]
        },
        {
          heading: "Part-Time Work",
          items: [
            "Up to 20 hrs/week during study",
            "Full-time during holidays"
          ]
        }
      ],
      footer: "Affordable education with good work opportunities"
    },

    {
      title: "Job Opportunities & ROI",
      subtitle: "Top Sectors",
      icon: "ArrowRight",
      color: "#ef4444",
      sections: [
        {
          heading: "Top Sectors",
          items: [
            "Healthcare & Nursing",
            "IT & Software",
            "Construction",
            "Agriculture",
            "Hospitality"
          ]
        },
        {
          heading: "Top Companies",
          items: [
            "Fisher & Paykel",
            "Xero",
            "Air New Zealand",
            "Spark NZ"
          ]
        }
      ],
      footer: "Excellent work-life balance with stable income"
    }
  ],

  extraInfo: [
    {
      title: "Post Study Work Visa",
      subtitle: "",
      icon: "Plane",
      color: "#3b82f6",
      highlightText: "Up to 3 Years",
      items: [
        "Post-study work visa available",
        "Open work rights after graduation",
        "Easy transition to skilled jobs",
        "Work opportunities across industries"
      ],
      footer: "Strong pathway towards long-term settlement"
    },

    {
      title: "PR Pathway",
      subtitle: "(Permanent Residency)",
      icon: "GraduationCap",
      color: "#059669",
      highlightText: "PR Friendly Country",
      items: [
        "Points-based PR system",
        "Skilled workers preferred",
        "Good chances after study & work experience"
      ],
      footer: "Popular destination for migration",
      useCheck: true
    },

    {
      title: "Culture & Lifestyle",
      subtitle: "",
      icon: "Globe",
      color: "#ea580c",
      items: [
        "Friendly local people",
        "Peaceful lifestyle",
        "Nature-focused environment",
        "Multicultural society",
        "Indian communities available"
      ],
      footer: "Perfect for students seeking peaceful life"
    },

    {
      title: "Travel & Exploration",
      subtitle: "Must Visit",
      icon: "MapPin",
      color: "#0284c7",
      items: [
        "Queenstown",
        "Milford Sound",
        "Auckland Sky Tower"
      ],
      footer: "Adventure • Mountains • Nature"
    },

    {
      title: "Education & Campus Life",
      subtitle: "Support Services",
      icon: "Home",
      color: "#7c3aed",
      items: [
        "Practical learning approach",
        "Research & innovation focus",
        "Small classroom sizes",
        "Student support services",
        "Internship opportunities"
      ],
      footer: "Balanced academic & personal growth"
    }
  ],

  bottomRow: [
    {
      title: "VISA PROCESS",
      subtitle: "Step-by-Step",
      icon: "FileText",
      color: "#1e40af",
      steps: [
        "Receive admission offer",
        "Arrange financial documents",
        "Apply for student visa",
        "Medical & visa approval"
      ],
      footer: "Simple & transparent process",
      footerColor: "#16a34a"
    },

    {
      title: "ACCOMMODATION",
      subtitle: "Options:",
      icon: "Home",
      color: "#ea580c",
      checkItems: [
        "University hostels",
        "Shared apartments & homestays"
      ],
      rentInfo: "₹35,000 – ₹80,000 / month"
    },

    {
      title: "SAFETY & HEALTHCARE",
      subtitle: "Very Safe Country",
      icon: "ShieldPlus",
      color: "#16a34a",
      heading: "Healthcare:",
      checkItems: [
        "Health insurance mandatory",
        "Good healthcare facilities"
      ],
      footer: "Safe environment for international students",
      footerColor: "#16a34a"
    },

    {
      title: "WEATHER (Important)",
      icon: "Sun",
      color: "#f59e0b",
      checkItems: [
        "Cool winters",
        "Pleasant summers"
      ],
      heading: "Important to know:",
      checkItems: [
        "Weather changes quickly"
      ],
      footer: "Mild climate throughout the year",
      footerColor: "#16a34a"
    },

    {
      title: "Who Should Choose New Zealand?",
      subtitle: "Students who want:",
      icon: "Target",
      color: "#be123c",
      checkItems: [
        "Peaceful & safe environment",
        "Affordable education",
        "Strong PR opportunities",
        "Better work-life balance"
      ]
    }
  ],

  quickFaqs: [
    { q: "IELTS required?", a: "Yes" },
    { q: "Part-time work allowed?", a: "Yes" },
    { q: "PR possible?", a: "Yes" },
    { q: "Safe for International Students?", a: "Very Safe" },
    { q: "Indian food available?", a: "Yes" }
  ]
}

};