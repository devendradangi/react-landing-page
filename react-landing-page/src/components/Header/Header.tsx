import React from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#" className="fw-bold fs-3 d-flex align-items-center">
                    Jadoo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-center align-items-center gap-5">
                        <Nav.Link href="#destination">Destinations</Nav.Link>
                        <Nav.Link href="#hotels">Hotels</Nav.Link>
                        <Nav.Link href="#flights">Flights</Nav.Link>
                        <Nav.Link href="#booking">Booking</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>

                        <Button variant="outline-primary" className="ms-2">
                            Sign Up
                        </Button>
                        <Dropdown className="ms-3">
                            <Dropdown.Toggle variant="secondary" id="dropdown-language">
                                Language
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/en">English</Dropdown.Item>
                                <Dropdown.Item href="#/fr">French</Dropdown.Item>
                                <Dropdown.Item href="#/de">German</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
