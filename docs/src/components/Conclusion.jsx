// ConclusionPage.js
import React from 'react';
import { Container, Card, Text, Button } from '@nextui-org/react';
import './Conclusion.css'; // Import custom styles

const Conclusion = () => {
  return (
    <Container className="conclusion-container">
      <Card className="conclusion-card">
        <Card.Header>
          <Text h1 className="conclusion-heading">
            Conclusion
          </Text>
        </Card.Header>
        <Card.Body>
          <Text className="conclusion-text">
            Our research aims to ignite conversation within game development teams. We are driven by the desire to see games that more accurately reflect the diversity of lived experiences. This research underscores the need for developers to build upon these nuanced realities and to think creatively about gender dynamics in gaming.
          </Text>
          <Text className="conclusion-text">
            Over the past decade (2012-2022), there has been a notable increase in the recognition of non-binary genders, driven by movements such as #MeToo which advocate for gender equality and women's safety. The momentum towards more inclusive and broadened understandings of gender shows no signs of reversing.
          </Text>
          <Text className="conclusion-text">
            From a financial perspective, the games analyzed in our study are both highly rated and popular. It is crucial for game developers to create content that resonates with a broad audience. As the gaming community continues to evolve, so too should the stories and characters it features. Developers who ignore this shift risk losing engagement from a diverse and growing audience.
          </Text>
          <Text className="conclusion-text">
            We commend developers like Moon Studios for their progressive approach to character representation. However, it is essential that more developers follow suit. The media we consume influences our lives and vice versa, creating a continuous cycle. Those with the ability to effect change must embrace the challenge. Gamers—and society at large—deserve more, and it is up to the industry to rise to this occasion.
          </Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Conclusion;
