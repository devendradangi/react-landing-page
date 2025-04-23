import React from 'react';
import { Image } from 'react-bootstrap';
import "../../pages/Dashboard/DashboardPage.scss"

interface Props {
    name: string;
    email: string;
    avatarUrl: string;
}

const DashboardHeader: React.FC<Props> = ({ name, email, avatarUrl }) => {
    return (
        <div className="d-flex justify-content-end align-items-center p-3 border-bottom bg-white mb-2 mt-2" style={{ borderRadius: '10px' }}>
            <div className="text-end me-3">
                <div className="fw-bold bold-text" style={{ fontSize: "20px" }}>{name}</div>
                <div className="text-muted small">{email}</div>
            </div>
            <Image src={avatarUrl} roundedCircle width={40} height={40} />
        </div>
    );
};

export default DashboardHeader;
