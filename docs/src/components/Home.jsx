import React from 'react';
import { Card, Image, Spacer, Text, Container, Grid } from '@nextui-org/react';
import axe from './axe.png';
import crystalball from './crystal-ball.png';
import gate from './gate.png';
import meteor from './meteor.png';
import money from './money.png';
import './Home.css';

const Home = () => {
  return (
    <Container className="home-container" css={{mw: 'fit-content'}}>
      {/* Hero Section */}
      <Card className="hero-card" variant="bordered">
        <Card.Body>
          <Text h1 css={{ textAlign: 'center', marginBottom: '20px' }}>Project Documentation</Text>
          <Spacer y={1} />
          <Text css={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Welcome to our project's documentation. Here, you'll find all the information you need to understand our process in implementing our data analysis project. From our data collection, to cleaning our data, exploring it and visualising, we've created this cohesive documentation site to help you understand our process and our team.
          </Text>
        </Card.Body>
      </Card>

      {/* Content Section */}
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <Card className="documentation-card" variant="bordered" css={{ mw: "100%" }}>
<Card.Header>
              <Text h2>Run Instructions</Text></Card.Header>
              <Spacer y={1} />
      <Card.Body>
          <Text b>Install</Text>
        <Text className="code-block">
          1. Run <code>pip install -r requirements.txt</code> to install all required libraries.
        </Text>
        <Text className="code-block">
          2. Download the raw datasets with the Jupyter notebook in <code>/notebooks/initialise.ipynb</code>.
        </Text>
        <Spacer y={1} />
        <Text>
          <Text b>Usage</Text>
        </Text>
        <Text className="code-block">
          Run <code>py main.py</code> in the root folder.
        </Text>
      </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={6}>
          <Card className="team-card" variant="bordered" css={{ mw: "100%" }}>
            <Card.Body>
              <Text h2>Our Team</Text>
              <Spacer y={1} />
              <Text>Meet the contributors:</Text>
              <div className="contributor-list">
                <a href="#" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={axe} alt="Contributor Icon" width={40} height={40} />
                    <Text>Dea Satko</Text>
                  </div>
                </a>
                <a href="#" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={crystalball} alt="Contributor Icon" width={40} height={40} />
                    <Text>Elisabeth Garzon</Text>
                  </div>
                </a>
                <a href="#" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={gate} alt="Contributor Icon" width={40} height={40} />
                    <Text>Hayley Ryan</Text>
                  </div>
                </a>
                <a href="#" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={meteor} alt="Contributor Icon" width={40} height={40} />
                    <Text>Simone Tagoe</Text>
                  </div>
                </a>
                <a href="#" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={money} alt="Contributor Icon" width={40} height={40} />
                    <Text>Verena Zyla</Text>
                  </div>
                </a>
              </div>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>

      {/* Sources Section */}
      <Card className="sources-card" variant="bordered" css={{ mw: "100%", marginTop: '20px' }}>
        <Card.Body>
          <Text h2>Sources</Text>
          <Spacer y={1} />
          <div className="sources-content">
            {/* Research Papers/Websites */}
            <div className="source-category">
              <Text h3>Research Papers/Websites:</Text>
              <ul>
                <li><a href="https://criticalgamers.com" target="_blank" rel="noopener noreferrer">Critical Gamers</a></li>
                <li>
                  <a href="https://catalog.example.com/influence-of-active-video-game-play" target="_blank" rel="noopener noreferrer">
                    Data from: The influence of active video game play upon physical activity and screen-based activities in sedentary children
                  </a>
                </li>
                <li>
                  <a href="https://thedataschooldownunder.com/dashboard-week01" target="_blank" rel="noopener noreferrer">
                    Dashboard Week #01: IGDB and Gender Representation in Games
                  </a>
                </li>
                <li>
                  <a href="https://www.psychologytoday.com/intl/blog/media-spotlight/202101/how-gamers-use-video-games-explore-their-gender-identity" target="_blank" rel="noopener noreferrer">
                    How Gamers Use Video Games to Explore Their Gender Identity | Psychology Today United Kingdom
                  </a>
                </li>
                <li>
                  <a href="https://www.intomore.com/gaming/video-game-character-creators-improving-nonbinary-players" target="_blank" rel="noopener noreferrer">
                    Video Game Character Creators are Improving for Nonbinary Players - INTO
                  </a>
                </li>
                <li>
                  <a href="https://example.com/evolution-of-female-character-representations.pdf" target="_blank" rel="noopener noreferrer">
                    The Evolution of Female Character Representations in Video Games from a Feminism Perspective (PDF)
                  </a>
                </li>
                <li>
                  <a href="https://news.gla.ac.uk/archive/2023/may/largest-study-of-video-games-reveals-men-say-twice-as-much-as-women" target="_blank" rel="noopener noreferrer">
                    University of Glasgow - Largest study of video games reveals men say twice as much as women
                  </a>
                </li>
              </ul>
            </div>

            {/* Dataset */}
            <div className="source-category">
              <Text h3>Dataset:</Text>
              <ul>
                <li>
                  <a href="https://example.com/gender-representation-dataset" target="_blank" rel="noopener noreferrer">
                    Gender Representation in Video Games
                  </a>
                </li>
              </ul>
            </div>

            {/* Video/Media */}
            <div className="source-category">
              <Text h3>Video/Media:</Text>
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=X6p5AZp7r_Q" target="_blank" rel="noopener noreferrer">
                    [YouTube] Video Analysis 1
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=SReNR_PdPXo" target="_blank" rel="noopener noreferrer">
                    [YouTube] Video Analysis 2
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=f119r3VHBqw" target="_blank" rel="noopener noreferrer">
                    [YouTube] Video Analysis 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
