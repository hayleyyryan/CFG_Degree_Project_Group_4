import React from 'react';
import { Card, Text, Link } from '@nextui-org/react';
import './SourceCards.css';

const images = {
  doc: 'https://clear.bank/uploads/images/SEO-images/_1200x630_crop_center-center_82_none/CFG_ITW_SEO.jpg?mtime=1709833805',
  figma: 'https://cdn.sanity.io/images/599r6htc/regionalized/266ec07c0cfe14229530256bb9700e0bce7ff8d4-2400x1260.png?w=1200&q=70&fit=max&auto=format',
  data: 'https://cdn.prod.website-files.com/666bbba4ff7240a20f4cccf8/666bbba4ff7240a20f4ce4da_Data%20Exploration%20(1).png',
  trello: 'https://graphpaperpress.com/wp-content/uploads/2015/01/Trello-Logo-1.png',
  presentation: 'https://ahaslides.com/wp-content/uploads/2020/10/Blog-InteractiveGoogleSlides_Mobile.png'
};

const SourceCards = () => {
  return (
    <div className="source-cards-container">
      <Card className="source-card" hoverable clickable>
        <Card.Body>
          <img src={images.doc} alt="Project Assignment Doc" className="card-image" />
          <Text h5>Project Assignment</Text>
          <Text size={14}>Our project assignment document.</Text>
        </Card.Body>
        <Card.Footer>
          <Link href="https://docs.google.com/document/d/1m3mGb3leWoQuAuEdwxRq_UVilsk-dBr9mKF6RpxSF6A">View Document</Link>
        </Card.Footer>
      </Card>

      <Card className="source-card" hoverable clickable>
        <Card.Body>
          <img src={images.figma} alt="Figma Board" className="card-image" />
          <Text h5>Figma Board</Text>
          <Text size={14}>Our Figma design board.</Text>
        </Card.Body>
        <Card.Footer>
          <Link href="https://www.figma.com/board/Q4MbTn6HMtA6WEnZQiyURc/Data-Science-Group-Project?node-id=0-1&t=vto4fH5QFy7RWbI5-0">View Board</Link>
        </Card.Footer>
      </Card>

      <Card className="source-card" hoverable clickable>
        <Card.Body>
          <img src={images.data} alt="Data Exploration" className="card-image" />
          <Text h5>Data Exploration</Text>
          <Text size={14}>Our data exploration document.</Text>
        </Card.Body>
        <Card.Footer>
          <Link href="https://docs.google.com/document/d/19mBHm7LXrJGjJXgH7GoCGGlncxuUD_N3KA4OeaokloM">View Document</Link>
        </Card.Footer>
      </Card>

      <Card className="source-card" hoverable clickable>
        <Card.Body>
          <img src={images.trello} alt="Trello Board" className="card-image" />
          <Text h5>Trello Board</Text>
          <Text size={14}>Our project management board.</Text>
        </Card.Body>
        <Card.Footer>
          <Link href="https://trello.com/b/tcSzVAfE/data-science-group-project" target="_blank">View Board</Link>
        </Card.Footer>
      </Card>

      <Card className="source-card" hoverable clickable>
        <Card.Body>
          <img src={images.presentation} alt="Google Presentation" className="card-image" />
          <Text h5>Project Presentation</Text>
          <Text size={14}>Our data analysis presentation.</Text>
        </Card.Body>
        <Card.Footer>
          <Link href="https://docs.google.com/presentation/d/19QCMBuJqgwTHNXKm1YYXYlIl8coi1IVbLx8YZBPA7iM/edit#slide=id.g25f6af9dd6_0_0" target="_blank">View Presentation</Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SourceCards;
