import React, { useState } from 'react';
import { ProfileCard } from './ProfileCard';
import { teamMembers as initialMembers } from '../data/teamData';
import { useNavigate } from 'react-router-dom';
import './TeamPage.css';

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState(initialMembers);
  const navigate = useNavigate();

  const handleAddMember = () => {
    navigate('/add-member');
  };

  const handleDeleteMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  return (
    <div className="team-page">
      <header className="team-header">
        <h1>Our Amazing Team</h1>
        <p>Meet the talented individuals who make our company great</p>
      </header>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card">
            <ProfileCard
              name={member.name}
              role={member.role}
              photo={member.photo}
              email={member.email}
              department={member.department}
              experience={member.experience}
            />
            <button 
              onClick={() => handleDeleteMember(member.id)} 
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button onClick={handleAddMember} className="add-member-button">
        Add New Member
      </button>
    </div>
  );
};

export default TeamPage;
