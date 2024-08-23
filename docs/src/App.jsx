import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { NextUIProvider, createTheme } from '@nextui-org/react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ProjectOverview from './components/Overview';
import DataAnalysis from './components/DataAnalysis';
import Results from './components/Results';
import LandingPage from './components/LandingPage';
import WelcomePage from './components/WelcomePage';
import './App.css';

const lightTheme = createTheme({
  type: 'light',
});

const darkTheme = createTheme({
  type: 'dark',
});

// Layout component for pages that should include the header
const MainLayout = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <NextUIProvider theme={isDark ? darkTheme : lightTheme}>
      <Header onToggleTheme={toggleTheme} isDark={isDark} />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </NextUIProvider>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/start" />} />
        <Route path="/start" element={<LandingPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/main/*" element={<MainLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="overview" element={<ProjectOverview />} />
          <Route path="data-analysis" element={<DataAnalysis />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
