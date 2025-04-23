import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "../../pages/Dashboard/DashboardPage.scss";
import { TbBrandProducthunt, TbChartBar, TbDashboard, TbHome, TbLogout2, TbShoppingCartX } from "react-icons/tb";


const Sidebar: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
    return (
        <div className="sidebar d-flex flex-column h-100 justify-content-between p-3">
            <div>
                <h4 className="sidebar-header-text mb-4">Jadoo</h4>

                <Nav className="flex-column">
                    <Nav.Link
                        as={NavLink}
                        to="/dashboard"
                        className="sidebar-text d-flex align-items-center gap-2 ">
                        <>{TbDashboard({ size: "20px" })}</>
                        Dashboard
                    </Nav.Link>

                    <Nav.Link
                        as={NavLink}
                        to="/dashboard/home"
                        className="sidebar-text d-flex align-items-center gap-2 ">
                        <>{TbHome({ size: "20px" })}</>
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/dashboard/analytics"
                        className="sidebar-text d-flex align-items-center gap-2">
                        <>{TbChartBar({ size: "20px" })}</>
                        Analytics
                    </Nav.Link>
                    <Nav.Link
                        as={NavLink}
                        to="/dashboard/recipes"
                        className="sidebar-text d-flex align-items-center gap-2">
                        <>{TbShoppingCartX({ size: "20px" })}</>
                        Recipes
                    </Nav.Link>
                </Nav>
            </div>
            <Nav className="mt-auto">
                <Nav.Link
                    as={NavLink}
                    to="#"
                    onClick={onLogout}
                    className="sidebar-text d-flex align-items-center gap-2">
                    <>{TbLogout2({ size: "20px" })}</>
                    Logout
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;

