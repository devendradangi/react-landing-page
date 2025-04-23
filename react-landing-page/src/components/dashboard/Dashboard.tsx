import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const DashboardPage = () => {
    const metrics = [
        { title: 'Active Users', value: 1280, bg: 'primary' },
        { title: 'New Signups', value: 245, bg: 'success' },
        { title: 'Revenue (Today)', value: '$1,460', bg: 'warning' },
        { title: 'Pending Tasks', value: 32, bg: 'danger' }
    ];

    const recentActivities = [
        { activity: 'User John Doe signed up', timestamp: '2 minutes ago' },
        { activity: 'User Jane Smith completed KYC', timestamp: '1 hour ago' },
        { activity: 'New feature deployed: Dashboard Update', timestamp: '4 hours ago' },
        { activity: 'User Michael Lee logged in', timestamp: '12 hours ago' },
        { activity: 'System backup completed', timestamp: '1 day ago' }
    ];

    const performanceData = {
        lastWeek: { users: 1200, revenue: '$1,300' },
        thisWeek: { users: 1280, revenue: '$1,460' }
    };

    return (
        <div className="content p-3">
            <header className="page-header mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="page-title mb-0 bold-text">Dashboard</h1>
                </div>
            </header>

            <Container fluid>
                <Row className="gy-4 mb-4">
                    {metrics.map((item, idx) => (
                        <Col key={idx} sm={6} md={6} xl>
                            <Card bg={item.bg} text="white" className="h-100">
                                <Card.Body>
                                    <h3 className="fw-bold">{item.value}</h3>
                                    <p className="mb-0">{item.title}</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row className="gy-4">
                    <Col lg={6}>
                        <Card className="h-100">
                            <Card.Header>
                                <h5 className="mb-0 fw-semibold">Recent Activity</h5>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    {recentActivities.map((activity, idx) => (
                                        <ListGroup.Item key={idx} className="d-flex justify-content-between">
                                            <span>{activity.activity}</span>
                                            <small className="text-muted">{activity.timestamp}</small>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="h-100">
                            <Card.Header>
                                <h5 className="mb-0 fw-semibold">Performance Overview</h5>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <h6 className="text-muted">Last Week</h6>
                                    <p className="mb-0">Users: {performanceData.lastWeek.users}</p>
                                    <p className="mb-0">Revenue: {performanceData.lastWeek.revenue}</p>
                                </div>
                                <div className="mt-4">
                                    <h6 className="text-muted">This Week</h6>
                                    <p className="mb-0">Users: {performanceData.thisWeek.users}</p>
                                    <p className="mb-0">Revenue: {performanceData.thisWeek.revenue}</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardPage;
