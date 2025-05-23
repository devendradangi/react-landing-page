import { useFormik } from "formik";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { initialSignUpState, signUpValidationSchema } from "./SignupUtility";
import { useNavigate } from "react-router-dom";
import "./Signup.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../../services/user-services";
import { showErrorToast, showSuccessToast } from "../../../utils/toast-utils";
import { AuthType, GOOGLE_AUTH_TYPE } from "../../../utils/utils";
import CommonLoader from "../../common/CommonLoader/CommonLoader";
import GoogleAuthButton from "../../common/GoogleAuthButton/GoogleAuthButton";


export const SignUp = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialSignUpState,
        validationSchema: signUpValidationSchema,
        onSubmit: async (values) => {
            if (formik.isValid) {
                setLoading(true);
                try {
                    await registerUser({
                        ...values,
                    });
                    showSuccessToast("Account created successfully");
                    setTimeout(() => {
                        navigate("/login");
                    }, 1500);
                } catch (err: any) {
                    console.error("Signup Error:", err.message);
                    showErrorToast(err.message);
                } finally {
                    setLoading(false);
                }
            }
        },
    });

    const handleGoogleSignup = async (userData: any) => {
        console.log(userData)
        setLoading(true);
        const signupPayload = {
            firstName: userData?.given_name,
            lastName: userData?.family_name,
            email: userData?.email,
            password: userData?.sub,
            authType: AuthType.GOOGLE_SSO
        };
        try {
            await registerUser(signupPayload);
            setLoading(false);
            showSuccessToast("Google account linked successfully");
            setTimeout(() => {
                navigate("/login");
            }, 1500);
        } catch (err: any) {
            setLoading(false);
            console.error("Google Signup Error:", err.message);
            showErrorToast(err.message);
        }
    };

    const handleGoogleError = (error: any) => {
        console.error("Google Signup Error:", error);
        setLoading(false);
    };

    return (
        <>
            {loading && <CommonLoader loadingState={loading} message="Creating your account..." />}
            <div className="signup-wrapper d-flex justify-content-center align-items-center vh-100">
                <Container>
                    <Card className="p-4 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
                        <h2 className="text-center mb-4 bold-text">Sign Up</h2>
                        <Form onSubmit={formik.handleSubmit}>
                            <Row className="mb-3">
                                <Col>
                                    <Form.Group>
                                        <Form.Label>First Name <em>*</em></Form.Label>
                                        <Form.Control
                                            name="firstName"
                                            placeholder="First name"
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.firstName && formik.touched.firstName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.firstName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group>
                                        <Form.Label>Last Name <em>*</em></Form.Label>
                                        <Form.Control
                                            name="lastName"
                                            placeholder="Last name"
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            isInvalid={!!formik.errors.lastName && formik.touched.lastName}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            {formik.errors.lastName}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Email <em>*</em></Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.email && formik.touched.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label>Password <em>*</em></Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    isInvalid={!!formik.errors.password && formik.touched.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formik.errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button type="submit" className="w-100 mb-2 btn-btn-accent">
                                Sign Up
                            </Button>
                            <hr />

                            <GoogleAuthButton
                                type={GOOGLE_AUTH_TYPE.SIGNUP}
                                onGoogleSuccess={handleGoogleSignup}
                                onGoogleError={handleGoogleError} />

                            <div className="text-center mt-3">
                                Already have an account?{" "}
                                <Link to="/login" className="text-primary fw-bold text-decoration-none">
                                    Log In
                                </Link>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div >
        </>
    );
};

export default SignUp;
