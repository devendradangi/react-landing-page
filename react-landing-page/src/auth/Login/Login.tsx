import { useFormik } from "formik";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { initialLoginState, loginValidationSchema } from "./LoginUtility";
import './Login.scss';
import { Link, useNavigate } from "react-router-dom";
import { AuthType, GOOGLE_AUTH_TYPE } from "../../common";
import { useState } from "react";
import CommonLoader from "../../Common/CommonLoader/CommonLoader";
import GoogleAuthButton from "../../Common/GoogleAuthButton/GoogleAuthButton";

export const Login = () => {

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: initialLoginState,
        validationSchema: loginValidationSchema,

        onSubmit: (values) => {
            if (formik.isValid) {
                setLoading(true);
                setTimeout(() => {
                    console.log("Login Form Submitted", values);
                    setLoading(false);
                    navigate("/home");
                }, 3000);
            } else {
                setLoading(false);
                console.log("Form is not Valid", values);
            }
        },
    });

    const handleGoogleLogin = (userData: any) => {

        setLoading(true);
        const loginPayload = {
            email: userData?.email,
            password: userData?.sub,
            authType: AuthType.GOOGLE_SSO
        };

        setTimeout(() => {
            console.log("Login Payload:", loginPayload);
            setLoading(false);
            navigate("/home");
        }, 3000);
    }

    const handleGoogleError = (error: any) => {
        console.error("Google Signup Error:", error);
        setLoading(false);
    };

    return (
        <>{loading && <CommonLoader loadingState={loading} message="Logging you in..." />}
            <div className="signup-wrapper d-flex justify-content-center align-items-center vh-100">
                <Container>
                    <Card className="p-4 shadow-lg mx-auto" style={{ maxWidth: "500px" }}>
                        <h2 className="text-center mb-4 bold-text">Log-In</h2>
                        <Form onSubmit={formik.handleSubmit}>
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
                                Log-In
                            </Button>

                            <hr />

                            <GoogleAuthButton
                                type={GOOGLE_AUTH_TYPE.LOGIN}
                                onGoogleSuccess={handleGoogleLogin}
                                onGoogleError={handleGoogleError} />

                            <div className="text-center mt-3">
                                Not a member?{" "}
                                <Link to="/signup" className="text-primary fw-bold text-decoration-none">
                                    Signup
                                </Link>
                            </div>
                        </Form>
                    </Card>
                </Container>
            </div>
        </>
    )

}

export default Login;