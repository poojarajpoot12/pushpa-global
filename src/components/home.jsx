import { useState, useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "Home", href: "hero" },
  { label: "Study Abroad", href: "courses", children: ["Ireland","Moldova","Europe","Australia","UK","Japan","New Zealand","Dubai","Germany","Canada"] },
  { label: "About Us", href: "about" },
  { label: "Courses", href: "courses" },
  { label: "Services", href: "services", children: ["Career Counselling","Student Counselling","Study Abroad Guidance","University Partnerships","School Partnerships","NIFT/NID/UCEED Coaching","Teacher Recruitment","IT Support & Services","Interactive Panels","Career Fairs","Workshops & Seminars","Education Events"] },
  { label: "Contact Us", href: "contact" },
];

const SERVICES = [
  { icon: "🎓", title: "Career Counselling", desc: "Expert guidance to help students choose the right course & career path aligned with their goals.", color: "#3b82f6" },
  { icon: "🏛️", title: "University Partnerships", desc: "Access to top universities in India and global destinations across 25+ countries.", color: "#8b5cf6" },
  { icon: "✈️", title: "Study Abroad Guidance", desc: "End-to-end support for studying in USA, UK, Canada, Australia, Europe and more.", color: "#06b6d4" },
  { icon: "🤝", title: "School Partnerships", desc: "Collaborating with schools for career guidance programs, fairs, and educational initiatives.", color: "#10b981" },
  { icon: "💼", title: "Career Fairs & Events", desc: "Meet university representatives and explore academic opportunities at curated events.", color: "#f59e0b" },
  { icon: "🖥️", title: "IT Support & Services", desc: "Cutting-edge technology solutions including interactive panels and digital infrastructure.", color: "#ef4444" },
  { icon: "🏆", title: "Teacher Recruitment", desc: "Connecting skilled educators with institutions seeking qualified teaching professionals.", color: "#ec4899" },
  { icon: "📚", title: "Workshops & Seminars", desc: "Structured learning experiences for students, educators, and institutional partners.", color: "#14b8a6" },
];

const STATS = [
  { value: 10000, suffix: "+", label: "Students Guided" },
  { value: 500, suffix: "+", label: "Partner Institutions" },
  { value: 95, suffix: "%", label: "Admission Success Rate" },
  { value: 25, suffix: "+", label: "Countries Covered" },
];

const CATEGORIES = [
  { icon: "⚙️", title: "Engineering & Technology", desc: "Top institutes for Engineering, Computer Science, AI, Data Science, and Technology programs." },
  { icon: "🎨", title: "Design & Creative Arts", desc: "Explore leading universities for Design, Fashion, Animation, Architecture, and Creative Arts." },
  { icon: "📊", title: "Business & Management", desc: "Top universities offering BBA, MBA, Business Analytics, Entrepreneurship, and Global Business." },
  { icon: "🏥", title: "Medical & Healthcare", desc: "Institutions offering Medical, Healthcare, Biotechnology, Pharmacy, and Life Sciences." },
  { icon: "🌍", title: "Study Abroad", desc: "Explore partner universities in USA, UK, Canada, Australia, Europe, and Asia." },
];

const TEAM = [
  { name: "Swapan Roy", role: "Founder & CEO", initials: "SR", a: "#1e40af", b: "#3b82f6" },
  { name: "Sukanta Dey", role: "Strategy & Operations Head", initials: "SD", a: "#065f46", b: "#10b981" },
  { name: "Pradeep Kumar Halder", role: "Admissions, Outreach & Partnerships", initials: "PH", a: "#581c87", b: "#a855f7" },
  { name: "Shaweta Berry", role: "Senior Counsellor – Study Abroad", initials: "SB", a: "#7c2d12", b: "#f97316" },
];

const FAQS = [
  { q: "How does Pushpa Global Solutions help students choose the right course?", a: "We provide personalized career counselling sessions where students can explore their interests, strengths, and future goals. Our experts guide students in selecting the right courses and universities based on their academic background." },
  { q: "Can Pushpa Global Solutions help with study abroad opportunities?", a: "Yes. We help students explore opportunities in the USA, UK, Canada, Australia, Germany, Ireland, and more. Our team supports students throughout the process, including university selection, application guidance, and documentation support." },
  { q: "What services do you provide for universities and institutions?", a: "We collaborate with universities by offering student outreach programs, university partnerships, career fairs, and recruitment support to connect institutions with talented students across different regions." },
  { q: "Do you organize career fairs or education events?", a: "Yes. Pushpa Global Solutions organizes career fairs, university interaction sessions, and education events where students can meet university representatives and explore global education opportunities." },
  { q: "Is career counselling available for students after Class 10 or Class 12?", a: "Yes. Our counselling services are designed especially for students after Class 10 and Class 12, helping them understand different career paths, course options, and future opportunities." },
];

const DESTINATIONS = ["Ireland","Moldova","Europe","Australia","UK","Japan","New Zealand","Dubai","Germany","Canada"];

function smoothTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function useCountUp(target, active) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / 80;
    const t = setInterval(() => { cur += step; if (cur >= target) { setN(target); clearInterval(t); } else setN(Math.floor(cur)); }, 18);
    return () => clearInterval(t);
  }, [active, target]);
  return n;
}

function Reveal({ children, delay = 0, dir = "up" }) {
  const [ref, vis] = useInView();
  const map = { up: "translateY(28px)", down: "translateY(-28px)", left: "translateX(-28px)", right: "translateX(28px)", none: "none" };
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? "none" : map[dir], transition: `opacity 0.65s ${delay}ms ease, transform 0.65s ${delay}ms ease` }}>
      {children}
    </div>
  );
}

function StatBox({ s }) {
  const [ref, vis] = useInView(0.3);
  const n = useCountUp(s.value, vis);
  return (
    <div ref={ref} style={{ textAlign: "center", padding: "44px 16px" }}>
      <div style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{n.toLocaleString()}{s.suffix}</div>
      <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.55)", letterSpacing: 1.2, textTransform: "uppercase" }}>{s.label}</div>
    </div>
  );
}

const CSS = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{font-family:'Segoe UI',system-ui,sans-serif;background:#f8fafc;color:#0f172a;overflow-x:hidden;}
::selection{background:#3b82f6;color:#fff;}
::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-track{background:#f1f5f9;}::-webkit-scrollbar-thumb{background:#3b82f6;border-radius:3px;}
a{text-decoration:none;}
.pill{display:inline-flex;align-items:center;gap:6px;background:rgba(59,130,246,0.1);color:#3b82f6;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;border:1px solid rgba(59,130,246,0.2);}
.gtext{background:linear-gradient(135deg,#1e40af,#3b82f6,#8b5cf6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
.glass{background:rgba(255,255,255,0.88);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);}
.card{transition:transform 0.35s cubic-bezier(.34,1.56,.64,1),box-shadow 0.35s ease;}
.card:hover{transform:translateY(-7px) scale(1.01);box-shadow:0 20px 44px rgba(59,130,246,0.14),0 6px 14px rgba(0,0,0,0.06)!important;}
.svc{position:relative;overflow:hidden;}
.svc::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--c);transform:scaleX(0);transform-origin:left;transition:transform 0.4s ease;}
.svc:hover::before{transform:scaleX(1);}
.shine{position:relative;overflow:hidden;}
.shine::after{content:'';position:absolute;inset:0;background:linear-gradient(45deg,transparent 30%,rgba(255,255,255,0.22) 50%,transparent 70%);transform:translateX(-100%);transition:transform 0.55s ease;}
.shine:hover::after{transform:translateX(100%);}
.dest:hover{background:linear-gradient(135deg,#1e40af,#3b82f6)!important;color:#fff!important;transform:scale(1.06);border-color:transparent!important;}
.dest{transition:all 0.22s ease;}
.faq-open{animation:faqIn 0.32s ease;}
@keyframes faqIn{from{opacity:0;max-height:0}to{opacity:1;max-height:300px}}
.float{animation:float 6s ease-in-out infinite;}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.pulse{animation:pulse 2.8s ease-in-out infinite;}
@keyframes pulse{0%,100%{transform:scale(1);opacity:.55}50%{transform:scale(1.1);opacity:.25}}
.wa{animation:wab 2.2s ease-in-out infinite;}
@keyframes wab{0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-5px) scale(1.03)}}
.navlink{position:relative;}
.navlink::after{content:'';position:absolute;bottom:0;left:14px;right:14px;height:2px;background:linear-gradient(90deg,#3b82f6,#8b5cf6);transform:scaleX(0);transform-origin:left;transition:transform 0.3s ease;border-radius:1px;}
.navlink:hover::after{transform:scaleX(1);}
.team-av{transition:transform 0.4s cubic-bezier(.34,1.56,.64,1);}
.team-card:hover .team-av{transform:scale(1.1) rotate(-4deg);}
input:focus,select:focus,textarea:focus{outline:none;border-color:#3b82f6!important;box-shadow:0 0 0 3px rgba(59,130,246,0.15);}
.slide{animation:slideDown 0.28s ease;}
@keyframes slideDown{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:900px){
  .dn{display:none!important;}
  .sm1{grid-template-columns:1fr!important;}
  .sm2{grid-template-columns:1fr 1fr!important;}
  .smpad{padding:60px 20px!important;}
  .heropad{padding:70px 20px 50px!important;}
  .smh{min-height:auto!important;}
  .toprow{flex-direction:column;gap:4px;text-align:center;padding:8px 20px!important;}
  .navwrap{padding:0 20px!important;}
  .fnav{padding:0 20px 0!important;}
}
@media(max-width:540px){
  .sm2{grid-template-columns:1fr!important;}
  .cat2{grid-template-columns:1fr 1fr!important;}
}
`;

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [drop, setDrop] = useState(null);
  const [faq, setFaq] = useState(null);
  const [bgIdx, setBgIdx] = useState(0);
  const [done, setDone] = useState(false);

  const BGRADS = [
    "linear-gradient(135deg,#0f172a 0%,#1e3a8a 55%,#1e40af 100%)",
    "linear-gradient(135deg,#0f172a 0%,#065f46 55%,#047857 100%)",
    "linear-gradient(135deg,#0f172a 0%,#4c1d95 55%,#7c3aed 100%)",
    "linear-gradient(135deg,#0f172a 0%,#7c2d12 55%,#c2410c 100%)",
  ];

  useEffect(() => { const t = setInterval(() => setBgIdx(i => (i+1)%BGRADS.length), 5000); return () => clearInterval(t); }, []);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", fn, {passive:true}); return () => window.removeEventListener("scroll", fn); }, []);

  const nav = (id) => { smoothTo(id); setMenuOpen(false); setDrop(null); };

  return (
    <>
      <style>{CSS}</style>
      <div style={{ fontFamily: "inherit", overflowX: "hidden" }}>

        {/* TOP BAR */}
        <div style={{ background: "linear-gradient(90deg,#1e3a8a,#1e40af)" }}>
          <div className="toprow" style={{ maxWidth: 1280, margin: "0 auto", padding: "7px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
            <span style={{ color: "rgba(255,255,255,0.65)", letterSpacing: 0.4 }}>✦ India's Trusted Education Consultancy — Guiding 10,000+ Students</span>
            <div style={{ display: "flex", gap: 20 }}>
              <a href="mailto:info@pushpags.com" style={{ color: "#93c5fd" }}>✉ info@pushpags.com</a>
              <a href="tel:+918287543429" style={{ color: "#93c5fd" }}>📞 +91 8287-543-429</a>
            </div>
          </div>
        </div>

        {/* NAVBAR */}
        <header className={scrolled ? "glass" : ""} style={{ position: "sticky", top: 0, zIndex: 1000, background: scrolled ? undefined : "#fff", boxShadow: scrolled ? "0 4px 28px rgba(0,0,0,0.09)" : "0 1px 0 #e2e8f0", transition: "all 0.4s ease" }}>
          <div className="navwrap" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => nav("hero")}>
              <div style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(135deg,#1e40af,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, fontWeight: 900, color: "#fff", flexShrink: 0 }}>P</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, letterSpacing: 1.8, color: "#0f172a" }}>PUSHPA</div>
                <div style={{ fontSize: 8.5, letterSpacing: 2, color: "#94a3b8", textTransform: "uppercase" }}>Global Solutions</div>
              </div>
            </div>
            {/* Desktop links */}
            <nav className="dn" style={{ display: "flex", alignItems: "center" }}>
              <ul style={{ display: "flex", listStyle: "none", gap: 0 }}>
                {NAV_LINKS.map(link => (
                  <li key={link.label} style={{ position: "relative" }}
                    onMouseEnter={() => link.children && setDrop(link.label)}
                    onMouseLeave={() => setDrop(null)}>
                    <button className="navlink" onClick={() => nav(link.href)}
                      style={{ background: "none", border: "none", padding: "26px 14px", fontSize: 13.5, fontWeight: 500, color: drop === link.label ? "#3b82f6" : "#334155", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, transition: "color 0.2s", whiteSpace: "nowrap", fontFamily: "inherit" }}>
                      {link.label}{link.children && <span style={{ fontSize: 9, opacity: 0.55, transition: "transform 0.2s", transform: drop === link.label ? "rotate(180deg)" : "none", display: "inline-block" }}>▼</span>}
                    </button>
                    {link.children && drop === link.label && (
                      <div className="glass slide" style={{ position: "absolute", top: "calc(100% + 2px)", left: 0, minWidth: 230, border: "1px solid rgba(59,130,246,0.14)", borderRadius: 12, padding: "8px 0", zIndex: 2000, boxShadow: "0 20px 56px rgba(0,0,0,0.11)" }}>
                        {link.children.map(c => (
                          <button key={c} onClick={() => nav(link.href)}
                            style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "10px 20px", fontSize: 13, color: "#334155", cursor: "pointer", transition: "all 0.18s", fontFamily: "inherit" }}
                            onMouseEnter={e => { e.currentTarget.style.background = "rgba(59,130,246,0.06)"; e.currentTarget.style.color = "#3b82f6"; e.currentTarget.style.paddingLeft = "28px"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#334155"; e.currentTarget.style.paddingLeft = "20px"; }}>
                            {c}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
              <button className="shine" onClick={() => nav("contact")}
                style={{ marginLeft: 12, background: "linear-gradient(135deg,#1e40af,#3b82f6)", color: "#fff", border: "none", padding: "11px 24px", borderRadius: 9, fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.3s", boxShadow: "0 4px 14px rgba(59,130,246,0.35)", letterSpacing: 0.3, fontFamily: "inherit" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 26px rgba(59,130,246,0.45)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(59,130,246,0.35)"; }}>
                Register Now ↗
              </button>
            </nav>
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "1px solid #e2e8f0", borderRadius: 8, padding: "8px 12px", cursor: "pointer", fontSize: 20, color: "#334155", display: "none" }} className="dn" style={{ display: "flex" }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
          {menuOpen && (
            <div className="glass slide" style={{ borderTop: "1px solid #e2e8f0", padding: "16px 24px 24px" }}>
              {NAV_LINKS.map(l => <button key={l.label} onClick={() => nav(l.href)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "13px 8px", fontSize: 15, color: "#334155", cursor: "pointer", fontFamily: "inherit", borderBottom: "1px solid #f1f5f9" }}>{l.label}</button>)}
              <button onClick={() => nav("contact")} style={{ marginTop: 14, width: "100%", background: "linear-gradient(135deg,#1e40af,#3b82f6)", color: "#fff", border: "none", padding: "14px", borderRadius: 9, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Register Now ↗</button>
            </div>
          )}
        </header>

        {/* HERO */}
        <section id="hero" className="smh" style={{ minHeight: "91vh", background: BGRADS[bgIdx], transition: "background 2s ease", position: "relative", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize: "34px 34px", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: "12%", right: "8%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(59,130,246,0.22),transparent 68%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "8%", left: "4%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.18),transparent 68%)", pointerEvents: "none" }} />
          <div className="pulse" style={{ position: "absolute", right: "20%", top: "28%", width: 260, height: 260, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.09)", pointerEvents: "none" }} />
          <div className="pulse" style={{ position: "absolute", right: "20%", top: "28%", width: 370, height: 370, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)", animationDelay: "1.3s", pointerEvents: "none" }} />
          <div className="heropad sm1" style={{ position: "relative", zIndex: 1, maxWidth: 1280, margin: "0 auto", padding: "100px 48px 80px", width: "100%", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{ marginBottom: 22 }}>
                <span className="pill">✦ Education Pathways Simplified</span>
              </div>
              <h1 style={{ fontSize: "clamp(2.5rem,5.2vw,4rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16, letterSpacing: -0.5 }}>
                Your Future<br />
                <span style={{ background: "linear-gradient(90deg,#60a5fa,#a78bfa,#34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Starts Here</span>
              </h1>
              <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 15.5, fontStyle: "italic", marginBottom: 18, letterSpacing: 0.3 }}>Dream Bigger. Learn Smarter. Achieve Greater.</p>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 15.5, lineHeight: 1.8, marginBottom: 42, maxWidth: 520 }}>
                Pushpa Global Solutions helps students discover the right education pathways and connects institutions with talented learners — from career counselling to university partnerships across 25+ countries.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                <button className="shine" onClick={() => nav("services")}
                  style={{ background: "#fff", color: "#1e40af", border: "none", padding: "15px 32px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(255,255,255,0.22)", letterSpacing: 0.2, fontFamily: "inherit" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 34px rgba(255,255,255,0.32)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.22)"; }}>
                  Explore Services
                </button>
                <button onClick={() => nav("contact")}
                  style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.32)", padding: "15px 32px", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "all 0.3s", backdropFilter: "blur(6px)", fontFamily: "inherit" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.11)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"; e.currentTarget.style.transform = "none"; }}>
                  Book Free Counselling →
                </button>
              </div>
              <div style={{ marginTop: 48, display: "flex", gap: 36, flexWrap: "wrap" }}>
                {[["10K+","Students Guided"],["500+","Partner Institutions"],["95%","Success Rate"]].map(([n,l]) => (
                  <div key={l}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{n}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 0.5, marginTop: 2 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero card */}
            <div className="dn float" style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ position: "relative", width: 340, height: 390 }}>
                <div style={{ inset: 0, position: "absolute", borderRadius: 22, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(12px)", overflow: "hidden" }}>
                  <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80" alt="Students" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.68 }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,transparent 50%,rgba(0,0,0,0.52) 100%)" }} />
                  <div style={{ position: "absolute", bottom: 22, left: 20, right: 20, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", borderRadius: 12, padding: "13px 15px", border: "1px solid rgba(255,255,255,0.18)" }}>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", fontWeight: 700, marginBottom: 4 }}>🎓 Next Career Fair</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.58)" }}>April 2026 · New Delhi · 50+ Universities</div>
                  </div>
                </div>
                <div style={{ position: "absolute", top: -16, right: -16, background: "#3b82f6", borderRadius: 12, padding: "10px 14px", color: "#fff", fontSize: 11, fontWeight: 800, boxShadow: "0 8px 22px rgba(59,130,246,0.55)", whiteSpace: "nowrap" }}>🌍 25+ Countries</div>
                <div style={{ position: "absolute", bottom: -16, left: -16, background: "#10b981", borderRadius: 12, padding: "10px 14px", color: "#fff", fontSize: 11, fontWeight: 800, boxShadow: "0 8px 22px rgba(16,185,129,0.55)", whiteSpace: "nowrap" }}>✓ 95% Success Rate</div>
              </div>
            </div>
          </div>
          {/* Wave */}
          <div style={{ position: "absolute", bottom: -1, left: 0, right: 0 }}>
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
              <path d="M0 35 C360 70 1080 0 1440 35 L1440 70 L0 70 Z" fill="#f8fafc" />
            </svg>
          </div>
        </section>

        {/* CATEGORIES */}
        <section id="courses" className="smpad" style={{ padding: "88px 48px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <span className="pill" style={{ marginBottom: 16, display: "inline-flex" }}>Explore Programs</span>
                <h2 style={{ fontSize: "clamp(1.7rem,3.3vw,2.5rem)", fontWeight: 800, color: "#0f172a", marginTop: 14, lineHeight: 1.2 }}>Top Universities in <span className="gtext">India & Abroad</span></h2>
                <p style={{ color: "#64748b", fontSize: 15, marginTop: 12 }}>Find the right university for your chosen stream across leading academic disciplines.</p>
              </div>
            </Reveal>
            <div className="cat2" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
              {CATEGORIES.map((cat, i) => (
                <Reveal key={cat.title} delay={i * 75} dir="up">
                  <div className="card" style={{ background: "#fff", borderRadius: 16, padding: "28px 18px 24px", border: "1px solid #e2e8f0", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.04)", textAlign: "center" }}>
                    <div style={{ fontSize: 38, marginBottom: 12 }}>{cat.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 8, lineHeight: 1.35 }}>{cat.title}</div>
                    <div style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.65 }}>{cat.desc}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="smpad" style={{ padding: "88px 48px", background: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div className="sm1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
              <Reveal dir="left">
                <div style={{ position: "relative" }}>
                  <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 22px 56px rgba(0,0,0,0.11)" }}>
                    <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=700&q=80" alt="Students" style={{ width: "100%", height: 450, objectFit: "cover", display: "block", transition: "transform 0.55s ease" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"} />
                  </div>
                  <div style={{ position: "absolute", bottom: -18, right: -18, background: "linear-gradient(135deg,#1e40af,#3b82f6)", borderRadius: 16, padding: "18px 22px", color: "#fff", boxShadow: "0 12px 32px rgba(59,130,246,0.42)" }}>
                    <div style={{ fontSize: 26, fontWeight: 900 }}>1000+</div>
                    <div style={{ fontSize: 11, opacity: 0.82, marginTop: 2 }}>Happy Students</div>
                  </div>
                  <div style={{ position: "absolute", top: -14, left: -14, background: "#fff", borderRadius: 14, padding: "12px 16px", boxShadow: "0 8px 24px rgba(0,0,0,0.09)", border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: 11, color: "#64748b", marginBottom: 2 }}>Admission Success</div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#10b981" }}>95%</div>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right">
                <div>
                  <span className="pill" style={{ marginBottom: 18, display: "inline-flex" }}>About Us</span>
                  <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.3rem)", fontWeight: 800, color: "#0f172a", marginBottom: 16, marginTop: 14, lineHeight: 1.25 }}>
                    A Smarter Way to Plan Your<br /><span className="gtext">Education Journey</span>
                  </h2>
                  <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.82, marginBottom: 32 }}>
                    Pushpa Global Solutions helps students discover the right academic pathways and connect with leading universities in India and around the world. Our expert guidance, institutional partnerships, and career events empower students to make confident decisions about their future.
                  </p>
                  {[
                    { icon: "🎯", t: "Career Counselling", d: "Expert guidance to help students choose the right course & career path." },
                    { icon: "🏛️", t: "University Partnerships", d: "Access to top universities in India and global destinations." },
                    { icon: "🌐", t: "Global Education Opportunities", d: "Explore study options in USA, UK, Canada, Australia, Europe and more." },
                    { icon: "🎪", t: "Career Fairs & Events", d: "Meet university representatives and explore academic opportunities." },
                  ].map(f => (
                    <div key={f.t} style={{ display: "flex", gap: 14, marginBottom: 20, transition: "transform 0.25s ease", cursor: "default" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "translateX(6px)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(59,130,246,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{f.icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 14, color: "#0f172a", marginBottom: 3 }}>{f.t}</div>
                        <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>{f.d}</div>
                      </div>
                    </div>
                  ))}
                  <button className="shine" onClick={() => nav("contact")}
                    style={{ marginTop: 8, background: "linear-gradient(135deg,#1e40af,#3b82f6)", color: "#fff", border: "none", padding: "13px 30px", borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.3s", boxShadow: "0 4px 16px rgba(59,130,246,0.3)", fontFamily: "inherit" }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(59,130,246,0.42)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,130,246,0.3)"; }}>
                    Learn More About Us →
                  </button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: "linear-gradient(135deg,#0f172a,#1e3a8a,#1e40af)", padding: "0 48px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.035) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
            <div className="sm2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{ borderRight: i < STATS.length-1 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <StatBox s={s} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="smpad" style={{ padding: "88px 48px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <span className="pill" style={{ marginBottom: 14, display: "inline-flex" }}>What We Offer</span>
                <h2 style={{ fontSize: "clamp(1.7rem,3.3vw,2.5rem)", fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Our <span className="gtext">Services</span></h2>
                <p style={{ color: "#64748b", fontSize: 15, marginTop: 12 }}>Comprehensive education consulting services tailored to students, institutions, and educators.</p>
              </div>
            </Reveal>
            <div className="sm2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}>
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 55} dir="up">
                  <div className="svc card" style={{ "--c": s.color, background: "#fff", borderRadius: 16, padding: "28px 22px", border: "1px solid #e2e8f0", cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,0.04)", height: "100%" }}>
                    <div style={{ fontSize: 34, marginBottom: 14 }}>{s.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 10, lineHeight: 1.3 }}>{s.title}</div>
                    <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.72 }}>{s.desc}</div>
                    <div style={{ marginTop: 18, fontSize: 12, color: s.color, fontWeight: 700, opacity: 0.8 }}>Learn more →</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DESTINATIONS */}
        <section className="smpad" style={{ padding: "72px 48px", background: "#fff", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <span className="pill" style={{ marginBottom: 14, display: "inline-flex" }}>Study Abroad</span>
                <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Popular <span className="gtext">Destinations</span></h2>
              </div>
            </Reveal>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              {DESTINATIONS.map((d, i) => (
                <Reveal key={d} delay={i * 45} dir="none">
                  <button className="dest" style={{ background: "#f1f5f9", color: "#334155", border: "1px solid #e2e8f0", padding: "11px 24px", borderRadius: 32, fontSize: 14, fontWeight: 600, cursor: "pointer", letterSpacing: 0.2, fontFamily: "inherit" }}>
                    🌍 {d}
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="smpad" style={{ background: "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)", padding: "72px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none" }} />
          <Reveal>
            <p style={{ color: "#93c5fd", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>Book a Counselling Session</p>
            <h2 style={{ color: "#fff", fontSize: "clamp(1.5rem,3vw,2.3rem)", fontWeight: 800, marginBottom: 10 }}>Call To Book Your First Free Counselling Session</h2>
            <p style={{ color: "#60a5fa", fontSize: 22, fontWeight: 700, marginBottom: 32 }}>(+91) 8287-543-429</p>
            <button className="shine" onClick={() => nav("contact")}
              style={{ background: "#fff", color: "#1e40af", border: "none", padding: "15px 42px", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.3s", boxShadow: "0 4px 20px rgba(255,255,255,0.18)", fontFamily: "inherit" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 34px rgba(255,255,255,0.28)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(255,255,255,0.18)"; }}>
              Register Now →
            </button>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="smpad" style={{ padding: "88px 48px", background: "#f8fafc" }}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <span className="pill" style={{ marginBottom: 14, display: "inline-flex" }}>FAQ</span>
                <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Frequently Asked <span className="gtext">Questions</span></h2>
              </div>
            </Reveal>
            {FAQS.map((f, i) => (
              <Reveal key={i} delay={i * 55}>
                <div style={{ background: "#fff", borderRadius: 14, marginBottom: 12, border: `1px solid ${faq===i ? "#bfdbfe" : "#e2e8f0"}`, overflow: "hidden", transition: "all 0.3s", boxShadow: faq===i ? "0 4px 20px rgba(59,130,246,0.08)" : "none" }}>
                  <button onClick={() => setFaq(faq===i ? null : i)}
                    style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 16, fontFamily: "inherit" }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", lineHeight: 1.4 }}>{f.q}</span>
                    <div style={{ width: 28, height: 28, borderRadius: "50%", background: faq===i ? "#3b82f6" : "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", color: faq===i ? "#fff" : "#64748b", fontSize: 17, flexShrink: 0, transition: "all 0.3s", fontWeight: "bold" }}>
                      {faq===i ? "−" : "+"}
                    </div>
                  </button>
                  {faq===i && (
                    <div className="faq-open" style={{ padding: "0 24px 20px", borderTop: "1px solid #f1f5f9" }}>
                      <div style={{ paddingTop: 16, fontSize: 14, color: "#475569", lineHeight: 1.82 }}>{f.a}</div>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TEAM */}
        <section className="smpad" style={{ padding: "88px 48px", background: "#fff" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <Reveal>
              <div style={{ textAlign: "center", marginBottom: 52 }}>
                <span className="pill" style={{ marginBottom: 14, display: "inline-flex" }}>Our Team</span>
                <h2 style={{ fontSize: "clamp(1.7rem,3vw,2.3rem)", fontWeight: 800, color: "#0f172a", marginTop: 14 }}>Meet the <span className="gtext">People Behind</span> PGS</h2>
              </div>
            </Reveal>
            <div className="sm2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 22 }}>
              {TEAM.map((t, i) => (
                <Reveal key={t.name} delay={i * 75} dir="up">
                  <div className="team-card card" style={{ background: "#f8fafc", borderRadius: 20, padding: "36px 24px 28px", textAlign: "center", border: "1px solid #e2e8f0", cursor: "default" }}>
                    <div className="team-av" style={{ width: 72, height: 72, borderRadius: "50%", background: `linear-gradient(135deg,${t.a},${t.b})`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 24, fontWeight: 800, color: "#fff", boxShadow: `0 8px 22px ${t.b}55` }}>
                      {t.initials}
                    </div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 6 }}>{t.name}</div>
                    <div style={{ fontSize: 12.5, color: "#64748b", lineHeight: 1.55 }}>{t.role}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="smpad" style={{ padding: "88px 48px", background: "linear-gradient(135deg,#0f172a,#1e3a8a)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px,transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
            <Reveal>
              <div style={{ marginBottom: 52 }}>
                <span className="pill" style={{ marginBottom: 14, display: "inline-flex", background: "rgba(59,130,246,0.18)", borderColor: "rgba(59,130,246,0.28)" }}>Get In Touch</span>
                <h2 style={{ fontSize: "clamp(1.7rem,3.5vw,2.7rem)", fontWeight: 800, color: "#fff", marginTop: 14, lineHeight: 1.2 }}>
                  Enroll Today & Start Your<br /><span style={{ background: "linear-gradient(90deg,#60a5fa,#a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Global Journey</span>
                </h2>
              </div>
            </Reveal>
            <div className="sm1" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
              <Reveal dir="left">
                <div>
                  <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20 }}>💡 How We Can Help You</h3>
                  {["Personalized career counselling","Guidance on study abroad opportunities","Support with university admissions","Information on events, workshops & collaborations","Assistance for schools, institutions & educators"].map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 16, transition: "transform 0.22s" }}
                      onMouseEnter={e => e.currentTarget.style.transform = "translateX(6px)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: "linear-gradient(135deg,#3b82f6,#8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2, fontSize: 10, color: "#fff", fontWeight: "bold" }}>✓</div>
                      <span style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>{item}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 38, padding: "22px", borderRadius: 16, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {[["📞","(+91) 8287-543-429","tel:+918287543429"],["✉","info@pushpags.com","mailto:info@pushpags.com"]].map(([icon,text,href]) => (
                      <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: 10, color: "#93c5fd", fontSize: 14, marginBottom: 14, transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#fff"} onMouseLeave={e => e.currentTarget.style.color = "#93c5fd"}>
                        <span>{icon}</span>{text}
                      </a>
                    ))}
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.38)", lineHeight: 1.7 }}>A-23, 1st Floor, Okhla Phase 1,<br />New Delhi-110020 (India)</div>
                  </div>
                </div>
              </Reveal>
              <Reveal dir="right">
                <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "36px 32px", backdropFilter: "blur(10px)" }}>
                  <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 24 }}>Register With Us</h3>
                  {!done ? (
                    <>
                      {[["Your Full Name","text"],["Email Address","email"],["Phone Number","tel"]].map(([ph,type]) => (
                        <input key={ph} type={type} placeholder={ph} style={{ display: "block", width: "100%", padding: "13px 16px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 10, color: "#fff", fontSize: 14, marginBottom: 14, transition: "all 0.25s", fontFamily: "inherit" }} />
                      ))}
                      {[["I am a:",["Student","Principal","Teacher","Career Counsellor","Coaching Partner"]],["Interested In:",["Career Counselling Sessions","University Collaboration","Events / Workshops"]]].map(([label,opts]) => (
                        <select key={label} style={{ display: "block", width: "100%", padding: "13px 16px", background: "#0f2040", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 10, color: "#93c5fd", fontSize: 14, marginBottom: 14, fontFamily: "inherit", cursor: "pointer" }}>
                          <option>{label} Select</option>
                          {opts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      ))}
                      <button className="shine" onClick={() => setDone(true)}
                        style={{ width: "100%", padding: "15px", background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", color: "#fff", border: "none", borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4, transition: "all 0.3s", boxShadow: "0 4px 16px rgba(59,130,246,0.32)", letterSpacing: 0.3, fontFamily: "inherit" }}
                        onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(59,130,246,0.52)"; }}
                        onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(59,130,246,0.32)"; }}>
                        Register Now →
                      </button>
                    </>
                  ) : (
                    <div style={{ textAlign: "center", padding: "32px 0" }}>
                      <div style={{ fontSize: 52, marginBottom: 16 }}>🎉</div>
                      <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 8 }}>You're Registered!</h3>
                      <p style={{ color: "rgba(255,255,255,0.58)", fontSize: 14, lineHeight: 1.75 }}>Our team will reach out within 24 hours to schedule your free counselling session.</p>
                      <button onClick={() => setDone(false)} style={{ marginTop: 24, background: "transparent", border: "1px solid rgba(255,255,255,0.2)", color: "#93c5fd", padding: "10px 24px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontFamily: "inherit" }}>Submit Another</button>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#050d1a", color: "#64748b", padding: "64px 48px 0" }}>
          <div className="fnav sm2" style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 48, paddingBottom: 56 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#1e40af,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#fff" }}>P</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: 1.8, color: "#94a3b8" }}>PUSHPA</div>
                  <div style={{ fontSize: 8, letterSpacing: 2, color: "#334155", textTransform: "uppercase" }}>Global Solutions</div>
                </div>
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.85, marginBottom: 22, maxWidth: 290, color: "#475569" }}>
                Helping students discover the right education pathways and connecting institutions with talented learners worldwide.
              </p>
              <p style={{ fontSize: 12, color: "#334155", fontStyle: "italic", marginBottom: 24 }}>Dream Bigger. Learn Smarter. Achieve Greater.</p>
              <div style={{ display: "flex", gap: 10 }}>
                {[["f","#1877f2"],["in","#0077b5"],["tw","#1da1f2"],["yt","#ff0000"]].map(([s,c]) => (
                  <div key={s} style={{ width: 34, height: 34, borderRadius: "50%", border: "1px solid #1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 12, color: "#475569", transition: "all 0.25s", fontWeight: "bold" }}
                    onMouseEnter={e => { e.currentTarget.style.background = c; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = c; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#475569"; e.currentTarget.style.borderColor = "#1e293b"; e.currentTarget.style.transform = "none"; }}>
                    {s}
                  </div>
                ))}
              </div>
            </div>
            {[
              ["Study Abroad", DESTINATIONS],
              ["Resources", ["About Us","Contact Us","Events","Services","Courses","Blog"]],
            ].map(([title, items]) => (
              <div key={title}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>{title}</div>
                {items.map(item => (
                  <div key={item} style={{ fontSize: 13.5, color: "#475569", marginBottom: 10, cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6 }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#60a5fa"; e.currentTarget.style.paddingLeft = "5px"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#475569"; e.currentTarget.style.paddingLeft = "0"; }}>
                    → {item}
                  </div>
                ))}
              </div>
            ))}
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "#94a3b8", textTransform: "uppercase", marginBottom: 20 }}>Get In Touch</div>
              {[["📞","+(91) 8287-543-429"],["✉","info@pushpags.com"],["📍","A-23, 1st Floor, Okhla Phase 1, New Delhi-110020"]].map(([icon,text]) => (
                <div key={text} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14 }}>{icon}</span>
                  <span style={{ fontSize: 13, color: "#475569", lineHeight: 1.6 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ maxWidth: 1280, margin: "0 auto", borderTop: "1px solid #0f172a", padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#334155" }}>© 2026 Pushpa Global Solutions. All rights reserved.</span>
            <div style={{ display: "flex", gap: 22 }}>
              {["Terms of Service","Privacy Policy","Cookies"].map(l => (
                <span key={l} style={{ fontSize: 12, color: "#334155", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#60a5fa"} onMouseLeave={e => e.currentTarget.style.color = "#334155"}>
                  {l}
                </span>
              ))}
            </div>
          </div>
        </footer>

        {/* WHATSAPP */}
        <a href="https://wa.me/919711707252?text=Hello%20I%20need%20help" target="_blank" rel="noopener noreferrer" className="wa"
          style={{ position: "fixed", bottom: 28, right: 28, background: "linear-gradient(135deg,#128c7e,#25d366)", color: "#fff", padding: "13px 20px", borderRadius: 32, fontSize: 13, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 24px rgba(37,211,102,0.52)", zIndex: 999, display: "flex", alignItems: "center", gap: 8, transition: "box-shadow 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 14px 34px rgba(37,211,102,0.68)"; e.currentTarget.style.animationPlayState = "paused"; }}
          onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.52)"; e.currentTarget.style.animationPlayState = "running"; }}>
          <span style={{ fontSize: 18 }}>💬</span> Chat on WhatsApp
        </a>

      </div>
    </>
  );
}