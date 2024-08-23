import React from 'react';
import { Container, Card, Text, Spacer } from '@nextui-org/react';
import './ProjectOverview.css';

const ProjectOverview = () => {
  return (
    <Container className="project-overview" css={{ maxWidth: '800px' }}>
      <Text h1 className="overview-title">Project Overview</Text>
      
      <Card className="overview-section">
        <Card.Body>
          <Text>
            The video gaming industry is a titan of the entertainment and media landscape. With millions taking to their phones, PCs, consoles, and arcades—venturing alone or with others to merely evade boredom or make memories. This multibillion-dollar industry, whilst enduring the current global economic challenges, still proves itself to be popular amongst people of all walks of life.
          </Text>
        </Card.Body>
      </Card>

      <Spacer y={2} />

      <Card className="overview-section">
        <Card.Body>
          <Text>
            Yet, as the popularity of gaming continues, there still remains a tentativeness amongst a number of self-professed gamers to identify as such publicly. The persistence of gender stereotypes and non-binary exclusion haunts the image of the lone, male gamer and continues to affect conversations about who popular video games aim to appeal to. This includes considerations of how game developers enable exclusionary and archaic gender stereotypes to persist when designing games and the impact this has on those playing.
          </Text>
        </Card.Body>
      </Card>

      <Spacer y={2} />

      <Card className="overview-section">
        <Card.Body>
          <Text>
            The wider significance of this research project is discovering how game developers view, perpetuate, or challenge long-held ideas about gender and how gender functions in fictional landscapes. This project seeks to take an expansive view on gender. Although our societies (West/Europe) largely rely on binary conceptions of gender, we hope our project can inspire thought beyond the binary. Considering gaming allows players to enjoy expansive, generally fictional landscapes, characters' identities would benefit largely from this creativity.
          </Text>
        </Card.Body>
      </Card>

      <Spacer y={2} />

      <Card className="overview-section">
        <Card.Body>
          <Text>
            Our project seeks to demonstrate how gender representation has changed over time. Through exploring character data for popular video games, we aim to identify trends in character gender representation and sexualization. We are also interested in delving into the data to find out if female and non-binary characters (also referred to as non-male) experience underrepresentation.
          </Text>
        </Card.Body>
      </Card>

      <Spacer y={2} />

      <Card className="overview-section">
        <Card.Body>
          <Text>
            Our project hopes to be of interest to those within gaming development and/or social research fields. Researchers studying gender representation in pop culture, or specifically video games. Equally, the findings may inform video game developers and teams who are looking to increase diversity on their platforms, to make informed decisions. We will highlight the insights gathered representing various aspects in an accessible way to accommodate technical and non-technical audiences.
          </Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProjectOverview;
