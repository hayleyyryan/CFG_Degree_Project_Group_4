import React from 'react';
import { Link } from 'react-router-dom';
import { Text, Switch, Container } from '@nextui-org/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import './Header.css';

const Header = ({ onToggleTheme, isDark }) => {
  return (
    <header className={`header ${isDark ? 'dark-mode' : ''}`}>
      <Container>
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
            <Link className="nav-link" to="/main/home">Home</Link>
            <Link className="nav-link" to="/main/overview">Overview</Link>
            <Link className="nav-link" to="/main/data-analysis">Data Analysis</Link>
            <Link className="nav-link" to="/main/results">Results</Link>
            <Link className="nav-link" to="/main/conclusion">Conclusion</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
