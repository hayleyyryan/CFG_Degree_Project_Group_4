import React from 'react';
import { Card, Image, Spacer, Text, Container, Grid } from '@nextui-org/react';
import axe from './axe.png';
import crystalball from './crystal-ball.png';
import gate from './gate.png';
import meteor from './meteor.png';
import money from './money.png';
import './Home.css';
import SourceCards from './SourceCards';

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
                <a href="https://github.com/deasatko" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={axe} alt="Contributor Icon" width={40} height={40} />
                    <Text>Dea Satko</Text>
                  </div>
                </a>
                <a href="https://github.com/ElisabethGCy" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={crystalball} alt="Contributor Icon" width={40} height={40} />
                    <Text>Elisabeth Garzon</Text>
                  </div>
                </a>
                <a href="https://github.com/hayleyyryan/" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={gate} alt="Contributor Icon" width={40} height={40} />
                    <Text>Hayley Ryan</Text>
                  </div>
                </a>
                <a href="https://github.com/tagsim" className="contributor-wrapper">
                  <div className="contributor">
                    <Image src={meteor} alt="Contributor Icon" width={40} height={40} />
                    <Text>Simone Tagoe</Text>
                  </div>
                </a>
                <a href="https://github.com/ZylaCode" className="contributor-wrapper">
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
          <SourceCards />
          <Spacer y={1} />
          <div className="sources-content">
                        {/* Dataset */}
            <div className="source-category">
              <Text h3>Dataset:</Text>
              <ul>
                <li>
                  <a href="https://www.kaggle.com/datasets/br33sa/gender-representation-in-video-games" target="_blank" rel="noopener noreferrer">
                    Gender Representation in Video Games
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Research Papers/Websites */}
            <div className="source-category">
              <Text h3>Research Papers/Websites:</Text>
              <ul>
                <li><a href="https://criticalgamers.humspace.ucla.edu/">Gender representation in Video Games - Critical Gamers</a></li>
                <li>
                  <a href="https://catalog.data.gov/dataset/data-from-the-influence-of-active-video-game-play-upon-physical-activity-and-screen-based--33694">
                   The influence of active video game play upon physical activity and screen-based activities in sedentary children - USDA
                  </a>
                </li>
                <li>
                  <a href="https://www.thedataschool.com.au/j-tay/dashboard-week-01/">
                    IGDB and Gender Representation in Games - J Tay (The Data School)
                  </a>
                </li>
                <li>
                  <a href="https://www.psychologytoday.com/gb/blog/video-game-health/202302/how-gamers-use-video-games-to-explore-their-gender-identity">
                    How Gamers Use Video Games to Explore Their Gender Identity - Andrew Fishman (Psychology Today)
                  </a>
                </li>
                <li>
                  <a href="https://www.intomore.com/culture/video-game-character-creators-are-improving-for-nonbinary-players/" target="_blank" rel="noopener noreferrer">
                    Video Game Character Creators are Improving for Nonbinary Players - Latonya Pennington (Into)
                  </a>
                </li>
                <li>
                  <a href="https://www.researchgate.net/publication/376307523_The_Evolution_of_Female_Character_Representations_in_Video_Games_from_a_Feminism_Perspective">
                    The Evolution of Female Character Representations in Video Games from a Feminism Perspective - Lan Lao (The Wee Kim Wee School of Communication)
                  </a>
                </li>
                <li>
                  <a href="https://www.gla.ac.uk/news/archiveofnews/2023/may/headline_966589_en.html" target="_blank" rel="noopener noreferrer">
                    Largest study of video games reveals men say twice as much as women - University of Glasgow
                  </a>
                </li>
              </ul>
            </div>

            {/* Video/Media */}
            <div className="source-category">
              <Text h3>Video/Media:</Text>
              <ul>
                <li>
                  <a href="https://www.youtube.com/watch?v=X6p5AZp7r_Q">
                  Damsel in Distress: Part 1 - Tropes vs Women in Video Games
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=SReNR_PdPXo" target="_blank" rel="noopener noreferrer">
                    Are there Non-Binary Characters in Video Games? Yes!
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/watch?v=f119r3VHBqw" target="_blank" rel="noopener noreferrer">
                    Why Don't Video Games Let You Be Trans?
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
