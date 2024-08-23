import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Text, Switch } from '@nextui-org/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import './Header.css';

const Header = ({ onToggleTheme, isDark }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title-container">
          <Text h2 className="header-title">
            Representation of Non-Male Characters in Games
          </Text>
          <div className="theme-toggle">
            <Switch
              checked={isDark}
              onChange={onToggleTheme}
              iconOff={<MoonIcon width={24} height={24} />}
              iconOn={<SunIcon width={24} height={24} />}
            />
          </div>
        </div>
        <nav className="nav">
          <Link to="/main/home">
            Home
          </Link>
          <Link to="/main/overview">
            Overview
          </Link>
          <Link to="/main/data-analysis">
            Data Analysis
          </Link>
          <Link to="/main/results">
            Results
          </Link>
          <Link to="/main/conclusion">
            Conclusion
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
