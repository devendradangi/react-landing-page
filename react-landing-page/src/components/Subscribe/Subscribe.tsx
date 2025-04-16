import { useRef, useState } from "react";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";
import "./Subscribe.scss";

const Subscribe = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const formik = useFormik({

        initialValues: { email: "" },

        // Here Validating Email
        validate: (values) => {
            const errors: any = {};
            if (!values.email) {
                errors.email = '* Please enter email';
            } else if (
                !/^[a-zA-Z0-9]+(\.[a-zA-Z0-9+]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = '* Please enter valid email address';
            }

            return errors;
        },

        // Form Submission
        onSubmit: (values, { resetForm }) => {
            setIsSubmitted(true);
            if (formRef.current) {
                emailjs.send(
                    "service_lkllb09", // SERVICE ID
                    "template_w8eqeys", // TEMPLATE ID
                    { email: values.email },
                    "mGK5MRjpNMrJy8jTM" // PUBLIC KEY
                ).then(() => {
                    setTimeout(() => {
                        setIsSubmitted(false);
                        resetForm();
                    }, 3000);
                }, (error) => {
                    console.error("FAILED...", error);
                })
            }
        },
    });

    return (
        <div className="subscribe-section">
            <Container>
                <Card className="subscribe-card position-relative">
                    <div className="send-icon">
                        {<>{FaPaperPlane({})}</>}
                    </div>
                    <Card.Body>
                        {!isSubmitted ? (
                            <>
                                <h1 className="subscribe-text">
                                    Subscribe to get information, latest news and other interesting offers about Cobham
                                </h1>
                                <Form ref={formRef} className="subscribe-form" onSubmit={formik.handleSubmit}>
                                    <Row className="align-items-center justify-content-center gx-3">
                                        <Col xs={12} md={6}>
                                            <div className="input-wrapper">
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Your email"
                                                    className={`subscribe-input ${formik.errors.email && formik.submitCount > 0 ? "is-invalid" : ""}`}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                />
                                                {formik.errors.email && formik.submitCount > 0 && (
                                                    <div className="error-message">
                                                        {formik.errors.email}
                                                    </div>
                                                )}
                                            </div>
                                        </Col>
                                        <Col xs="auto">
                                            <Button type="submit" className="subscribe-btn">
                                                Subscribe
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </>
                        ) : (
                            <><h2 className="text-success text-center m-0">You're subscribed successfully!</h2><>
                                <div className="d-flex justify-content-center align-items-center m-2">
                                    {FaCheckCircle({ color: "green", size: 100 })}
                                </div>
                            </></>
                        )}
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default Subscribe;
