import { Users,Lightbulb,MessageCircle,Presentation,FileText,Handshake,Megaphone,Play,Monitor, Settings,Zap,Headphones,TrendingUp,BarChart3, Compass, Laptop,Target, ThumbsUp, Search, Book, BookCheck, GraduationCap, Network, NetworkIcon, Ligature, Badge, BadgeCheck, Globe, Speaker, User2, TableIcon, TargetIcon, Calendar1Icon,Palette ,Pencil,Folder,Trophy,CheckCircle,UserCheck} from "lucide-react";
import { FaIdeal } from "react-icons/fa6";
import { FcIdea } from "react-icons/fc";
import { GiEnergise, GiIdea, GiSkills, Calendar} from "react-icons/gi";
import { GrGrow } from "react-icons/gr";
export const serviceData = {
  "career-counselling": {
    category: "CAREER COUNSELLING",
    title: "The Right Guidance For a",
    titleAccent: "Successful Future",
    description: "Pushpa Global Solutions helps students discover their strengths, interests, and future pathways through personalized career counselling and scientific assessments.",
    
    // ✅ Screenshot ke according 2 main images
    images: {
      heroImg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf", // Hero section ki right-side image
      journeyImg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf" // Journey section ki left-side image
    },

    heroPoints: ["Clarity & Direction", "Expert Counsellors", "Future-Ready Planning"],
    overview: "At Pushpa Global Solutions, we believe every student deserves clarity, confidence, and direction when choosing a career. Our counselling services use scientific assessments and human expertise to help students make practical, relevant, and future-ready decisions aligned with their strengths, interests, and aspirations.",
    
    offers: [
      { title: "Psychometric Assessment", desc: "Scientific tests to reveal aptitude, personality, and interests.", icon: "🧠" },
      { title: "Personalized Guidance", desc: "One-on-one counselling to understand academic goals.", icon: "👥" },
      { title: "Stream Selection", desc: "Guidance for choosing the right stream after Class 10 & 12.", icon: "🧭" },
      { title: "Career Roadmap", desc: "Step-by-step roadmaps covering academics and skills.", icon: "📊" },
      { title: "College Selection", desc: "Best-fit course and college shortlisting based on profile.", icon: "🎓" },
      { title: "Skill Development", desc: "Build stronger profiles through internships and skills.", icon: "📈" },
      { title: "Continuous Mentorship", desc: "Ongoing mentoring to stay aligned with changing goals and opportunities.", icon: "🤝" },
      { title: "Global Career Opportunities", desc: "Guidance for international internships, networking, and career growth.", icon: "🌐" },
    ],
    
    benefits: {
        titles: {
            first: "POPULAR DESTINATIONS",
            second: "WHO CAN BENEFIT",
            third: "WHY CHOOSE US"
        },
      who: ["Students of Class 8-10 exploring early career awareness", "Students of Class 11-12 deciding on streams and future courses", "Graduates confused about higher education or career direction", "Students planning to study in India or abroad", "Parents seeking expert guidance for their children"],
      whyCounselling: ["Clarity and direction for future decisions", "Confident decision-making backed by expert guidance", "Personalized planning based on strengths and interests", "Future-ready alignment with industry trends"," Reduced risk of wrong course or college choices"],
      whyPushpa: ["Experienced and industry-aligned counsellors", "Scientific and data-driven assessment approach", "Personalized attention and mentoring", "Strong network of schools, colleges, and universities","Holistic guidance covering academics, skills, and career growth"]
    },

    // Journey Section Details (Screenshot wala Dark Section)
    journeyTitle: "Start Your Career",
    journeyTitleAccent: "Journey Today",
    journeyDescription: "The right guidance can unlock opportunities that truly match a student's potential and aspirations.",
    steps: [
        { 
            id: 1, 
            label: "Understand", 
            desc: "We understand academic background, strengths, and aspirations.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Assess", 
            desc: "Psychometric tools evaluate aptitude, interests, and personality.",
            icon: <BarChart3 size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Guide", 
            desc: "Personalized recommendations align with future opportunities.",
            icon: <Compass size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Plan", 
            desc: "Clear roadmaps outline courses, colleges, and timelines.",
            icon: <Laptop size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Support", 
            desc: "Ongoing mentorship helps students stay on the right path.",
            icon: <ThumbsUp size={20} color="white" />
        }
    ],
    journeyBelowDescription:"Your career is one of the most important decisions of your life. Connect with our expert counsellors and discover the path that is right for you.",
  },
  "student-counselling": {
    category: "STUDENT COUNSELLING",
    title: "Academic Guidance With Clarity For ",
    titleAccent: "Every Student Journey",
    description: "Pushpa Global Solutions offers personalized student counselling that helps learners make informed decisions about subjects, colleges, courses, and future pathways with confidence.",
    
    // ✅ Screenshot ke according 2 main images
    images: {
      heroImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", // Hero section ki right-side image
      journeyImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644" // Journey section ki left-side image
    },

    heroPoints: ["Clarity & Direction", "Expert Counsellors", "Future-Ready Planning"],
    overview: "Our student counselling services support learners at every stage of their academic journey. From subject and stream selection to college planning and long-term career alignment, we provide structured, personalized guidance that simplifies choices and helps students move forward with clarity and confidence.",
    
    offers: [
        {
            title: "Academic Planning",
            desc: "Clear academic roadmaps through subject selection and future course planning.",
            icon: "🗺️",
        },
        {
            title: "Profile Building",
            desc: "Support with extracurriculars, certifications, internships, and skill building.",
            icon: "📈",
        },
        {
            title: "Course & Career Alignment",
            desc: "Course choices matched with interests, strengths, and long-term goals.",
            icon: "🧭",
        },
        {
            title: "College Shortlisting",
            desc: "Institution selection based on academics, budget, location, and objectives.",
            icon: "🏛️",
        },
        {
            title: "Admission Guidance",
            desc: "Application, documentation, deadlines, and interview support from start to finish.",
            icon: "📝",
        },
        {
            title: "Entrance Exam Guidance",
            desc: "Preparation strategies, planning timelines, and performance improvement support.",
            icon: "📚",
        },
        {
            title: "Continuous Mentorship",
            desc: "Ongoing guidance that helps students stay aligned with changing goals.",
            icon: "🤝",
        },
        {
            title: "Scholarship Assistance",
            desc: "Support in finding scholarships, grants, and financial aid opportunities.",
            icon: "💰",
        },
    ],
    
    benefits: {
      titles: {
            first: "POPULAR DESTINATIONS",
            second: "WHO CAN BENEFIT",
            third: "WHY CHOOSE US"
        },
      who: [" School students from Class 9-12 planning academic paths", "Students preparing for college admissions", " Students unsure about course or college selection", "Parents seeking expert academic guidance", "Students aiming for higher education in India or abroad"],
      whyCounselling: ["Clear academic direction with less confusion", "Better college opportunities through strategic planning", "Stronger student profiles and competitiveness", "More confident decision-making","  Better use of time and stronger holistic development"],
      whyPushpa: ["Personalized, student-centric approach", "Experienced counsellors with industry insights", "End-to-end support from planning to admission", "Strong network of institutions and academic partners"," Focus on long-term success and right opportunities"]
    },

    // Journey Section Details (Screenshot wala Dark Section)
    journeyTitle: "Start Your ",
    journeyTitleAccent: "Academic Journey ",
    journeyDescription: "Every student's journey is unique, and the right support can make a meaningful difference in academic outcomes and future success.",
    steps: [
        { 
            id: 1, 
            label: "Assess", 
            desc: "Understand academic background and future aspirations.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Align", 
            desc: "Psychometric tools evaluate aptitude, interests, and personality.",
            icon: <Compass size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Plan", 
            desc: "Create clear academic and admission roadmaps.",
            icon: <BookCheck size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Apply", 
            desc: "Support students through admissions and next steps.",
            icon: <GraduationCap size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Grow", 
            desc: "Continue mentoring for long-term progress and confidence.",
            icon: <NetworkIcon size={20} color="white" />
        }
    ],
    journeyBelowDescription:"Connect with Pushpa Global Solutions to unlock the opportunities that best match your potential and move forward with confidence toward academic success.",
  },
  "study-abroad-guidance": {
    category: "STUDY ABROAD GUIDANCE",
    title: "Start Your Global Education ",
    titleAccent: "Journey With Confidence",
    description: "Pushpa Global Solutions provides personalized study abroad guidance to help students choose the right country, university, and course while receiving end-to-end support from applications to post-arrival settlement.",
    
    // ✅ Screenshot ke according 2 main images
    images: {
      heroImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644", // Hero section ki right-side image
      journeyImg: "https://images.unsplash.com/photo-1523240795612-9a054b0db644" // Journey section ki left-side image
    },

    heroPoints: ["Clarity & Direction", "Expert Counsellors", "Future-Ready Planning"],
    overview: "Studying abroad is a life-changing decision that opens doors to world-class education, global careers, and diverse cultural experiences. Our personalized approach helps students navigate every stage of the journey, from choosing the right destination and university to visas, departure, and settling in abroad.",
    
    offers: [
    {
        title: "Country & University Selection",
        desc: "Guidance based on goals, budget, career prospects, and visa success rates.",
        icon: "🌐",
    },
    {
        title: "Course & Career Alignment",
        desc: "Course selection aligned to interests and long-term global career pathways.",
        icon: "🧭",
    },
    {
        title: "Application Assistance",
        desc: "End-to-end application preparation, review, and submission support.",
        icon: "📝",
    },
    {
        title: "SOP & LOR Guidance",
        desc: "Compelling documents that highlight strengths, goals, and achievements.",
        icon: "📄",
    },
    {
        title: "Scholarship & Financial Guidance",
        desc: "Support for scholarships, financial aid, and budget planning.",
        icon: "💰",
    },
    {
        title: "Visa Assistance",
        desc: "Help with documentation, interview preparation, and compliance.",
        icon: "🛂",
    },
    {
        title: "Pre-Departure Support",
        desc: "Guidance on accommodation, travel, cultural readiness, and essentials.",
        icon: "🧳",
    },
    {
        title: "Post-Arrival Support",
        desc: "Continued support as students settle into their new environment abroad.",
        icon: "🏠",
    },
    ],
    
    benefits: {
        titles: {
            first: "POPULAR DESTINATIONS",
            second: "WHO CAN BENEFIT",
            third: "WHY CHOOSE US"
        },

      who: [
        "United Kingdom",
        "United States",
        "Canada",
        "Australia",
        "Ireland and Europe"
      ],
      whyCounselling: [
        "Students planning undergraduate or postgraduate studies abroad",
        "Students seeking international exposure and careers",
        "Working professionals upgrading qualifications globally",
        "Parents seeking trusted guidance for their children"
      ],
      whyPushpa: [
        "End-to-end guidance from counselling to post-arrival support",
        "Personalized approach for every student",
        "Strong network of global universities and partners",
        "High success rate in admissions and visas",
        "Transparent and student-focused process"
      ]
    },

    // Journey Section Details (Screenshot wala Dark Section)
    journeyTitle: "Benefits of  ",
    journeyTitleAccent: "Studying Abroad",
    journeyDescription: "International education offers unmatched advantages that shape both personal growth and long-term professional success.",
    steps: [
        { 
            id: 1, 
            label: "Exposure", 
            desc: "Experience diverse cultures and perspectives.",
            icon: <Globe size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Education", 
            desc: "Access top-ranked institutions and systems.",
            icon: <GraduationCap size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Careers", 
            desc: "Improve employability with global qualifications",
            icon: <BookCheck size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Skills", 
            desc: "Build independence, adaptability, and communication.",
            icon: <BadgeCheck size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Network", 
            desc: "Connect with international peers and professionals.",
            icon: <NetworkIcon size={20} color="white" />
        }
    ],
    journeyBelowDescription:"Your dream of studying abroad is closer than you think. Connect with Pushpa Global Solutions and take the first step toward world-class education, global exposure, and international success.",
  },
  "university-partnerships": {
    category: "UNIVERSITY PARTNERSHIPS",
    title: "Stronger University",
    titleAccent: "Connections For Sustainable Growth",
    description: "Pushpa Global Solutions helps universities expand their reach, strengthen brand presence, and build a sustainable admission pipeline through strategic partnerships and targeted outreach initiatives.",
    
    // ✅ Screenshot ke according 2 main images
    images: {
      heroImg: "https://media.istockphoto.com/id/1132232689/photo/they-all-bring-something-different-to-the-table.jpg?s=170667a&w=0&k=20&c=Gsgy8UFSYwISnQ73ks6_tGIOaWI0OQbJumUXQgmnKIQ=", // Hero section ki right-side image
      journeyImg: "https://media.istockphoto.com/id/1132232689/photo/they-all-bring-something-different-to-the-table.jpg?s=170667a&w=0&k=20&c=Gsgy8UFSYwISnQ73ks6_tGIOaWI0OQbJumUXQgmnKIQ=" // Journey section ki left-side image
    },

    heroPoints: ["Clarity & Direction", "Expert Counsellors", "Future-Ready Planning"],
    overview: "We bridge the gap between universities and students through strategic partnerships and targeted outreach. Our University Partnership services help institutions attract, engage, and enroll quality students by combining strong regional networks, brand-building strategies, and end-to-end recruitment support.",
    
    offers: [
      { 
        title: "Institutional Tie-Ups", 
        desc: "Meaningful collaborations with schools, counsellors, and education networks.", 
        icon: "🔗" 
      },
      { 
        title: "Student Outreach Programs", 
        desc: "School visits, seminars, fairs, and sessions that build awareness and trust.", 
        icon: "📣" 
      },
      { 
        title: "Admission Pipeline Development", 
        desc: "Structured lead generation through campaigns, counselling networks, and engagement.", 
        icon: "🧭" 
      },
      { 
        title: "Brand Promotion & Visibility", 
        desc: "Digital marketing, on-ground events, and strategic promotions for stronger presence.", 
        icon: "🌟" 
      },
      { 
        title: "Regional Expansion Support", 
        desc: "Localized entry into new markets, including East and North-East India.", 
        icon: "📍" 
      },
      { 
        title: "Event & Activation Management", 
        desc: "Education fairs and exclusive university sessions that drive direct engagement.", 
        icon: "🎪" 
      },
      { 
        title: "Data-Driven Insights", 
        desc: "Actionable insights on student preferences, trends, and regional demand.", 
        icon: "📊" 
      },
      { 
        title: "Digital Growth & Engagement", 
        desc: "Strategic online campaigns, social media outreach, and student engagement activities.", 
        icon: "📈" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF UNIVERSITY PARTNERSHIPS",
            third: "WHY CHOOSE US"
        },
      who: [" Universities and colleges expanding student recruitment", " International institutions entering the Indian market", "Institutions increasing brand visibility and outreach", "Universities seeking school and counsellor networks", "Education providers targeting specific regions or demographics"],
      whyCounselling: [" Increased student enrolments from relevant audiences", "Stronger brand visibility across key regions", "Targeted outreach with structured engagement strategies", "More credibility and trust among students and parents"," Consistent pipeline of qualified leads and market expansion"],
      whyPushpa: ["Extensive network of schools, counsellors, and student communities", "Strong presence in key and emerging regions", " Proven expertise in student recruitment and outreach", "Customized strategies tailored to each institution","End-to-end support with long-term growth focus"]
    },

    // Journey Section Details (Screenshot wala Dark Section)
    journeyTitle: "Partner With Us",
    journeyTitleAccent: "For Growth",
    journeyDescription: "In a dynamic education ecosystem, the right partnerships can transform institutional success through stronger connections, sharper positioning, and consistent recruitment outcomes.",
    steps: [
        { 
            id: 1, 
            label: "Assess", 
            desc: "Understand institutional goals and target regions.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Connect", 
            desc: "Build school, counsellor, and community partnerships.",
            icon: <Network size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Promote", 
            desc: "Increase visibility through campaigns and activations.",
            icon: <Speaker size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Engage", 
            desc: "Drive direct interaction with prospective students.",
            icon: <User2 size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Grow", 
            desc: "Build a sustainable admission pipeline and long-term growth.",
            icon: <GrGrow size={20} color="white" />
        }
    ],
    journeyBelowDescription:"Collaborate with Pushpa Global Solutions to expand your reach, strengthen your brand, and create a consistent pipeline of quality students through strategic university partnerships.",
  },
  "school-partnerships": {
    category: "SCHOOL PARTNERSHIPS",
    title: "Building Future-Ready Students",
    titleAccent: "Through School Partnerships",
    description: "Pushpa Global Solutions partners with schools to deliver structured career guidance, academic planning, counselling support, and future-readiness programs that strengthen student outcomes and add value to institutions.",
    
    // ✅ You can change these images later as per screenshot
    images: {
      heroImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      journeyImg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
    },

    heroPoints: ["Career Clarity", "Structured Guidance", "Future Readiness"],
    overview: "Schools play a crucial role in shaping students' academic and career journeys. Our School Partnership program helps institutions provide structured career guidance, academic planning, counselling support, and meaningful exposure so students can make informed future decisions while schools strengthen their academic ecosystem.",
    
    offers: [
      { 
        title: "Career Guidance Programs", 
        desc: "Structured counselling sessions on career options, trends, and future pathways.", 
        icon: "🧭" 
      },
      { 
        title: "Stream Selection Support", 
        desc: "Guidance after Class 10 aligned to interests, aptitude, and career goals.", 
        icon: "📘" 
      },
      { 
        title: "Psychometric Assessments", 
        desc: "Scientific assessments for aptitude, personality, and interest-based guidance.", 
        icon: "📊" 
      },
      { 
        title: "Workshops & Seminars", 
        desc: "Interactive sessions for students, parents, and teachers on key future topics.", 
        icon: "🎤" 
      },
      { 
        title: "Parent Counselling", 
        desc: "Sessions that help parents support informed academic and career decisions.", 
        icon: "👨‍👩‍👧" 
      },
      { 
        title: "College & University Connect", 
        desc: "Institution interactions that expose students to higher education options.", 
        icon: "🎓" 
      },
      { 
        title: "Skill Development & Exposure", 
        desc: "Programs that build communication, critical thinking, and leadership skills.", 
        icon: "💡" 
      },
      { 
        title: "Annual Career Planning", 
        desc: "Ongoing support across the academic year for consistent student guidance.", 
        icon: "📅" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF SCHOOL PARTNERSHIPS",
            third: "WHY PARTNER WITH US"
        },
      who: [
        "Schools enhancing career guidance programs",
        "Institutions providing structured counselling support",
        "Schools seeking university and education provider partnerships",
        "Students from Class 8-12 exploring pathways",
        "Parents seeking expert guidance for their children"
      ],
      whyCounselling: [
        "Better student clarity and confidence in career decisions",
        "Structured counselling framework for schools",
        "Improved school reputation through holistic development support",
        "Stronger parent engagement and trust",
        "Better higher education readiness and opportunities"
      ],
      whyPushpa: [
        "Experienced team of career and education consultants",
        "Customized programs for each school's needs",
        "Strong network of universities and industry connections",
        "Proven expertise in counselling and outreach",
        "End-to-end support with long-term collaboration focus"
      ]
    },

    // Journey Section
    journeyTitle: "Build Future-Ready Students",
    journeyTitleAccent: "Together",
    journeyDescription: "Our partnerships are designed to create meaningful long-term impact for both schools and students through consistent guidance, exposure, and strategic support.",
    steps: [
        { 
            id: 1, 
            label: "Understand", 
            desc: "Assess school goals and student support needs.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Design", 
            desc: "Create customized counselling and engagement programs.",
            icon: <TargetIcon size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Engage", 
            desc: "Run sessions for students, parents, and school stakeholders.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Support", 
            desc: "Provide year-round guidance and expert resources.",
            icon: <Calendar1Icon size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Grow", 
            desc: "Strengthen outcomes, reputation, and future readiness.",
            icon: <GrGrow size={20} color="white" />
        },
    ],
    journeyBelowDescription: "Empowering students with the right guidance today creates successful leaders of tomorrow. Partner with Pushpa Global Solutions to strengthen your academic ecosystem and support long-term student success.",
  },
  "nift-nid-uceed-coaching": {
    category: "DESIGN ENTRANCE COACHING",
    title: "Turn Your Creative Potential",
    titleAccent: "Into a Design Career",
    description: "Pushpa Global Solutions offers comprehensive coaching for NIFT, NID, UCEED, and top private design universities, helping students build creative fundamentals, portfolio strength, and admission readiness.",
    
    // ✅ Replace these images as per your design
    images: {
      heroImg: "https://images.unsplash.com/photo-1516321497487-e288fb19713f",
      journeyImg: "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
    },

    heroPoints: ["Creative Foundation", "Portfolio Excellence", "Admission Readiness"],
    overview: "The design industry offers high-growth opportunities across fashion, communication design, product design, UI/UX, animation, interior design, and more. Our coaching program prepares students for NIFT, NID, UCEED, and private design university admissions through structured preparation, creative skill development, portfolio building, and personalized mentorship.",
    
    offers: [
      { 
        title: "Entrance Exam Preparation", 
        desc: "Structured coaching for NIFT, NID, and UCEED with exam-focused preparation.", 
        icon: "📝" 
      },
      { 
        title: "Private University Admissions", 
        desc: "Targeted guidance for IIAD, UID, WUD, Srishti, and other design schools.", 
        icon: "🏛️" 
      },
      { 
        title: "Creative Skill Development", 
        desc: "Sketching, visualization, design thinking, color theory, and composition.", 
        icon: "✏️" 
      },
      { 
        title: "Studio-Based Learning", 
        desc: "Hands-on sessions, live assignments, and real-world design challenges.", 
        icon: "🧪" 
      },
      { 
        title: "Portfolio Development", 
        desc: "Original project creation, portfolio structuring, and presentation guidance.", 
        icon: "🗂️" 
      },
      { 
        title: "Situation Test & Interviews", 
        desc: "Focused preparation for studio tests, interviews, and presentation rounds.", 
        icon: "🎤" 
      },
      { 
        title: "Mock Tests & Analysis", 
        desc: "Real exam simulations, detailed feedback, and performance improvement support.", 
        icon: "📊" 
      },
      { 
        title: "Personalized Mentorship", 
        desc: "Individual attention tailored to each student's strengths and growth areas.", 
        icon: "🤝" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF OUR COACHING",
            third: "WHY CHOOSE US"
        },
      who: [
        "Students of Class 10-12 aspiring for design careers",
        "Students preparing for NIFT, NID, and UCEED",
        "Creative learners targeting private design universities",
        "Students exploring fashion, UI/UX, product, and communication design",
        "Students looking to build a strong portfolio"
      ],
      whyCounselling: [
        "Strong creative and visualization foundation",
        "Exam-oriented preparation aligned to entrance patterns",
        "Professional and impactful portfolio development",
        "Holistic readiness for exams, interviews, and studio rounds",
        "Better admission chances in top design institutes"
      ],
      whyPushpa: [
        "Experienced mentors with design expertise",
        "Dual focus on government and private institutions",
        "Personalized coaching approach",
        "Practical studio-based learning methodology",
        "Strong emphasis on creativity and portfolio development"
      ]
    },

    // Journey Section
    journeyTitle: "Career Opportunities in Design",
    journeyTitleAccent: "Your Creative Future",
    journeyDescription: "A design education opens doors to diverse and high-growth career opportunities across creative and digital industries.",
    steps: [
        { 
            id: 1, 
            label: "Foundation", 
            desc: "Build strong creative basics and design thinking.",
            icon: <Palette size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Skill Building", 
            desc: "Develop sketching, visualization, and practical skills.",
            icon: <Pencil size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Portfolio", 
            desc: "Create a professional and impactful portfolio.",
            icon: <Folder size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Preparation", 
            desc: "Intensive mock tests, situation tests & interviews.",
            icon: <Target size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Success", 
            desc: "Secure admission in top design institutes.",
            icon: <Trophy size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Whether your goal is to crack NIFT, NID, or UCEED, or secure admission into top private design universities, Pushpa Global Solutions provides the right guidance, preparation, and exposure to help you turn your passion into a profession.",
  },
  "teacher-recruitment": {
    category: "TEACHER RECRUITMENT",
    title: "Build a Strong Academic Team",
    titleAccent: "With the Right Talent",
    description: "Pushpa Global Solutions helps schools, colleges, and educational institutions identify, attract, and hire qualified educators through a structured recruitment process backed by industry expertise and strong academic networks.",
    
    // ✅ Replace these images later
    images: {
      heroImg: "https://images.unsplash.com/photo-1513258496099-48168024aec0",
      journeyImg: "https://images.unsplash.com/photo-1513258496099-48168024aec0"
    },

    heroPoints: ["Qualified Talent", "Better Hiring Fit", "Faster Turnaround"],
    overview: "Teachers are the foundation of every successful educational institution. Our Teacher Recruitment services help institutions overcome hiring challenges by sourcing, screening, and placing the right educators and academic leaders who align with institutional goals, standards, and long-term growth.",
    
    offers: [
      { 
        title: "Talent Sourcing & Screening", 
        desc: "Qualified teaching professionals identified through strong networks and screening.", 
        icon: "🔎" 
      },
      { 
        title: "Subject-Specific Recruitment", 
        desc: "Hiring support across science, commerce, humanities, arts, IT, and languages.", 
        icon: "📚" 
      },
      { 
        title: "K-12 & Higher Education Hiring", 
        desc: "Recruitment for schools, colleges, universities, and training centers.", 
        icon: "🏫" 
      },
      { 
        title: "Evaluation & Shortlisting", 
        desc: "Structured evaluation of qualifications, experience, skills, and fit.", 
        icon: "✅" 
      },
      { 
        title: "Interview Coordination", 
        desc: "End-to-end interview scheduling, coordination, and feedback support.", 
        icon: "📅" 
      },
      { 
        title: "Leadership Hiring", 
        desc: "Recruitment support for principals, vice principals, heads, and coordinators.", 
        icon: "🏛️" 
      },
      { 
        title: "Quick Turnaround & Bulk Hiring", 
        desc: "Fast, scalable hiring support for urgent and large staffing requirements.", 
        icon: "⚡" 
      },
      { 
        title: "Employer Branding Support", 
        desc: "Position institutions as attractive employers for top teaching talent.", 
        icon: "🌟" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF OUR RECRUITMENT",
            third: "WHY CHOOSE US"
        },
      who: [
        "Schools across CBSE, ICSE, IB, and State Boards",
        "Colleges and universities",
        "Coaching institutes and training centers",
        "EdTech and skill development organizations",
        "Institutions expanding or upgrading faculty"
      ],
      whyCounselling: [
        "Access to qualified and pre-screened talent",
        "Time and cost efficiency in hiring",
        "Better decisions through thorough evaluation",
        "Improved academic quality and outcomes",
        "Scalable, lower-risk hiring solutions"
      ],
      whyPushpa: [
        "Extensive network of qualified educators",
        "Deep understanding of academic requirements",
        "Structured and transparent recruitment process",
        "Customized solutions for each institution",
        "Strong focus on quality, not just quantity"
      ]
    },

    // Journey Section
    journeyTitle: "Our Recruitment Process",
    journeyTitleAccent: "Simple & Effective",
    journeyDescription: "We follow a systematic process to identify the right academic talent and help institutions close positions smoothly and efficiently.",
    steps: [
        { 
            id: 1, 
            label: "Understand", 
            desc: "Analyze the institution's specific hiring needs.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Source", 
            desc: "Identify suitable candidates through multiple channels.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Evaluate", 
            desc: "Conduct assessments, screening, and shortlisting.",
            icon: <CheckCircle size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Coordinate", 
            desc: "Manage interviews and streamline the hiring process.",
            icon: <Calendar1Icon size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Onboard", 
            desc: "Support final selection and smooth closure of roles.",
            icon: <UserCheck size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Hiring the right educators is key to building a successful institution. Partner with Pushpa Global Solutions to build a capable, future-ready academic team that supports long-term excellence and growth.",
  },
  "it-support-services": {
    category: "IT SUPPORT & SERVICES",
    title: "Reliable Technology Solutions",
    titleAccent: "For Growth and Efficiency",
    description: "Pushpa Global Solutions delivers comprehensive IT Support & Services for educational institutions and businesses, helping organizations build secure, scalable, and efficient digital ecosystems.",
    
    // ✅ Replace these images later as per design
    images: {
      heroImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      journeyImg: "https://images.unsplash.com/photo-1451187580459-43490279c0fa"
    },

    heroPoints: ["Strong Infrastructure", "Secure Systems", "Ongoing Support"],
    overview: "In today’s digital-first world, technology is essential for seamless operations and better learning experiences. Our IT Support & Services help schools, colleges, universities, and businesses leverage technology effectively through reliable infrastructure, system management, ongoing support, and scalable digital solutions.",
    
    offers: [
      { 
        title: "IT Infrastructure Setup", 
        desc: "Computer labs, smart classrooms, networking, servers, and hardware integration.", 
        icon: "🧩" 
      },
      { 
        title: "Website Development", 
        desc: "Responsive websites, CMS setup, maintenance, and digital presence support.", 
        icon: "🌐" 
      },
      { 
        title: "CRM & Automation", 
        desc: "Student systems, lead management, admissions automation, and reporting tools.", 
        icon: "⚙️" 
      },
      { 
        title: "Technical Support", 
        desc: "Troubleshooting, upgrades, preventive maintenance, and remote or on-site support.", 
        icon: "🛠️" 
      },
      { 
        title: "Digital Marketing Support", 
        desc: "SEO, social media management, campaigns, and branding strategy support.", 
        icon: "📣" 
      },
      { 
        title: "Data Security & Backup", 
        desc: "Backup, recovery, firewall, antivirus, and secure access management.", 
        icon: "🔐" 
      },
      { 
        title: "Software & App Support", 
        desc: "Software installation, integrations, custom solutions, and system optimization.", 
        icon: "💻" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF OUR IT SERVICES",
            third: "WHY CHOOSE US"
        },
      who: [
        "Schools, colleges, and universities",
        "Coaching institutes and training centers",
        "Educational consultancies and agencies",
        "Corporate offices and startups",
        "Organizations upgrading IT infrastructure"
      ],
      whyCounselling: [
        "Improved operational efficiency and less manual work",
        "Better online visibility and digital engagement",
        "Reliable performance with reduced downtime",
        "Scalable solutions as your organization grows",
        "Strong data protection and cost-effective IT management"
      ],
      whyPushpa: [
        "End-to-end IT solutions under one roof",
        "Customized services based on your needs",
        "Experienced technical team and industry expertise",
        "Quick response with reliable support",
        "Focus on long-term technology growth"
      ]
    },

    // Journey Section
    journeyTitle: "Our Approach",
    journeyTitleAccent: "Structured & Effective",
    journeyDescription: "We follow a structured and client-focused process to build and support reliable IT ecosystems that align with your present needs and future growth.",
    steps: [
        { 
            id: 1, 
            label: "Analyze", 
            desc: "Understand current systems and future goals.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Design", 
            desc: "Create tailored IT strategies and solutions.",
            icon: <Settings size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Implement", 
            desc: "Deploy systems efficiently with minimal disruption.",
            icon: <Zap size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Support", 
            desc: "Provide ongoing technical assistance and maintenance.",
            icon: <Headphones size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Scale", 
            desc: "Upgrade and expand systems as needs evolve.",
            icon: <TrendingUp size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Technology is the backbone of modern success. Partner with Pushpa Global Solutions to build a reliable, secure, and future-ready IT ecosystem that improves efficiency, enhances user experience, and drives long-term growth.",
  },
  "interactive-panels": {
    category: "SMART CLASSROOM SOLUTIONS",
    title: "Smarter Classrooms and Training Spaces",
    titleAccent: "With Interactive Panels",
    description: "Pushpa Global Solutions provides advanced Interactive Panel solutions that modernize classrooms, training centers, and corporate environments with engaging, visually rich, and technology-driven learning experiences.",
    
    // ✅ Replace these images later as per design
    images: {
      heroImg: "https://images.unsplash.com/photo-1588072432904-843af37f03ed",
      journeyImg: "https://images.unsplash.com/photo-1577896851231-70ef18881754"
    },

    heroPoints: ["Engaging Learning", "Smart Integration", "Full Support"],
    overview: "The future of education is interactive, digital, and engaging. Our Interactive Panel solutions help institutions transform traditional teaching into technology-driven learning by combining advanced hardware, smart classroom integration, training, and ongoing support in one complete ecosystem.",
    
    offers: [
      { 
        title: "Panel Sales & Installation", 
        desc: "High-resolution touch-enabled panels with setup tailored to your space.", 
        icon: "🖥️" 
      },
      { 
        title: "Smart Classroom Setup", 
        desc: "Integration of interactive panels, AV systems, and digital teaching tools.", 
        icon: "🏫" 
      },
      { 
        title: "Training & Onboarding", 
        desc: "Teacher training, hands-on demos, and guided adoption support.", 
        icon: "🎓" 
      },
      { 
        title: "Content Integration", 
        desc: "E-learning integration, digital resources, and lesson planning support.", 
        icon: "📘" 
      },
      { 
        title: "Maintenance & Support", 
        desc: "Ongoing maintenance, troubleshooting, updates, and technical assistance.", 
        icon: "🛠️" 
      },
      { 
        title: "Corporate Solutions", 
        desc: "Smart panel setups for training rooms, meetings, and collaboration spaces.", 
        icon: "🏢" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF INTERACTIVE PANELS",
            third: "WHY CHOOSE US"
        },
      who: [
        "Schools and educational institutions",
        "Colleges and universities",
        "Coaching centers and training institutes",
        "Corporate organizations",
        "Skill development and learning centers"
      ],
      whyCounselling: [
        "Better engagement through interactive visuals",
        "Improved learning outcomes with multimedia support",
        "Collaborative learning and discussion",
        "Faster access to digital resources and lessons",
        "Eco-friendly, future-ready teaching environment"
      ],
      whyPushpa: [
        "High-quality and reliable panel solutions",
        "End-to-end service from setup to training",
        "Customized deployment based on your needs",
        "Experienced technical and support team",
        "Quick response and ongoing assistance"
      ]
    },

    // Journey Section
    journeyTitle: "Our Implementation Process",
    journeyTitleAccent: "Smooth & Effective",
    journeyDescription: "We follow a structured approach to ensure every interactive panel deployment is smooth, practical, and effective from day one.",
    steps: [
        { 
            id: 1, 
            label: "Assess", 
            desc: "Understand classroom or organizational requirements.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Design", 
            desc: "Recommend the right interactive panel solution.",
            icon: <Settings size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Install", 
            desc: "Set up systems efficiently with minimal disruption.",
            icon: <Monitor size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Train", 
            desc: "Onboard users with practical guidance and demos.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Support", 
            desc: "Provide ongoing maintenance, assistance, and upgrades.",
            icon: <Headphones size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Interactive Panels are more than a device. They are a gateway to smarter, more engaging, and effective learning experiences. Partner with Pushpa Global Solutions to build future-ready environments that inspire students and empower educators.",
  },
  "career-fairs": {
    category: "CAREER FAIRS",
    title: "Connecting Students and Opportunities",
    titleAccent: "On One Powerful Platform",
    description: "Pushpa Global Solutions organizes high-impact Career Fairs that bring together students, schools, universities, and industry representatives for meaningful interactions, expert guidance, and future-focused opportunities.",
    
    // ✅ Replace these images later
    images: {
      heroImg: "https://images.unsplash.com/photo-1515169067868-5387ec356754",
      journeyImg: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    },

    heroPoints: ["Direct Exposure", "Meaningful Connections", "Diverse Pathways"],
    overview: "Career Fairs play a vital role in bridging the gap between students, educational institutions, and career opportunities. Through structured planning and strong institutional networks, we create events that help students explore career options, institutions connect with potential applicants, and schools strengthen their academic ecosystem.",
    
    offers: [
      { 
        title: "School & Student Engagement", 
        desc: "Tailored fairs that connect students with institutions and career experts.", 
        icon: "🏫" 
      },
      { 
        title: "University Participation", 
        desc: "Representation from top universities, colleges, and education providers.", 
        icon: "🎓" 
      },
      { 
        title: "Career Guidance Sessions", 
        desc: "Expert-led seminars on careers, trends, study abroad, and future readiness.", 
        icon: "🎤" 
      },
      { 
        title: "One-on-One Counselling", 
        desc: "Personalized guidance with counsellors and university representatives.", 
        icon: "💬" 
      },
      { 
        title: "Stream & Career Exploration", 
        desc: "Explore pathways in design, engineering, business, humanities, and more.", 
        icon: "🧭" 
      },
      { 
        title: "Event Planning & Execution", 
        desc: "End-to-end management from partnerships to on-ground event support.", 
        icon: "🛠️" 
      },
      { 
        title: "Regional & Targeted Events", 
        desc: "Focused career fairs across key and emerging education markets.", 
        icon: "📍" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF CAREER FAIRS",
            third: "WHY CHOOSE US"
        },
      who: [
        "Students from Class 9–12 exploring careers",
        "Schools providing exposure and guidance",
        "Universities seeking recruitment opportunities",
        "Parents understanding academic pathways",
        "Education providers connecting with applicants"
      ],
      whyCounselling: [
        "Direct exposure to multiple institutions",
        "Better decisions with real-time guidance",
        "Networking with universities and professionals",
        "Increased visibility for institutions",
        "Efficient outreach through one event platform"
      ],
      whyPushpa: [
        "Strong network of schools and universities",
        "Expertise in large-scale and targeted events",
        "Focus on quality engagement and outcomes",
        "Customized strategies by audience and region",
        "Proven execution and event management track record"
      ]
    },

    // Journey Section
    journeyTitle: "Our Approach",
    journeyTitleAccent: "To Impactful Career Fairs",
    journeyDescription: "We follow a structured process to deliver impactful Career Fairs that create meaningful value for students, institutions, and schools.",
    steps: [
        { 
            id: 1, 
            label: "Plan", 
            desc: "Define target audience and event objectives.",
            icon: <Target size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Partner", 
            desc: "Collaborate with schools and institutions.",
            icon: <Handshake size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Onboard", 
            desc: "Invite and manage universities and stakeholders.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Promote", 
            desc: "Drive maximum student participation.",
            icon: <Megaphone size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Execute", 
            desc: "Deliver a seamless on-ground experience.",
            icon: <Play size={20} color="white" />
        },
        { 
            id: 6, 
            label: "Support", 
            desc: "Provide follow-up engagement and insights.",
            icon: <TrendingUp size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Career Fairs are more than just events. They are platforms that shape future decisions and open doors to opportunity. Partner with Pushpa Global Solutions to create impactful career fair experiences that truly make a difference.",
  },
  "workshops-seminars": {
    category: "WORKSHOPS & SEMINARS",
    title: "Expert-Led Learning Experiences",
    titleAccent: "Beyond the Classroom",
    description: "Pushpa Global Solutions designs interactive workshops and seminars that give students practical exposure, industry insights, and the confidence to make informed academic and career decisions.",
    
    // ✅ Replace these images later
    images: {
      heroImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      journeyImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },

    heroPoints: ["Practical Exposure", "Career Clarity", "Skill Building"],
    overview: "In today’s rapidly evolving academic and professional landscape, students need more than theoretical knowledge. They need practical exposure, industry insights, and real-world understanding. Our workshops and seminars bridge that gap by bringing expert knowledge directly to students through interactive, informative, and institution-focused sessions.",
    
    offers: [
      { 
        title: "Career Awareness Workshops", 
        desc: "Sessions that explore career paths, emerging industries, and future opportunities.", 
        icon: "🧭" 
      },
      { 
        title: "Stream Selection Seminars", 
        desc: "Guidance after Class 10 based on aptitude, interests, and career goals.", 
        icon: "📘" 
      },
      { 
        title: "Study Abroad Seminars", 
        desc: "Insights into destinations, admissions, scholarships, and visa processes.", 
        icon: "🌍" 
      },
      { 
        title: "Skill Development Workshops", 
        desc: "Training in communication, leadership, teamwork, and time management.", 
        icon: "🛠️" 
      },
      { 
        title: "Design & Creative Workshops", 
        desc: "Creative career exposure, portfolio basics, and design entrance guidance.", 
        icon: "🎨" 
      },
      { 
        title: "Parent Awareness Sessions", 
        desc: "Sessions that help parents understand modern career and academic pathways.", 
        icon: "👨‍👩‍👧" 
      },
      { 
        title: "Expert-Led Sessions", 
        desc: "Delivered by counsellors, industry experts, university representatives, and mentors.", 
        icon: "🎤" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF PROGRAMS",
            third: "WHY CHOOSE US"
        },
      who: [
        "School students from Class 8–12",
        "College students planning higher education",
        "Parents seeking guidance for their children",
        "Schools and institutions enhancing student awareness",
        "Students exploring study abroad and emerging careers"
      ],
      whyCounselling: [
        "Enhanced awareness of careers and academic pathways",
        "Practical exposure beyond textbooks",
        "Better decisions on streams, courses, and careers",
        "Stronger communication and life skills",
        "More confidence through engaging learning experiences"
      ],
      whyPushpa: [
        "Customized workshops for institutional needs",
        "Experienced trainers and industry experts",
        "Interactive and student-focused sessions",
        "Strong understanding of education trends",
        "End-to-end planning with proven impact"
      ]
    },

    // Journey Section
    journeyTitle: "Our Approach",
    journeyTitleAccent: "To Impactful Sessions",
    journeyDescription: "Every workshop and seminar is planned to deliver relevance, engagement, and measurable value for students and institutions.",
    steps: [
        { 
            id: 1, 
            label: "Assess", 
            desc: "Understand goals, audience, and session needs.",
            icon: <Search size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Design", 
            desc: "Create relevant and engaging content.",
            icon: <FileText size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Deliver", 
            desc: "Conduct expert-led, interactive sessions.",
            icon: <Presentation size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Engage", 
            desc: "Include Q&A, discussions, and exercises.",
            icon: <MessageCircle size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Follow Up", 
            desc: "Review outcomes and extend support.",
            icon: <CheckCircle size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Workshops and seminars help shape informed, confident, and future-ready individuals. Partner with Pushpa Global Solutions to deliver meaningful learning experiences that inspire, educate, and empower the next generation.",
  },
  "education-events": {
    category: "EDUCATION EVENTS",
    title: "Creating Impactful Experiences",
    titleAccent: "Across the Education Ecosystem",
    description: "Pushpa Global Solutions conceptualizes, organizes, and executes high-impact education events that connect students, institutions, educators, and industry experts through meaningful engagement and measurable outcomes.",
    
    // ✅ Replace these images later
    images: {
      heroImg: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      journeyImg: "https://images.unsplash.com/photo-1540575467063-178a50c2df87"
    },

    heroPoints: ["Student Exposure", "Institutional Visibility", "Regional Reach"],
    overview: "Education Events are powerful platforms that bring together students, institutions, educators, and industry experts to create meaningful learning and networking opportunities. At Pushpa Global Solutions, our events are designed to provide students with exposure, institutions with visibility, and schools with enhanced academic support, making them valuable for every participant.",
    
    offers: [
      { 
        title: "Education Fairs & Expos", 
        desc: "Large-scale fairs that connect students directly with multiple institutions.", 
        icon: "🎪" 
      },
      { 
        title: "Institutional Events", 
        desc: "Open days, campus engagement programs, and exclusive institutional showcases.", 
        icon: "🏫" 
      },
      { 
        title: "Multi-City & Regional Events", 
        desc: "Events across key markets including East and North-East India.", 
        icon: "📍" 
      },
      { 
        title: "Student Engagement Activities", 
        desc: "Live counselling, Q&A sessions, booths, and interactive experience zones.", 
        icon: "💬" 
      },
      { 
        title: "University & Industry Participation", 
        desc: "Strong participation from universities, colleges, and industry partners.", 
        icon: "🎓" 
      },
      { 
        title: "Branding & Promotion", 
        desc: "Event branding, digital campaigns, and targeted outreach for visibility.", 
        icon: "📣" 
      },
      { 
        title: "End-to-End Event Management", 
        desc: "Planning, logistics, onboarding, operations, and on-ground execution.", 
        icon: "🛠️" 
      },
    ],
    
    benefits: {
        titles: {
            first: "WHO CAN BENEFIT",
            second: "BENEFITS OF EVENTS",
            third: "WHY CHOOSE US"
        },
      who: [
        "Students from Class 9–12 and beyond",
        "Schools seeking exposure and guidance for students",
        "Universities and colleges looking for recruitment platforms",
        "Educational organizations building brand visibility",
        "Parents exploring academic pathways"
      ],
      whyCounselling: [
        "Comprehensive exposure in one place",
        "Direct interaction with experts and institutions",
        "Better decision-making with real-time guidance",
        "Stronger visibility for institutions",
        "Efficient outreach and stakeholder engagement"
      ],
      whyPushpa: [
        "Strong network of schools and institutions",
        "Expertise in high-impact event execution",
        "Customized event strategies for each client",
        "Focus on meaningful engagement and outcomes",
        "Proven track record across regions"
      ]
    },

    // Journey Section
    journeyTitle: "Our Events Approach",
    journeyTitleAccent: "From Concept to Impact",
    journeyDescription: "A strategic and structured process to deliver impactful education events from concept to follow-up.",
    steps: [
        { 
            id: 1, 
            label: "Concept", 
            desc: "Define objectives, audience, and event format.",
            icon: <Lightbulb size={20} color="white" />
        },
        { 
            id: 2, 
            label: "Partner", 
            desc: "Collaborate with schools and institutions.",
            icon: <Handshake size={20} color="white" />
        },
        { 
            id: 3, 
            label: "Onboard", 
            desc: "Engage universities and key stakeholders.",
            icon: <Users size={20} color="white" />
        },
        { 
            id: 4, 
            label: "Promote", 
            desc: "Drive participation through targeted outreach.",
            icon: <Megaphone size={20} color="white" />
        },
        { 
            id: 5, 
            label: "Execute", 
            desc: "Deliver seamless on-ground experiences.",
            icon: <Play size={20} color="white" />
        },
        { 
            id: 6, 
            label: "Follow Up", 
            desc: "Share insights, feedback, and next steps.",
            icon: <CheckCircle size={20} color="white" />
        }
    ],
    journeyBelowDescription: "Education Events are more than just gatherings. They are platforms that inspire, inform, and connect. Partner with Pushpa Global Solutions to create meaningful education experiences that open doors to opportunity.",
  },
};