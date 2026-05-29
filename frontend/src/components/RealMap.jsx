import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker,Tooltip } from 'react-leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, School, Banknote, LineChart } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../css/realMap.css';
import { useNavigate } from 'react-router-dom';

// Custom Marker Icon (Blinking Effect)
const createBlinkingIcon = (isActive) => new L.DivIcon({
  className: 'custom-marker',
  html: `<div class="marker-wrapper ${isActive ? 'active' : ''}">
           <div class="ripple"></div>
           <div class="dot"></div>
         </div>`,
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

// Accurate Country Data with Coordinates
const countryData = {
  "Moldova": { coords: [47.4116, 28.3699], courses: ["Medicine", "Dentistry", "Business"], universities: ["USMF (State University)"], salary: "₹10L – ₹25L", scope: "Affordable medical studies" },
  "UK": { coords: [55.3781, -3.4360], courses: ["Law", "Finance", "Management"], universities: ["Oxford", "Cambridge"], salary: "₹45L – ₹80L", scope: "Top academic destination" },
  "Canada": { coords: [56.1304, -106.3468], courses: ["Data Science", "IT", "Business"], universities: ["UofT", "UBC"], salary: "₹50L – ₹90L", scope: "Permanent Residency focus" },
  "USA": { coords: [37.0902, -95.7129], courses: ["Computer Science", "MBA"], universities: ["MIT", "Stanford"], salary: "₹80L – ₹1.5Cr", scope: "Global Tech Leader" },
  "Australia": { coords: [-25.2744, 133.7751], courses: ["Engineering", "Healthcare"], universities: ["Uni Melbourne"], salary: "₹40L – ₹70L", scope: "High quality of life" },
  "Germany": { coords: [51.1657, 10.4515], courses: ["Automotive", "Mechanical"], universities: ["TU Munich"], salary: "₹45L – ₹80L", scope: "Low tuition fees" },
  "Ireland": { coords: [53.4129, -8.2439], courses: ["Pharma", "Software"], universities: ["Trinity College"], salary: "₹35L – ₹75L", scope: "EU Tech Hub" },
  "Japan": { coords: [36.2048, 138.2529], courses: ["Robotics", "Electronics"], universities: ["Uni of Tokyo"], salary: "₹30L – ₹55L", scope: "Advanced tech culture" },
  "Singapore": { coords: [1.3521, 103.8198], courses: ["Finance", "Supply Chain"], universities: ["NUS", "NTU"], salary: "₹55L – ₹95L", scope: "Asia financial hub" },
  "Netherlands": {
  coords: [52.1326, 5.2913],
  courses: ["Engineering", "Business", "Data Science", "Arts"],
  universities: ["University of Amsterdam", "Delft University of Technology", "Erasmus University Rotterdam"],
  salary: "₹25L – ₹60L",
  scope: "Strong job market with high-quality education"
},

"New-Zealand": {
  coords: [-40.9006, 174.8860],
  courses: ["Agriculture", "Business", "IT", "Hospitality"],
  universities: ["University of Auckland", "University of Otago", "Victoria University of Wellington"],
  salary: "₹20L – ₹50L",
  scope: "Post-study work visa & peaceful lifestyle"
},

"France": {
  coords: [46.2276, 2.2137],
  courses: ["Fashion", "Business", "Culinary Arts", "Engineering"],
  universities: ["Sorbonne University", "HEC Paris", "École Polytechnique"],
  salary: "₹30L – ₹70L",
  scope: "Global exposure with strong cultural experience"
},

"UAE": {
  coords: [23.4241, 53.8478],
  courses: ["Business", "Engineering", "Hospitality", "Aviation"],
  universities: ["University of Dubai", "Khalifa University", "American University of Sharjah"],
  salary: "₹25L – ₹80L",
  scope: "Tax-free income and global career hub"
}
};

const RealMap = () => {
  const [selectedCountry, setSelectedCountry] = useState("UK");
  const current = countryData[selectedCountry];
  const navigate = useNavigate();

  return (
    <div className="map-page-wrapper">
      <div className="map-container">
        
        {/* LEFT: FIXED MAP VIEW */}
        <div className="map-view">
          <MapContainer 
            center={[35, 0]} // Perfect center to show all dots
            zoom={2}         // Zoom level 2 ensures world map visibility
            scrollWheelZoom={false} 
            dragging={false} 
            zoomControl={false}
            doubleClickZoom={false}
            className="leaflet-map"
          >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
            {Object.entries(countryData).map(([name, data]) => (
              <Marker
                key={name}
                position={data.coords}
                icon={createBlinkingIcon(selectedCountry === name)}
                eventHandlers={{ click: () => setSelectedCountry(name) }}>
                  {selectedCountry === name && (
                  <Tooltip 
                  direction="top" 
                  offset={[0, -10]} 
                  opacity={1} 
                  permanent={selectedCountry === name} // Sirf selected country ka naam hamesha dikhega
                >
                  <span className="map-tooltip">{name}</span>
                </Tooltip>
                )}
              </Marker>
                        
            ))}
          </MapContainer>
        </div>

        {/* RIGHT: DYNAMIC SIDEBAR */}
        <aside className="info-sidebar">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="sidebar-title">{selectedCountry}</h2>

              <div className="sidebar-group">
                <label className="sidebar-label"><GraduationCap size={18} color="#60a5fa"/> Courses</label>
                {current.courses.map(c => <div key={c} className="field-box">{c}</div>)}
              </div>

              <div className="sidebar-group">
                <label className="sidebar-label"><School size={18} color="#60a5fa"/> Universities</label>
                {current.universities.map(u => <div key={u} className="field-box">{u}</div>)}
              </div>

              <div className="sidebar-group">
                <label className="sidebar-label"><Banknote size={18} color="#fbbf24"/> Salary</label>
                <div className="field-box">{current.salary}</div>
              </div>

              <div className="sidebar-group">
                <label className="sidebar-label"><LineChart size={18} color="#34d399"/> Scope</label>
                <div className="field-box">{current.scope}</div>
              </div>

              <button className="apply-btn" onClick={() => navigate("/register")}>
                Apply Now
              </button>
            </motion.div>
          </AnimatePresence>
        </aside>
      </div>
    </div>
  );
};

export default RealMap;