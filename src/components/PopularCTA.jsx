import React, { useState } from "react";
import { UserPlus2, User, Mail, Phone, Building2, MapPin, ShieldCheck, FileText } from "lucide-react";
import "../css/popularCTA.css";
import axios from "axios";

const PopularCTA = () => {
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    fullName: "", 
    email: "", 
    phoneNumber: "", // Changed from phone to phoneNumber to match backend
    city: "", 
    state: "", 
    message: "",
    password: "DefaultPassword123" // 🔥 Backend requires a password for user model hashing
  });

  // Dynamic Profile state to match backend sub-document structure
  const [dynamicProfile, setDynamicProfile] = useState({
    studentFields: { currentQualification: "", interestedCourse: "", preferredCountry: "", budgetRange: "", studyTimeline: "" },
    principalFields: { schoolName: "", board: "", totalStudents: 0 },
    teacherFields: { currentOrganization: "", subjectTaught: "", yearsOfExperience: "", preferredLocation: "" },
    counsellorFields: { organizationName: "", yearsOfExperience: "", studentVolumeMonthly: 0 },
    coachingFields: { instituteName: "", coursesOffered: "", numberOfStudents: 0 }
  });

  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
  setRole(selectedRole);

  // 🔥 FIX: Role badalte hi memory mein se saare dynamic fields ko clear kar do
  setFormData((prev) => ({
    ...prev,
    // Student fields zero karo
    currentQualification: "0",
    interestedCourse: "0",
    preferredCountry: "0",
    budgetRange: "0",
    studyTimeline: "0",
    
    // Principal fields zero karo
    schoolName: "0",
    board: "0",
    totalStudents: "0",
    
    // Teacher fields zero karo
    currentSchool: "0",
    subjectTaught: "0",
    experience: "0",
    preferredLocation: "0",
    
    // Baki fields bhi isi tarah zero kar sakte ho...
  }));
  };

  // Dynamic profile handling helper
  const handleDynamicChange = (section, field, value) => {
    setDynamicProfile({
      ...dynamicProfile,
      [section]: {
        ...dynamicProfile[section],
        [field]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!role) {
      setStatusMsg("Please select a role first.");
      return;
    }
    setLoading(false);
    setLoading(true);
    setStatusMsg("");

    try {
      // Sending exact clean payload matching our user schema
      const response = await axios.post("http://localhost:5000/api/signup", {
        role,
        ...formData,
        dynamicProfile
      });
      
      if (response.status === 200 || response.status === 201) {
        setStatusMsg("Success! Registered Successfully.");
        setRole("");
        setFormData({ fullName: "", email: "", phoneNumber: "", city: "", state: "", message: "", password: "DefaultPassword123" });
      }
    } catch (error) {
      console.error("Submission Error:", error.response?.data || error.message);
      setStatusMsg(error.response?.data?.msg || error.response?.data?.error || "Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* LEFT CONTENT */}
        <div className="cta-left">
          <h2 className="cta-heading">
            Start Your Global <br />
            <span className="highlight-green">Journey Today</span>
          </h2>
          <p className="cta-desc">
            Get expert guidance for study abroad, career counselling, and university admissions. 
            We help you choose the right path to a successful future.
          </p>

          <div className="cta-features">
            <div className="feature-item">
              <div className="icon-box green">🎓</div>
              <div className="feature-text">
                <strong>Personalized Career Counselling</strong>
                <span>Expert advice tailored to your goals</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-box blue">🌐</div>
              <div className="feature-text">
                <strong>Study Abroad Guidance</strong>
                <span>Find the best universities worldwide</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-box blue">🏛️</div>
              <div className="feature-text">
                <strong>University Admission Support</strong>
                <span>End to end application assistance</span>
              </div>
            </div>
            <div className="feature-item">
              <div className="icon-box blue">📆</div>
              <div className="feature-text">
                <strong>Workshops & Events</strong>
                <span>Stay updated and ahead of the curve</span>
              </div>
            </div>
          </div>

          <div className="help-banner">
             <div className="phone-icon-bg">📞</div>
             <div className="help-info">
                <span className="help-label">Need Help?</span>
                <span className="help-num">+91 8287-543-429</span>
             </div>
          </div>
        </div>

        {/* RIGHT FORM CARD */}
        {/* 🔥 FIX 1: Wrap inputs in a <form> tag with onSubmit handler */}
        <form onSubmit={handleSubmit} className="cta-form-card">
          <div className="form-header">
            <div className="user-circle">
              <UserPlus2 size={40} color="#3b82f6" />
            </div>
            <h3>Register With Us</h3>
          </div>
          
          {statusMsg && <div className="status-banner" style={{padding: '10px', margin: '10px 0', borderRadius: '5px', background: statusMsg.includes('Success') ? '#dcfce7' : '#fee2e2', color: statusMsg.includes('Success') ? '#15803d' : '#b91c1c'}}>{statusMsg}</div>}

          <div className="form-grid">
            {/* ROLE SELECT */}
            <div className="input-group">
              <select onChange={handleRoleChange} value={role} className="role-select" required>
                <option value="">Select Role</option>
                <option value="Student">Student</option>
                <option value="Principal">Principal</option>
                <option value="Teacher">Teacher</option>
                <option value="Career Counselling">Career Counsellor</option>
                <option value="Coaching Partner">Coaching Partner</option>
              </select>
            </div>

            {/* COMMON FIELDS */}
            <div className="input-group">
              <User className="field-icon" size={18} />
              <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Full Name" required />
            </div>

            <div className="input-group">
              <Mail className="field-icon" size={18} />
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" required />
            </div>

            <div className="input-group">
              <Phone className="field-icon" size={18} />
              {/* 🔥 FIX 2: Fixed field mapping name from 'phone' to 'phoneNumber' */}
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" required />
            </div>
            
            <div className="form-row">
              <div className="input-group">
                <Building2 className="field-icon" size={18} />
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
              </div>
              <div className="input-group">
                <MapPin className="field-icon" size={18} />
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
              </div>
            </div>

            {/* DYNAMIC FIELDS */}
            <div className={`dynamic-fields ${role ? "show" : ""}`}>
              
              {role === "Student" && (
                <div className="role-fields-container">
                  <input type="text" placeholder="Current Class / Qualification" className="dynamic-input" value={dynamicProfile.studentFields.currentQualification} onChange={(e) => handleDynamicChange("studentFields", "currentQualification", e.target.value)} />
                  <input type="text" placeholder="Interested Course" className="dynamic-input" value={dynamicProfile.studentFields.interestedCourse} onChange={(e) => handleDynamicChange("studentFields", "interestedCourse", e.target.value)} />
                  <input type="text" placeholder="Preferred Country" className="dynamic-input" value={dynamicProfile.studentFields.preferredCountry} onChange={(e) => handleDynamicChange("studentFields", "preferredCountry", e.target.value)} />
                  <div className="form-row">
                    <input type="text" placeholder="Budget Range" className="dynamic-input" value={dynamicProfile.studentFields.budgetRange} onChange={(e) => handleDynamicChange("studentFields", "budgetRange", e.target.value)} />
                    <input type="text" placeholder="Study Timeline" className="dynamic-input" value={dynamicProfile.studentFields.studyTimeline} onChange={(e) => handleDynamicChange("studentFields", "studyTimeline", e.target.value)} />
                  </div>
                </div>
              )}

              {role === "Principal" && (
                <div className="role-fields-container">
                  <input type="text" placeholder="School Name" className="dynamic-input" value={dynamicProfile.principalFields.schoolName} onChange={(e) => handleDynamicChange("principalFields", "schoolName", e.target.value)} />
                  <select className="dynamic-input" value={dynamicProfile.principalFields.board} onChange={(e) => handleDynamicChange("principalFields", "board", e.target.value)}>
                    <option value="">Select Board</option>
                    <option value="CBSE">CBSE</option>
                    <option value="ICSE">ICSE</option>
                    <option value="IB">IB</option>
                    <option value="IGCSE">IGCSE</option>
                    <option value="State Board">State Board</option>
                  </select>
                  <input type="number" placeholder="Total Students" className="dynamic-input" value={dynamicProfile.principalFields.totalStudents} onChange={(e) => handleDynamicChange("principalFields", "totalStudents", e.target.value)} />
                </div>
              )}

              {role === "Teacher" && (
                <div className="role-fields-container">
                  <input type="text" placeholder="Current School / Organization" className="dynamic-input" value={dynamicProfile.teacherFields.currentOrganization} onChange={(e) => handleDynamicChange("teacherFields", "currentOrganization", e.target.value)} />
                  <input type="text" placeholder="Subject Taught" className="dynamic-input" value={dynamicProfile.teacherFields.subjectTaught} onChange={(e) => handleDynamicChange("teacherFields", "subjectTaught", e.target.value)} />
                  <div className="form-row">
                    <input type="text" placeholder="Years of Experience" className="dynamic-input" value={dynamicProfile.teacherFields.yearsOfExperience} onChange={(e) => handleDynamicChange("teacherFields", "yearsOfExperience", e.target.value)} />
                    <input type="text" placeholder="Preferred Location" className="dynamic-input" value={dynamicProfile.teacherFields.preferredLocation} onChange={(e) => handleDynamicChange("teacherFields", "preferredLocation", e.target.value)} />
                  </div>
                </div>
              )}

              {role === "Career Counselling" && (
                <div className="role-fields-container">
                  <input type="text" placeholder="Organization Name" className="dynamic-input" value={dynamicProfile.counsellorFields.organizationName} onChange={(e) => handleDynamicChange("counsellorFields", "organizationName", e.target.value)} />
                  <input type="text" placeholder="Years of Experience" className="dynamic-input" value={dynamicProfile.counsellorFields.yearsOfExperience} onChange={(e) => handleDynamicChange("counsellorFields", "yearsOfExperience", e.target.value)} />
                  <input type="number" placeholder="Student Volume (Monthly)" className="dynamic-input" value={dynamicProfile.counsellorFields.studentVolumeMonthly} onChange={(e) => handleDynamicChange("counsellorFields", "studentVolumeMonthly", e.target.value)} />
                </div>
              )}

              {role === "Coaching Partner" && (
                <div className="role-fields-container">
                  <input type="text" placeholder="Institute Name" className="dynamic-input" value={dynamicProfile.coachingFields.instituteName} onChange={(e) => handleDynamicChange("coachingFields", "instituteName", e.target.value)} />
                  <select className="dynamic-input" value={dynamicProfile.coachingFields.coursesOffered} onChange={(e) => handleDynamicChange("coachingFields", "coursesOffered", e.target.value)}>
                    <option value="">Courses Offered</option>
                    <option value="NIFT / NIT">NIFT / NIT</option>
                    <option value="JEE / NEET">JEE / NEET</option>
                  </select>
                  <input type="number" placeholder="Number of Students" className="dynamic-input" value={dynamicProfile.coachingFields.numberOfStudents} onChange={(e) => handleDynamicChange("coachingFields", "numberOfStudents", e.target.value)} />
                </div>
              )}
            </div>

            <div className="input-group">
              <textarea className="form-textarea" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message / Requirement"></textarea>
            </div>

            {/* 🔥 FIX 3: Button type="submit" automatic form trigger handle karega */}
            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Registering..." : "Register Now →"}
            </button>
            
            <div className="form-footer-note">
              <ShieldCheck size={16} color="#22c55e" />
              <span>Your information is safe with us.</span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PopularCTA;