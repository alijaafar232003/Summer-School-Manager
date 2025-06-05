// src/pages/MainPage.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import './MainPage.css';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="main-container">
      {/* Fixed NavBar at the very top */}
      <NavBar />

      {/* Full‐height content area under the Navbar */}
      <div className="main-content">
        <div className="content-card">
          <h1 className="content-heading">Welcome to Summer School Manager!</h1>
          <p className="content-subtext">
            Streamline your summer school journey—pick your pathway, explore classes, and get started in minutes.
          </p>
          <button
            className="primary-button"
            onClick={() => navigate('/pathway')}
          >
            Choose My Pathway
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
