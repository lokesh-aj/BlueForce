import React, { useState } from 'react';
import { Home, Calendar, Trophy, User, Settings, Download } from 'lucide-react';
import './styles/Dashboard.css'; // Assuming you have a CSS file for styling

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');
  
  const navigationItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Events', icon: Calendar, active: false },
    { name: 'Leaderboard', icon: Trophy, active: false },
    { name: 'Profile', icon: User, active: false },
    { name: 'Settings', icon: Settings, active: false }
  ];

  const wasteData = [
    { name: 'Plastic', data: [20, 45, 30, 60, 35, 55, 40], color: '#3b82f6' },
    { name: 'Glass', data: [25, 35, 50, 30, 45, 40, 35], color: '#06b6d4' },
    { name: 'Metal', data: [30, 50, 25, 40, 35, 45, 30], color: '#8b5cf6' },
    { name: 'Paper', data: [35, 25, 55, 40, 60, 35, 50], color: '#10b981' },
    { name: 'Other', data: [40, 60, 35, 50, 30, 45, 55], color: '#f59e0b' }
  ];

  const WaveChart = ({ data, color }) => {
    const maxValue = Math.max(...data);
    const width = 120;
    const height = 60;
    const padding = 10;
    
    // Create smooth curve points
    const points = data.map((value, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y = height - padding - ((value / maxValue) * (height - 2 * padding));
      return { x, y };
    });
    
    // Create smooth path using curves
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i - 1];
      const currentPoint = points[i];
      const cpx = prevPoint.x + (currentPoint.x - prevPoint.x) * 0.5;
      path += ` Q ${cpx} ${prevPoint.y} ${currentPoint.x} ${currentPoint.y}`;
    }
    
    return (
      <div className="wave-chart">
        <svg width={width} height={height} className="wave-svg">
          {/* Grid lines */}
          <defs>
            <pattern id={`grid-${color.slice(1)}`} width="20" height="10" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 10" fill="none" stroke="#f3f4f6" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${color.slice(1)})`} opacity="0.3"/>
          
          {/* Area under curve */}
          <path
            d={`${path} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`}
            fill={color}
            fillOpacity="0.1"
          />
          
          {/* Main curve */}
          <path
            d={path}
            fill="none"
            stroke={color}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Data points */}
          {points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="3"
              fill={color}
              stroke="white"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="user-profile">
            <div className="user-avatar">
              <span className="avatar-text">S</span>
            </div>
            <div className="user-info">
              <h3 className="user-name">Sundari</h3>
              <p className="user-role">Volunteer</p>
            </div>
          </div>
          
          <nav className="navigation">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveTab(item.name)}
                  className={`nav-item ${item.name === activeTab ? 'nav-item-active' : ''}`}
                >
                  <Icon size={20} />
                  <span className="nav-text">{item.name}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1 className="page-title">Dashboard</h1>
        
        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-label">Total XP Earned</h3>
            <p className="stat-value">1,250</p>
          </div>
          
          <div className="stat-card">
            <h3 className="stat-label">Clean-ups Attended</h3>
            <p className="stat-value">15</p>
          </div>
        </div>

        {/* Waste Types Collected */}
        <div className="waste-section">
          <h3 className="section-title">Waste Types Collected</h3>
          
          <div className="waste-summary">
            <div className="waste-header">
              <span className="waste-label">Waste Types</span>
              <span className="waste-growth">Total +10%</span>
            </div>
            <div className="waste-percentage">60%</div>
          </div>
          
          <div className="waste-charts">
            {wasteData.map((waste, index) => (
              <div key={waste.name} className="waste-chart-item">
                <WaveChart data={waste.data} color={waste.color} />
                <span className="waste-name">{waste.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Badges and Certificate */}
        <div className="bottom-section">
          {/* Badges */}
          <div className="badges-section">
            <h3 className="section-title">Badges Earned</h3>
            <div className="badges-grid">
              {/* Eco Warrior */}
              <div className="badge eco-warrior">
                <div className="badge-content">
                  <div className="badge-icon eco-icon">
                    <div className="eco-inner">
                      <div className="eco-center"></div>
                    </div>
                  </div>
                  <h4 className="badge-title">Eco Warrior</h4>
                </div>
                <div className="badge-decoration"></div>
              </div>

              {/* Community Hero */}
              <div className="badge community-hero">
                <div className="badge-icon hero-icon">
                  <div className="hero-inner">
                    <span className="hero-star">★</span>
                  </div>
                </div>
                <h4 className="badge-title">Community Hero</h4>
              </div>

              {/* Ocean Saver */}
              <div className="badge ocean-saver">
                <div className="badge-icon ocean-icon">
                  <div className="ocean-inner">
                    <span className="ocean-wave">~</span>
                  </div>
                </div>
                <h4 className="badge-title">Ocean Saver</h4>
              </div>

              {/* Trail Blazer */}
              <div className="badge trail-blazer">
                <div className="badge-icon trail-icon">
                  <div className="trail-inner"></div>
                </div>
                <h4 className="badge-title">Trail Blazer</h4>
              </div>
            </div>
          </div>

          {/* Participation Certificate */}
          <div className="certificate-section">
            <h3 className="section-title">Participation Certificate</h3>
            
            <div className="certificate-info">
              <h4 className="certificate-label">Certificate of Participation</h4>
              <h5 className="certificate-title">Download your certificate</h5>
              <p className="certificate-description">
                Thank you for your contribution to a cleaner environment. Download your certificate to 
                showcase your dedication.
              </p>
              
              <button className="download-btn">
                <Download size={16} />
                <span>Download</span>
              </button>
            </div>
            
            {/* Certificate Preview */}
            <div className="certificate-preview">
              <div className="certificate-border">
                <div className="certificate-content">
                  <div className="certificate-text">
                    <div className="cert-type">Certificate</div>
                    <div className="cert-title">PARTICIPATION CERTIFICATE</div>
                    <div className="cert-subtitle">This certifies that</div>
                    <div className="cert-name">SUNDARI VOLUNTEER</div>
                    <div className="cert-description">
                      has successfully participated in<br />
                      environmental cleanup activities
                    </div>
                    <div className="cert-signature">
                      <div className="signature-text">Authorized Signature</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;