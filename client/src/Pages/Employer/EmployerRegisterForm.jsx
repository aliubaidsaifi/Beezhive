import React, { useState } from 'react';
import { Container, Row, Col, Form, Button,} from 'react-bootstrap';
import '../../index.css';
import { Link } from 'react-router-dom';

const EmployerRegisterForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        workEmail: '',
        workNumber:'',
        whatsappNumber: '',
        companyName: '',
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
                    <h3>Features</h3>
                    <ul >
                        <li>Simple Registeration</li>
                        <li>100% Free and accurate</li>
                        <li>Free Unlimited Job Postings</li>
                        <li>Apply to several jobs at once with one click</li>
                        <li>Get the unlimited consultant's profile in your inbox.</li>
                        <li>Around 30K+ active sales recruiter's</li>
                        <li>Unlimited Direct Hire Consultant </li>

                       
                    </ul>
                    <p className="mt-3">
                            Already have an account? <Link to="/employer/login">LogIn!</Link>
                        </p>
                    
                </Col>
                <Col md={6}>
                    <h3 className="text-center">Recruiter Registration</h3>
                    <Form onSubmit={handleSubmit}>
                    <p className="text-center mt-3">
                            Do you wanna go for Bench Sales? <Link to="/benchsales/register">Click Here!</Link>
                        </p>
                    <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Work Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formWorkNumber">
                            <Form.Label>Work Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="workNumber"
                                value={formData.workNumber}
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
                        
                        <Form.Group controlId="formcompanyName">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyName"
                                value={formData.companyName}
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
                           Register
                        </Button>
                        <p className="text-center mt-3">
                            Already have an account? <Link to="/employer/login">LogIn!</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default EmployerRegisterForm;
