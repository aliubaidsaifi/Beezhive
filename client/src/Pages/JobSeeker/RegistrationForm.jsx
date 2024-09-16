import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import '../../index.css';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        whatsappNumber: '',
        password: '',
        confirmPassword: '',
        captcha: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center mx-auto">
                <Col md={6}>
                    <h2>Features</h2>
                    <ul >
                        <li>Simple Registeration</li>
                        <li>100% Free</li>
                        <li>100% Matching Jobs</li>
                        <li>Discover daily job updates.</li>
                        <li>Use your profile for easy, one-click applications.</li>
                        <li>Receive job alerts that match your profile.</li>
                       
                    </ul>
                    <p className="mt-3">
                            Already have an account? <Link to="/job-seekers/signin">Sign In!</Link>
                        </p>
                    
                </Col>
                <Col md={6}>
                    <h3 className="text-center">Job Seeker Registration</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formWhatsAppNumber">
                            <Form.Label>WhatsApp Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="whatsappNumber"
                                value={formData.whatsappNumber}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formCaptcha">
                            <Form.Label>Captcha</Form.Label>
                            <Form.Control
                                type="text"
                                name="captcha"
                                value={formData.captcha}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formTerms">
                            <Form.Check
                                type="checkbox"
                                label="By signing up, you agree to our Terms & Conditions and Privacy Policy."
                                required
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Sign Up
                        </Button>
                        <p className="text-center mt-3">
                            Already have an account? <Link to="/job-seekers/signin">Sign In!</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationForm;
