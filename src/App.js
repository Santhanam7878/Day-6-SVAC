import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamPage from './components/TeamPage';
import AddMemberPage from './components/AddMemberPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TeamPage />} />
          <Route path="/add-member" element={<AddMemberPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
