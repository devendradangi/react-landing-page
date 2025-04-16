import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.scss";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer-main">
                    <Col md={4} sm={12} className="footer-brand">
                        <h2>Jadoo.</h2>
                        <p>Book your trip in minute, get full control for much longer.</p>
                    </Col>

                    <Col md={4} sm={12} className="footer-links">
                        <Row>
                            <Col>
                                <h4>Company</h4>
                                <ul>
                                    <li>About</li>
                                    <li>Careers</li>
                                    <li>Mobile</li>
                                </ul>
                            </Col>
                            <Col>
                                <h4>Contact</h4>
                                <ul>
                                    <li>Help/FAQ</li>
                                    <li>Press</li>
                                    <li>Affiliates</li>
                                </ul>
                            </Col>
                            <Col>
                                <h4>More</h4>
                                <ul>
                                    <li>Airlinefees</li>
                                    <li>Airline</li>
                                    <li>Low fare tips</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4} sm={12} className="footer-social">
                        <div className="icons d-flex justify-content-center mb-3">
                            <span className="icon me-2"><>{FaFacebook({})}</></span>
                            <span className="icon insta me-2"><>{FaInstagram({})}</></span>
                            <span className="icon"><>{FaTwitter({})}</></span>
                        </div>
                        <p className="text-center">Discover our app</p>
                        <div className="store-buttons d-flex justify-content-center gap-2">
                            <a href="#">
                                <img src="google-pay.png" alt="Google Play" height="40" />
                            </a>
                            <a href="#">
                                <img src="app-store.png" alt="Apple Store" height="40" />
                            </a>
                        </div>
                    </Col>
                </Row>

                <Row className="footer-bottom">
                    <Col className="text-center mt-4">
                        <p>All rights reserved @jadoo.co</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
