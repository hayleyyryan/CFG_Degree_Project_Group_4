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
    <Container className="home-container">
      {/* Hero Section */}
      <Card className="hero-card" variant="bordered" css={{ mw: "100%" }}>
        <Card.Body>
          <Text h1 css={{ textAlign: 'center', marginBottom: '20px' }}>Project Documentation</Text>
          <Spacer y={1} />
          <Text css={{ textAlign: 'center', fontSize: '1.2rem' }}>
            Welcome to our project's documentation. Here, you'll find all the information you need to understand, use, and contribute to the project.
          </Text>
        </Card.Body>
      </Card>

      {/* Content Section */}
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={6}>
          <Card className="documentation-card" variant="bordered" css={{ mw: "100%" }}>
            <Card.Body>
              <Text h2>Documentation</Text>
              <Spacer y={1} />
              <Text>
                Detailed project documentation goes here, including setup instructions, user guides, and technical details.
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
                <div className="contributor">
                  <Image src={axe} alt="Contributor Icon" width={40} height={40} />
                  <Text>Dea Satko</Text>
                </div>
                <div className="contributor">
                  <Image src={crystalball} alt="Contributor Icon" width={40} height={40} />
                  <Text>Elisabeth Garzon</Text>
                </div>
                <div className="contributor">
                  <Image src={gate} alt="Contributor Icon" width={40} height={40} />
                  <Text>Hayley Ryan</Text>
                </div>
                <div className="contributor">
                  <Image src={meteor} alt="Contributor Icon" width={40} height={40} />
                  <Text>Simone Tagoe</Text>
                </div>
                <div className="contributor">
                  <Image src={money} alt="Contributor Icon" width={40} height={40} />
                  <Text>Verena Zyla</Text>
                </div>
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
          <Text>
            All the references and resources used in the project are listed here.
          </Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Home;
