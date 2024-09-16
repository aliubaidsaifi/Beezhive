import React, { useState } from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import '../../index.css';
import  { Link } from 'react-router-dom';

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    console.log('Sign in form submitted:', formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center mx-auto">
      <Col md={6}>
        
          <h2>Benefits of Signing In</h2>
          <ul>
            <li>Access exclusive job postings</li>
            <li>Manage your profile and applications</li>
            <li>Receive job alerts based on your preferences</li>
            <li>Connect with employers directly</li>
          </ul>
          <p className=" mt-3">
              Don't have an account? <Link to="/services/job-seekers">Signup!</Link>
            </p>
        </Col>
        <Col md={6}>
          <h3 className="text-center">Job Seeker Sign In</h3>
          <p>Welcome back! Please enter your credentials to sign in.</p>
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

            <Form.Group
 controlId="formRememberMe">
              <Form.Check
                type="checkbox"
                label="Remember Me" 

              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>

            <p className="text-center mt-3">
              Don't have an account? <Link to="/services/job-seekers">Signup!</Link>
            </p>
          </Form>
        </Col>

      
      </Row>
    </Container>
  );
};

export default SigninForm;