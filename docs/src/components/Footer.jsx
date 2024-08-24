// Footer.js
import React from 'react';
import { Container, Text, Link } from '@nextui-org/react';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon
import './Footer.css'; // Import custom styles

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <Text className="footer-text">
          &copy; 2024 Summer CFGDegree - Data Science - Group 4
        </Text>
        <Link href="https://github.com/hayleyyryan/CFG_Degree_Project_Group_4" className="footer-link" isExternal>
          <FaGithub className="footer-icon" />
          <span className="footer-link-text">GitHub Repository</span>
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
