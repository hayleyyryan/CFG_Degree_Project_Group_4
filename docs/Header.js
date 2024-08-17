import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <h1>Data Analysis Project</h1>
            <nav>
                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
                <NavLink to="/overview" activeClassName="active-link">Overview</NavLink>
                <NavLink to="/data-analysis" activeClassName="active-link">Data & Analysis</NavLink>
                <NavLink to="/results" activeClassName="active-link">Results</NavLink>
                <NavLink to="/conclusion" activeClassName="active-link">Conclusion</NavLink>
            </nav>
        </header>
    );
}

export default Header;
