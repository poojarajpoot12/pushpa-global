import React, { useState } from 'react';
import axios from 'axios'; // 1. Import Axios
import { 
  User, MapPin, GraduationCap, Globe, 
  Wallet, Users, MessageSquare, Upload, Send 
} from 'lucide-react';
import '../css/CareerCounselling.css';

const CareerCounselling = () => {
  // --- DATA SETS ---
  const streamData = {
    "Science": ["B.Tech", "MBBS","BDS", "B.E","B.Sc","BCA","Biotech","AI", "Diploma in Engineering"],
    "Commerce": ["B.Com", "BBA", "CA", "Finance" ,"Marketing"],
    "Arts": ["BA","Media", "psychology"],
    "Design": ["Fashion", "UI/UX", "Animation"],
    "Law": ["BA LLB", "LLB"],
    "Hospitality": ["Hotel Management", "Touism"],
    "IT": ["BCA", "AI", "CyberSecurity", "Cloud"],
    "Media": ["Journalism", "Flim"],
    "Defence": ["NDA", "CDS"],
    "Education": ["B.Ed", "BTC"]
  };
  const mainBoards = ["CBSE", "ICSE", "NIOS", "IB", "IGCSE", "State Board"];
  const stateBoards = ["UP Board", "Bihar Board", "Maharashtra State Board", "Rajasthan Board", "MP Board", "West Bengal Board", "Karnataka State Board", "Tamil Nadu Board", "Gujarat Secondary Board", "Punjab School Education Board", "Haryana Board", "Kerala DHSE", "Andhra Pradesh BIE", "Telangana TSBIE", "Assam AHSEC", "Jharkhand Academic Council", "Uttarakhand Board", "Chhattisgarh Board"];
  const countries = ["United Kingdom", "Canada", "Australia", "Germany", "USA", "Ireland", "France", "New Zealand"];

  // --- LOGIC STATES ---
  const [selectedBoard, setSelectedBoard] = useState("");
  const [selectedStateBoard, setSelectedStateBoard] = useState(""); 
  const [selectedStream, setSelectedStream] = useState(""); 
  const [studyLocation, setStudyLocation] = useState(""); 
  
  // 2. API STATUS STATES
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ type: "", text: "" });

  // 3. ENHANCED SUBMIT HANDLER
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ type: "", text: "" });

    const formDataObj = new FormData(e.target);
    const rawData = Object.fromEntries(formDataObj.entries());

    const finalBoard = rawData.board === "State Board" ? rawData.specificStateBoard : rawData.board;

    const payload = {
      role: "student", 
      fullName: rawData.name,
      email: rawData.email,
      phoneNumber: rawData.phone,
      city: rawData.city,
      state: rawData.state,
      password: "DefaultPassword123",
      
      message: `[SOURCE: CAREER COUNSELLING FORM] - Board: ${finalBoard}, Score: ${rawData.score}, Passing Year: ${rawData.passingYear}, Parent Name: ${rawData.parentName}, Parent Phone: ${rawData.parentPhone}, Parent Occupation: ${rawData.parentOccupation || 'N/A'}, Additional Note: ${rawData.additionalInfo || 'None'}`,
      
      dynamicProfile: {
        studentFields: {
          currentQualification: rawData.studyLevel || "",
          interestedCourse: rawData.course || "",
          preferredCountry: rawData.locationPref === "Abroad" ? (rawData.country || "") : "India",
          budgetRange: rawData.budget || "",
          studyTimeline: rawData.intake || ""
        }
      }
    };

    try {
      const response = await axios.post("http://localhost:5000/api/signup", payload);
      
      if (response.status === 200 || response.status === 201) {
        setStatusMsg({ type: "success", text: "Registered Successfully!" });
        e.target.reset();
        setSelectedBoard("");
        setSelectedStateBoard("");
        setSelectedStream("");
        setStudyLocation("");
      }
    } catch (error) {
      console.error("Backend validation error:", error.response?.data);
      setStatusMsg({ 
        type: "error", 
        text: error.response?.data?.msg || error.response?.data?.message || "Validation Error: Check all fields." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="timeline-page-wrapper">
      <div className="timeline-page-wrapper-overlay">
        <div className="timeline-header">
          <h1>Register for <span>Career Counselling</span></h1>
          <p>Get FREE Expert Counselling & University Shortlisting</p>
        </div>

        {/* 4. STATUS MESSAGE DISPLAY */}
        {statusMsg.text && (
          <div className={`status-alert ${statusMsg.type}`} style={{
            textAlign: 'center',
            padding: '15px',
            maxWidth: '600px',
            margin: '0 auto 20px',
            borderRadius: '8px',
            backgroundColor: statusMsg.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: statusMsg.type === 'success' ? '#15803d' : '#b91c1c',
            border: `1px solid ${statusMsg.type === 'success' ? '#15803d' : '#b91c1c'}`
          }}>
            {statusMsg.text}
          </div>
        )}

        <form className="timeline-container" onSubmit={handleFinalSubmit}>
          <div className="center-line"></div>

          {/* 1. PERSONAL DETAILS */}
          <div className="timeline-item left">
            <div className="timeline-card shadow-lg">
              <div className="card-tag blue"><User size={14}/> Personal Details</div>
              <div className="form-grid-mini">
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email Address" required />
                <input type="tel" name="phone" placeholder="Phone Number" required />
                <input type="date" name="dob" placeholder="DOB" />
              </div>
            </div>
            <div className="timeline-dot dot-blue"></div>
            <div className="timeline-visual">
              <div className="visual-circle blue-bg"><User size={35} color="white"/></div>
            </div>
          </div>

          {/* 2. LOCATION */}
          <div className="timeline-item right">
            <div className="timeline-visual">
              <div className="visual-circle green-bg"><MapPin size={35} color="white"/></div>
            </div>
            <div className="timeline-dot dot-green"></div>
            <div className="timeline-card shadow-lg">
              <div className="card-tag green"><MapPin size={14}/> Location</div>
              <div className="form-grid-mini">
                <input type="text" name="city" placeholder="City" required />
                <input type="text" name="state" placeholder="State" required />
                <input type="text" name="pincode" placeholder="Pin Code" required />
              </div>
            </div>
          </div>

          {/* 3. ACADEMIC INFO */}
          <div className="timeline-item left">
            <div className="timeline-card shadow-lg">
              <div className="card-tag purple"><GraduationCap size={14}/> Academics</div>
              <div className="form-grid-mini">
                <select name="studyLevel" required>
                  <option value="">Current Study Level</option>
                  <option value="Class 10">Class 10</option>
                  <option value="Class 12">Class 12</option>
                  <option value="Undergraduate">Undergraduate</option>
                  <option value="Postgraduate">Postgraduate</option>
                </select>
                
                <select 
                  name="board" 
                  required 
                  value={selectedBoard} 
                  onChange={(e) => {
                    setSelectedBoard(e.target.value);
                    setSelectedStateBoard(""); 
                  }}
                >
                  <option value="">Select Board</option>
                  {mainBoards.map(b => <option key={b} value={b}>{b}</option>)}
                </select>

                {selectedBoard === "State Board" && (
                  <select name="specificStateBoard" required value={selectedStateBoard} onChange={(e) => setSelectedStateBoard(e.target.value)}>
                    <option value="">Select State</option>
                    {stateBoards.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                )}

                <input type="text" name="score" placeholder="Percentage / CGPA" required />
                <input type="text" name="passingYear" placeholder="Year of Passing" required />
              </div>
            </div>
            <div className="timeline-dot dot-purple"></div>
            <div className="timeline-visual">
              <div className="visual-circle purple-bg"><GraduationCap size={35} color="white"/></div>
            </div>
          </div>

          {/* 4. COURSE & COUNTRY */}
          <div className="timeline-item right">
            <div className="timeline-visual">
              <div className="visual-circle orange-bg"><Globe size={35} color="white"/></div>
            </div>
            <div className="timeline-dot dot-orange"></div>
            <div className="timeline-card shadow-lg">
              <div className="card-tag orange"><Globe size={14}/> Preferences</div>
              <div className="form-grid-mini">
                <select name="stream" value={selectedStream} onChange={(e) => setSelectedStream(e.target.value)} required>
                  <option value="">Select Stream</option>
                  {Object.keys(streamData).map(s => <option key={s} value={s}>{s}</option>)}
                </select>

                <select name="course" disabled={!selectedStream} required>
                  <option value="">{selectedStream ? "Select Course" : "Select Stream First"}</option>
                  {selectedStream && streamData[selectedStream].map(c => <option key={c} value={c}>{c}</option>)}
                </select>

                <select name="locationPref" onChange={(e) => setStudyLocation(e.target.value)} required>
                  <option value="">Study Location Preference</option>
                  <option value="India">India</option>
                  <option value="Abroad">Abroad</option>
                </select>

                {studyLocation === "Abroad" && (
                  <select name="country" className="animate-pop" required>
                    <option value="">Select Preferred Country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                )}
              </div>
            </div>
          </div>

          {/* 5. BUDGET & INTAKE */}
          <div className="timeline-item left">
            <div className="timeline-card shadow-lg">
              <div className="card-tag teal"><Wallet size={14}/> Budget & Intake</div>
              <div className="form-grid-mini">
                <select name="intake" required>
                  <option value="">Preferred Intake</option>
                  <option value="Fall (Sept/Oct)">Fall (Sept/Oct)</option>
                  <option value="Winter (Jan/Feb)">Winter (Jan/Feb)</option>
                  <option value="Summer (May/June)">Summer (May/June)</option>
                </select>
                <select name="budget" required>
                  <option value="">Budget Range</option>
                  <option value="Under 10 Lakhs">Under 10 Lakhs</option>
                  <option value="10 - 20 Lakhs">10 - 20 Lakhs</option>
                  <option value="20 - 40 Lakhs">20 - 40 Lakhs</option>
                  <option value="40 Lakhs +">40 Lakhs +</option>
                </select>
              </div>
            </div>
            <div className="timeline-dot dot-teal"></div>
            <div className="timeline-visual">
              <div className="visual-circle teal-bg"><Wallet size={35} color="white"/></div>
            </div>
          </div>

          {/* 6. PARENT DETAILS */}
          <div className="timeline-item right">
            <div className="timeline-visual">
              <div className="visual-circle gold-bg"><Users size={35} color="white"/></div>
            </div>
            <div className="timeline-dot dot-gold"></div>
            <div className="timeline-card shadow-lg">
              <div className="card-tag gold"><Users size={14}/> Parent Details</div>
              <div className="form-grid-mini">
                <input type="text" name="parentName" placeholder="Parent Name" required />
                <input type="tel" name="parentPhone" placeholder="Parent Mobile No" required />
                <input type="email" name="parentEmail" placeholder="Parent Email" />
                <input type="text" name="parentOccupation" placeholder="Occupation" />
              </div>
            </div>
          </div>

          {/* 7. ADDITIONAL INFO & SUBMIT */}
          <div className="timeline-item full-width">
            <div className="timeline-dot dot-dark"></div>
            <div className="timeline-card shadow-lg final-step">
                <div className="card-tag dark"><MessageSquare size={14}/> Final Steps</div>
                <textarea name="additionalInfo" placeholder="Anything else you'd like us to know?"></textarea>
                
                <button type="submit" className="timeline-submit-btn" disabled={loading}>
                  {loading ? "Processing..." : <>Complete Registration <Send size={20} /></>}
                </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CareerCounselling;