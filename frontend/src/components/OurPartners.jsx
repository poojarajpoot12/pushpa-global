import React, { useState, useEffect } from 'react';
import '../css/OurPartners.css';

export default function OurPartners() {
  // Database core state structures
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Clean multi-layered filter controls
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');  
  const [selectedLevel, setSelectedLevel] = useState('All');        
  const [selectedGeo, setSelectedGeo] = useState('All');            

  // Advanced State Simulation Router (For clean paths and back actions)
  const [currentPath, setCurrentPath] = useState('/partners'); 
  const [selectedUniId, setSelectedUniId] = useState(null);
  const [activeTab, setActiveTab] = useState('UG'); 

  const [availableCategories, setAvailableCategories] = useState([]);

  // FETCH & ACCURATE GROUPING PIPELINE
  useEffect(() => {
    fetch('https://sheetdb.io/api/v1/yusf7oaui7loc')
      .then((res) => res.json())
      .then((data) => {
        const uniqueCategories = new Set();
        
        const groupedData = data.reduce((accumulator, item) => {
          const uniName = item['University Name']?.trim();
          if (!uniName) return accumulator;

          if (item['Course Category']) {
            item['Course Category'].split('&').forEach(cat => uniqueCategories.add(cat.trim()));
          }

          const degreeTypeStr = (item['Degree Type'] || '').trim().toLowerCase();
          let currentLevel = 'UG'; 
          
          if (degreeTypeStr === 'postgraduate' || degreeTypeStr === 'pg' || degreeTypeStr.includes('master')) {
            currentLevel = 'PG';
          } else if (degreeTypeStr === 'undergraduate' || degreeTypeStr === 'ug' || degreeTypeStr.includes('bachelor')) {
            currentLevel = 'UG';
          }

          const newProgram = {
            name: item['Programme Name'] || 'Integrated Qualification Stream',
            level: currentLevel, 
            fee: item['Approx Total Fees (INR)'] || 'As per norms',
            hostel: item['Hostel Fees (Approx.)'] || 'Contact Campus Liaison',
            eligibility: item['Eligibility Criteria'] || 'Standard Academic Benchmarks Apply',
            exam: item['Entrance Exam'] || 'Merit Verification Metric'
          };

          if (accumulator[uniName]) {
            accumulator[uniName].programs.push(newProgram);
            if (item['Course Category'] && !accumulator[uniName].categoryTags.includes(item['Course Category'])) {
              accumulator[uniName].categoryTags.push(item['Course Category']);
            }
          } else {
            const isAbroad = item['University Type'] === 'Abroad' || item['State']?.toUpperCase().includes('USA') || item['City']?.toUpperCase().includes('NEW YORK');
            
            accumulator[uniName] = {
              id: Object.keys(accumulator).length + 1,
              name: uniName,
              type: isAbroad ? 'Abroad' : 'Domestic',
              location: `${item['City'] || ''}, ${item['State'] || 'India'}`,
              placement: item['Placement Average'] || 'N/A',
              categoryTags: item['Course Category'] ? [item['Course Category']] : ['General'],
              image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop',
              desc: item['Counsellor Notes'] || 'Accredited strategic institution providing global networking access structures.',
              status: item['Application Status'] || 'Open',
              programs: [newProgram]
            };
          }

          return accumulator;
        }, {});

        setAvailableCategories(Array.from(uniqueCategories));
        setUniversities(Object.values(groupedData));
        setLoading(false);
      })
      .catch((err) => {
        console.error('API Stream Aggregator Matrix Connection Interrupted:', err);
        setLoading(false);
      });
  }, []);

  // Router component state simulator triggers
  const navigateToDetail = (id) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedUniId(id);
    setCurrentPath(`/partners/${id}`);
  };

  const navigateToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedUniId(null);
    setCurrentPath('/partners');
  };

  // MULTI-LAYERED SEARCH FILTERS EVALUATION ALGORITHM
  const filteredUnis = universities.map(uni => {
    const matchingPrograms = uni.programs.filter(prog => {
      const cleanSearch = searchQuery.toLowerCase().trim();
      const matchesSearch = cleanSearch === '' || 
        prog.name.toLowerCase().includes(cleanSearch) || 
        uni.name.toLowerCase().includes(cleanSearch);

      const matchesLevel = selectedLevel === 'All' || prog.level === selectedLevel;

      return matchesSearch && matchesLevel;
    });

    return {
      ...uni,
      filteredPrograms: matchingPrograms
    };
  }).filter(uni => {
    const hasValidPrograms = uni.filteredPrograms.length > 0;
    const matchesGeo = selectedGeo === 'All' || uni.type === selectedGeo;
    const matchesCategory = selectedCategory === 'All' || uni.categoryTags.some(tag => tag.includes(selectedCategory));

    return hasValidPrograms && matchesGeo && matchesCategory;
  });

  const currentSelectedUni = universities.find(u => u.id === selectedUniId);

  if (loading) {
    return (
      <div className="ed-loading-container">
        <div className="ed-loading-spinner" />
        <h3 className="ed-loading-text">Compiling Advanced Academic Registers...</h3>
      </div>
    );
  }

  // ==========================================
  // RENDER PATH VIEW SCREEN: DETAILED WORKSPACE ROUTE (`/partners/:id`)
  // ==========================================
  if (currentPath.startsWith('/partners/') && currentSelectedUni) {
    const ugPrograms = currentSelectedUni.programs.filter(p => p.level === 'UG');
    const pgPrograms = currentSelectedUni.programs.filter(p => p.level === 'PG');
    const targetDisplayPrograms = activeTab === 'UG' ? ugPrograms : pgPrograms;

    return (
      <div className="ed-page-wrapper" style={{ padding: '0 0 60px 0' }}>
        <section className="ed-details-hero-section">
          <div className="ed-details-hero-inner">
            <button onClick={navigateToHome} className="ed-details-return-btn">
              ← Return to Our Partners Dashboard
            </button>
            <span className="ed-hero-badge" style={{ background: '#10b981' }}>🟢 Admissions Open</span>
            <h1 className="ed-details-header-title">{currentSelectedUni.name}</h1>
            <p className="ed-details-header-desc">{currentSelectedUni.desc}</p>
            
            <div className="ed-details-stats-flexrow">
              <div className="ed-details-stat-tag-node">📍 <strong>Campus Hub:</strong> {currentSelectedUni.location}</div>
              <div className="ed-details-stat-tag-node">💼 <strong>Average Placement Index:</strong> {currentSelectedUni.placement}</div>
            </div>
          </div>
        </section>

        <section className="ed-section-container" style={{ marginTop: '40px' }}>
          <div className="ed-details-split-tab-container">
            <div className="ed-details-split-header-group">
              <h2>Dynamic Academic Catalog</h2>
              <p>Segregated dynamic arrays parsed natively from backend matrices records.</p>
            </div>
            
            <div className="ed-details-tab-controls-deck">
              <button 
                onClick={() => setActiveTab('UG')}
                className="ed-details-tab-switch-btn"
                style={{ 
                  background: activeTab === 'UG' ? '#10b981' : '#fff', 
                  color: activeTab === 'UG' ? '#fff' : '#475569' 
                }}
              >
                🎓 Undergrad Stream Level ({ugPrograms.length})
              </button>
              <button 
                onClick={() => setActiveTab('PG')}
                className="ed-details-tab-switch-btn"
                style={{ 
                  background: activeTab === 'PG' ? '#10b981' : '#fff', 
                  color: activeTab === 'PG' ? '#fff' : '#475569' 
                }}
              >
                🔬 Postgrad Stream Level ({pgPrograms.length})
              </button>
            </div>
          </div>

          <div className="ed-details-programs-grid">
            {targetDisplayPrograms.map((prog, idx) => (
              <div key={idx} className="ed-program-item-card">
                <div>
                  <div className="ed-program-card-header">
                    <h4>{prog.name}</h4>
                    <span 
                      className="ed-program-tier-badge"
                      style={{ 
                        background: activeTab === 'UG' ? '#eff6ff' : '#f0fdf4', 
                        color: activeTab === 'UG' ? '#2563eb' : '#16a34a' 
                      }}
                    >
                      {prog.level}
                    </span>
                  </div>
                  
                  <div className="ed-program-metrics-v-table">
                    <div><strong>💰 Tuition Base Fee:</strong> {prog.fee}</div>
                    <div><strong>Housing Allocation:</strong> {prog.hostel}</div>
                    <div><strong>📝 Required Exam Index:</strong> {prog.exam}</div>
                  </div>
                </div>
                
                <div>
                  <div className="ed-program-eligibility-footer-row">
                    <strong style={{ color: '#334155' }}>Eligibility Criteria Threshold:</strong> {prog.eligibility}
                  </div>
                  <button 
                    onClick={() => alert(`Seat locking routine initiated for program: ${prog.name}`)}
                    className="ed-program-lock-seat-btn"
                  >
                    Lock Selection Seat →
                  </button>
                </div>
              </div>
            ))}

            {targetDisplayPrograms.length === 0 && (
              <div className="ed-program-empty-fallback-box">
                <span style={{ fontSize: '40px' }}>📋</span>
                <h3 style={{ color: '#475569', marginTop: '15px' }}>No Streams Listed Under This Academic Tier</h3>
                <p style={{ color: '#94a3b8', fontSize: '14px' }}>Verify back-end records allocation configurations profiles metrics.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // ==========================================
  // RENDER PATH VIEW SCREEN: CORE MAIN HUB DASHBOARD ROUTE (`/partners`)
  // ==========================================
  return (
    <div className="ed-page-wrapper">
      <section className="ed-premium-hero">
        <div className="ed-hero-flex-container">
          <div className="ed-hero-left">
            <span className="ed-hero-badge">
              ⚡ Advanced Row-Aggregation Architecture Engine Active
            </span>
            <h1 className="ed-hero-title">
              Explore Our Global <br />
              <span className="ed-gradient-text">University Network</span>
            </h1>
            <p className="ed-hero-desc">
              Our smart framework automatically collapses hundreds of repetitive duplicate database table cells into premium, responsive unified glassmorphism nodes dashboard.
            </p>
          </div>

          <div className="ed-hero-right">
            <div className="ed-hero-glow-effect" />
            <img 
              src="https://newinti.edu.my/wp-content/uploads/2023/08/University-Partners-Banner.png" 
              alt="Global Educational Hub Center" 
              className="ed-hero-banner-image"
            />
          </div>
        </div>
      </section>

      <div className="ed-filter-deck-wrapper">
        <div className="ed-filter-deck-card">
          <div className="ed-search-bar-frame">
            <span className="ed-search-icon">🔍</span>
            <input 
              type="text"
              placeholder="Search anything instantly... Type 'bba', 'cse', 'b.tech' or preferred institutional names..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="ed-search-native-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="ed-clear-search-btn">✕</button>
            )}
          </div>

          <div className="ed-dropdown-grid-deck">
            <div className="ed-filter-column-node">
              <label className="ed-filter-label">📚 Academic Domain Hub</label>
              <select 
                value={selectedCategory} 
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="ed-filter-select-input"
              >
                <option value="All">🌐 All Academic Categories</option>
                {availableCategories.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="ed-filter-column-node">
              <label className="ed-filter-label">🎓 Degree Level Track</label>
              <select 
                value={selectedLevel} 
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="ed-filter-select-input"
              >
                <option value="All">🪐 All Levels Combined (UG / PG)</option>
                <option value="UG">🪪 Undergrad Tracks (UG Only)</option>
                <option value="PG">🔬 Postgrad Tracks (PG Only)</option>
              </select>
            </div>

            <div className="ed-filter-column-node">
              <label className="ed-filter-label">🌍 Geography Scope</label>
              <select 
                value={selectedGeo} 
                onChange={(e) => setSelectedGeo(e.target.value)}
                className="ed-filter-select-input"
              >
                <option value="All">🌎 Combined Global Matrix Networks</option>
                <option value="Domestic">🇮🇳 Indian Domestic Hub Centers</option>
                <option value="Abroad">✈️ International Academic Establishments</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <section className="ed-section-container">
        {filteredUnis.length > 0 ? (
          <div className="ed-universities-card-grid">
            {filteredUnis.map((uni) => (
              <div key={uni.id} className="ed-glass-uni-card">
                <div className="ed-card-thumbnail-wrapper">
                  <img src={uni.image} alt={uni.name} className="ed-card-thumbnail-img" />
                  <span 
                    className="ed-card-type-geo-badge"
                    style={{ background: uni.type === 'Abroad' ? '#2563eb' : '#059669' }}
                  >
                    {uni.type}
                  </span>
                </div>

                <div className="ed-card-body-content">
                  <div>
                    <div className="ed-card-location-row">📍 {uni.location}</div>
                    <h3 className="ed-card-heading-title">{uni.name}</h3>
                    <p className="ed-card-desc-snippet">{uni.desc.substring(0, 95)}...</p>
                  </div>

                  <div>
                    <div className="ed-card-meta-track-box">
                      📚 Map Tracks Found: <strong style={{ color: '#10b981' }}>{uni.filteredPrograms.length} Courses Matches</strong>
                    </div>
                    <button onClick={() => navigateToDetail(uni.id)} className="ed-card-primary-action-btn">
                      View Campus & Programs →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="ed-fallback-empty-channel">
            <span style={{ fontSize: '48px' }}>🔮</span>
            <h3 className="ed-fallback-empty-heading">No Matrix Channels Found</h3>
            <p className="ed-fallback-empty-desc">Try typing an alternate pattern format or clear the current active string selectors query deck context.</p>
          </div>
        )}
      </section>
    </div>
  );
}