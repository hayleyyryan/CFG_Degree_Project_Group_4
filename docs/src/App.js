import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Overview from './components/Overview';
import DataAnalysis from './components/DataAnalysis';
import Results from './components/Results';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app">
                <Header />
                <main>
                    <Routes>
                        <Route path="/CFG_Degree_Project_Group_4/" element={<Home />} />
                        <Route path="/CFG_Degree_Project_Group_4/overview" element={<Overview />} />
                        <Route path="/CFG_Degree_Project_Group_4/data-analysis" element={<DataAnalysis />} />
                        <Route path="/CFG_Degree_Project_Group_4/results" element={<Results />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
