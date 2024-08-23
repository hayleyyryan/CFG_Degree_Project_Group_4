import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectOverview from './components/Overview';
import DataAnalysis from "./components/DataAnalysis"
import Results from "./components/Results"
import './App.css';

// Landing Page Component
const LandingPage = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate('/welcome');
  };

  return (
    <div className="landing-page">
      <div className="landing-container">
        <h1>Do you want to play a game?</h1>
        <button className="game-button" onClick={handleYesClick}>
          <span className="flashing-symbol">{`>`}</span> Yes
        </button>
      </div>
    </div>
  );
}

// Welcome Page Component
const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main/home');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigate]);

  return (
    <div className="welcome-page">
      <h1>Welcome to our project!</h1>
    </div>
  );
}

function MainApp() {
    return (
      <>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/overview" element={<ProjectOverview />} />
            <Route path="/data-analysis" element={<DataAnalysis />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
  
  // App Component with Router
  function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/start" element={<LandingPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/main/*" element={<MainApp />} />
            <Route path="/" element={<Navigate to="/start" />} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
