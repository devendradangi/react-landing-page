import { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import "../../../pages/Dashboard/DashboardPage.scss";
import { showErrorToast, showSuccessToast } from '../../../utils/toast-utils';
import { useNavigate, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    const toastShown = useRef(false);
    const logoutInProgress = useRef(false);

    useEffect(() => {
        if (!user && !toastShown.current && !logoutInProgress.current) {
            toastShown.current = true;
            showErrorToast("You're not authenticated to access this page.");
            setTimeout(() => {
                navigate('/login', { replace: true });
            }, 100);
        }
    }, [user, navigate]);

    const handleLogout = () => {
        logoutInProgress.current = true;
        localStorage.removeItem('loggedInUser');
        showSuccessToast("You have successfully logged out");
        setTimeout(() => {
            navigate('/login', { replace: true });
        }, 300);
    };

    if (!user) return null;

    return (
        <Container fluid className="dashboard-container">
            <Row>
                <Col xs={12} md={3} lg={2} className="sidebar-wrapper">
                    <Sidebar onLogout={handleLogout} />
                </Col>
                <Col xs={12} md={9} lg={10} className="main-content">
                    <DashboardHeader
                        name={`${user.firstName} ${user.lastName}`}
                        email={user.email}
                        avatarUrl={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}`}
                    />
                    <div className="dashboard-content p-4">
                        <Outlet />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardLayout;
