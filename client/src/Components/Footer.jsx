import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4" >
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Job Seekers</h5>
            <ul className="list-unstyled">
              <li><Link to="/services/job-seekers" className="footer-link">Sign Up</Link></li>
              <li><Link to="/signin" className="footer-link">Sign In</Link></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Employers</h5>
            <ul className="list-unstyled">
              <li><a href="/signup-recruiter" className="footer-link">Sign Up as a Recruiter</a></li>
              <li><a href="/signup-bench-sales" className="footer-link">Sign Up as a Bench Sales Recruiter</a></li>
              <li><a href="/tutorial" className="footer-link">Tutorial</a></li>
              <li><a href="/pricing" className="footer-link">Pricing</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="https://wa.me/17017223238" className="footer-link">WhatsApp +1 (701) 722-3238</a></li>
              <li><a href="mailto:helpdesk@beeshive.com" className="footer-link">Helpdesk@beeshive.com</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="footer-divider" />
        <Row>
          <Col>
            <p className="text-center mb-0">
              <a href="/privacy-policy" className="footer-link">Privacy Policy</a> | 
              <a href="/terms-of-service" className="footer-link"> Terms of Service</a> | 
              <a href="/cancellation-refund-policy" className="footer-link"> Cancellation & Refund Policy</a> | 
              <a href="/contact" className="footer-link"> Contact Us</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
