import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const HomePage = () => {
    return (
        <div className="content p-3">
            <header className="page-header mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="page-title mb-0 bold-text">Welcome to the Dashboard</h1>
                </div>
            </header>

            <Container fluid>
                <Row className="gy-4">
                    <Col sm={6} md={6} xl={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">Overview</h5>
                                <p>
                                    This is your home page, where you can view your statistics, recent activities, and performance metrics.
                                </p>
                                <Button variant="primary">Explore Dashboard</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={6} xl={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">Quick Stats</h5>
                                <ul>
                                    <li><strong>Active Users:</strong> 1,280</li>
                                    <li><strong>New Signups:</strong> 245</li>
                                    <li><strong>Pending Tasks:</strong> 32</li>
                                    <li><strong>Revenue (Today):</strong> $1,460</li>
                                </ul>
                                <Button variant="secondary">View More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} xl={4}>
                        <Card className="h-100">
                            <Card.Body>
                                <h5 className="fw-semibold mb-3">Latest News & Updates</h5>
                                <ul>
                                    <li>New feature: Dashboard update available.</li>
                                    <li>Server maintenance scheduled for next week.</li>
                                    <li>Upcoming webinar: 'How to optimize your workflows'.</li>
                                </ul>
                                <Button variant="info">Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row className="gy-4 mt-4">
                    {/* Upcoming Events */}
                    <Col sm={12} md={6} xl={6}>
                        <Card className="h-100">
                            <Card.Header>
                                <h5 className="fw-semibold mb-0">Upcoming Events</h5>
                            </Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>Webinar: 'Optimizing your workflow' - May 5th</li>
                                    <li>System Maintenance - May 8th</li>
                                    <li>Product Launch - May 15th</li>
                                </ul>
                                <Button variant="warning">View All Events</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Recent Activity */}
                    <Col sm={12} md={6} xl={6}>
                        <Card className="h-100">
                            <Card.Header>
                                <h5 className="fw-semibold mb-0">Recent Activity</h5>
                            </Card.Header>
                            <Card.Body>
                                <ul>
                                    <li>User John Doe signed up</li>
                                    <li>New feature deployed: User authentication update</li>
                                    <li>System update completed successfully</li>
                                </ul>
                                <Button variant="success">View More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;
