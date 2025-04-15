import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DestinationCard from './DestinationCard';

const destinations = [
    {
        title: 'Rome, Italy',
        price: '$5.42k',
        days: '10 Days Trip',
        image:
            'https://i.natgeofe.com/n/3012ffcc-7361-45f6-98b3-a36d4153f660/colosseum-daylight-rome-italy.jpg',
    },
    {
        title: 'London, UK',
        price: '$4.2k',
        days: '12 Days Trip',
        image:
            'https://www.thetrainline.com/cms/media/1376/uk-london-tower-bridge-river-thames.jpg?mode=crop&width=1080&height=1080&quality=70',
    },
    {
        title: 'Full Europe',
        price: '$15k',
        days: '28 Days Trip',
        image:
            'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/d6/c6/f8/caption.jpg?w=1400&h=1400&s=1&cx=989&cy=446&chk=v1_05762c604da56e26277e',
    },
];

const DestinationSection: React.FC = () => {
    return (
        <Container className="my-5">
            <p className="text-muted text-center">Top Selling</p>
            <h2 className="fw-bold text-center mb-5">Top Destinations</h2>

            <Row className="g-4 justify-content-center">
                {destinations.map((dest, index) => (
                    <Col md={3} key={index}>
                        <DestinationCard {...dest} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DestinationSection;
