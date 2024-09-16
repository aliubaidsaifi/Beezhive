import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css'; 
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';


const MyNavbar = () => {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>BeesHive</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Services" id="services-dropdown">
                <LinkContainer to="/services/job-postings">
                  <NavDropdown.Item>Job Postings</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/email-merge">
                  <NavDropdown.Item>Email Merge</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/banchsales/login">
                  <NavDropdown.Item>Bench Sales Recruiters</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/recruiters">
                  <NavDropdown.Item>Recruiters</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/job-seekers">
                  <NavDropdown.Item>Job Seekers</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Employer" id="employer-dropdown">
                <LinkContainer to="/employer/register">
                  <NavDropdown.Item>Signup</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/employer/login">
                  <NavDropdown.Item>Signin</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/employer/job-postings">
                  <NavDropdown.Item>Job Posting</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/employer/pricing">
                  <NavDropdown.Item>Pricing</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Bench Sales" id="banchSales-dropdown">
                <LinkContainer to="/benchSales/register">
                  <NavDropdown.Item>Register</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/benchSales/login">
                  <NavDropdown.Item>LogIn</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <LinkContainer to="/recruiters">
                <Nav.Link>For Recruiters</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/post-jobs">
                <Nav.Link>Post a Job</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/find-jobs">
                <Nav.Link>Find Jobs</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/emailmerge">
                <Nav.Link>Email Merge</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel interval={2000}> 
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Description for the first slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Description for the second slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>Description for the third slide.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default MyNavbar;
