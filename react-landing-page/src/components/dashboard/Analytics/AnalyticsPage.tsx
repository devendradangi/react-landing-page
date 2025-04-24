import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsPage = () => {
    const barOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: false
            }
        }
    };

    const pendingRequestData = {
        labels: ['Pending Requests', 'Document Verifications'],
        datasets: [
            {
                label: 'Count',
                data: [40, 60],
                backgroundColor: ['#ff6384', '#36a2eb']
            }
        ]
    };

    const verificationData = {
        labels: ['Verifications', 'KYC Updates'],
        datasets: [
            {
                label: 'Count',
                data: [300, 150],
                backgroundColor: ['#4bc0c0', '#ffcd56']
            }
        ]
    };

    const summaryCards = [
        { label: 'Document Pending', count: 20 },
        { label: 'KYC Verified', count: 360 },
        { label: 'KYC Rejected', count: 24 },
        { label: 'Document Verification Pending', count: 20 },
        { label: 'KYC Verification Pending', count: 20 }
    ];

    return (
        <div className="content p-3">
            <header className="page-header mb-4">
                <div className="d-flex align-items-center justify-content-between">
                    <h1 className="page-title mb-0 bold-text">Analytics</h1>
                </div>
            </header>

            <Container fluid>
                <Row className="gy-4">
                    {summaryCards.map((item, idx) => (
                        <Col key={idx} sm={6} md={6} xl>
                            <Card className="h-100">
                                <Card.Body>
                                    <h2 className="fw-semibold mb-0">{item.count}</h2>
                                    <div className="text-muted mt-2">{item.label}</div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Row className="gy-4 mt-4">
                    <Col lg={6}>
                        <Card className="h-100">
                            <Card.Header className="d-flex justify-content-between align-items-center pt-3 pb-2">
                                <h5 className="mb-0 fw-semibold">
                                    Pending Requests vs Document Verifications
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Bar data={pendingRequestData} options={barOptions} />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card className="h-100">
                            <Card.Header className="d-flex justify-content-between align-items-center pt-3 pb-2">
                                <h5 className="mb-0 fw-semibold">
                                    Verifications vs KYC Updates
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Bar data={verificationData} options={barOptions} />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AnalyticsPage;
