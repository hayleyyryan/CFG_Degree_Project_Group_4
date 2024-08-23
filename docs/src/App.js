import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Overview from './components/Overview';
import DataAnalysis from './components/DataAnalysis';
import Results from './components/Results';
import './App.css';

function App() {
  const [showMainApp, setShowMainApp] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  const handleYesClick = () => {
    setShowMainApp(true);
  };

  useEffect(() => {
    if (showMainApp) {
      const timer = setTimeout(() => {
        setShowWelcomeMessage(false);
      }, 3000); // 3 seconds

      return () => clearTimeout(timer); // Cleanup timer on unmount or re-render
    }
  }, [showMainApp]);


  return (
<div className="App">
      {!showMainApp ? (
        <div className="landing-page">
          <h1>Do you want to play a game?</h1>
          <button className="game-button" onClick={handleYesClick}>
            <span className="flashing-symbol">{`>`}</span> Yes
          </button>
        </div>
      ) : (
        <div className="main-app">
          {showWelcomeMessage && <h1 className="welcome-message">Welcome to our project!</h1>}
          {!showWelcomeMessage && (
            <div>
          <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/data-analysis" element={<DataAnalysis />} />
                        <Route path="/results" element={<Results />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
        </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;