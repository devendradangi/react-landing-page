import React from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        <Link to="/signup">
                            <Button className="ms-2 btn-btn-accent">
                                Sign Up
                            </Button>
                        </Link>

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
