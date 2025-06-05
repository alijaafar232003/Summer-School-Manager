// src/components/NavBar.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const studentName = localStorage.getItem('studentName') || 'Student';

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('studentName');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Wrap the logo in a <Link> so clicking it goes to /main */}
      <div className="navbar-left">
        <Link to="/main" className="navbar-logo-link">
          <span className="navbar-logo">Summer School</span>
        </Link>
      </div>

      {/* Right side: welcome text + logout */}
      <div className="navbar-right">
        <span className="welcome-text">Welcome, {studentName}!</span>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
