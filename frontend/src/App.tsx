// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PathwayForm from './pages/PathwayForm';

const App: React.FC = () => {
  const loggedIn = Boolean(localStorage.getItem('loggedIn'));

  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn ? <Navigate to="/main" /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/main"
        element={loggedIn ? <MainPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/pathway"
        element={loggedIn ? <PathwayForm /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<p>404: Page not found</p>} />
    </Routes>
  );
};

export default App;
