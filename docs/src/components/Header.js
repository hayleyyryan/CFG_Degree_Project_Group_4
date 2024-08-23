import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode', !darkMode);
    };

    return (
        <header className="header">
            <h1>Representation of non-male characters in games</h1>
            <nav>
                <NavLink exact="true" to="/main/home" className="nav-link" activeClassName="active-link">
                    Home
                </NavLink>
                <NavLink to="/main/overview" className="nav-link" activeClassName="active-link">
                    Overview
                </NavLink>
                <NavLink to="/main/data-analysis" className="nav-link" activeClassName="active-link">
                    Data & Analysis
                </NavLink>
                <NavLink to="/main/results" className="nav-link" activeClassName="active-link">
                    Results
                </NavLink>
                <NavLink to="/main/conclusion" className="nav-link" activeClassName="active-link">
                    Conclusion
                </NavLink>
            </nav>
            <button onClick={toggleDarkMode}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
}

export default Header;
