import React from 'react';
import './ProfileCard.css';

// Functional Component with Props
const ProfileCard = ({ name, role, photo, email, department, experience }) => {
  return (
    <div className="profile-card">
      <div className="card-header">
        <img 
          src={photo} 
          alt={`${name}'s profile`}
          className="profile-photo"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/150x150/4CAF50/white?text=No+Image';
          }}
        />
        <div className="status-indicator"></div>
      </div>
      
      <div className="card-body">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-role">{role}</p>
        <p className="profile-department">{department}</p>
        
        <div className="profile-stats">
          <div className="stat">
            <span className="stat-value">{experience}</span>
            <span className="stat-label">Years Exp</span>
          </div>
          <div className="stat">
            <span className="stat-value">{department}</span>
            <span className="stat-label">Dept</span>
          </div>
        </div>
        
        <a href={`mailto:${email}`} className="contact-btn">
          Contact
        </a>
      </div>
      
      <div className="card-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
      </div>
    </div>
  );
};

// Class Component Alternative (for demonstration)
class ProfileCardClass extends React.Component {
  render() {
    const { name, role, photo, email, department, experience } = this.props;
    
    return (
      <div className="profile-card class-card">
        <div className="card-header">
          <img 
            src={photo} 
            alt={`${name}'s profile`}
            className="profile-photo"
          />
        </div>
        
        <div className="card-body">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-role">{role}</p>
          <p className="profile-department">{department}</p>
          
          <div className="profile-stats">
            <div className="stat">
              <span className="stat-value">{experience}</span>
              <span className="stat-label">Years</span>
            </div>
          </div>
          
          <a href={`mailto:${email}`} className="contact-btn">
            Get in Touch
          </a>
        </div>
      </div>
    );
  }
}

export { ProfileCard, ProfileCardClass };
