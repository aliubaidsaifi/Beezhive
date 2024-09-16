import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserGraduate, FaHandshake  } from 'react-icons/fa';
import { RiTeamFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa6";
import '../index.css'


const Home = () => {
    return (
        <div>
            <Container className='main mb-5'>

                <p className="lead pt-5">Welcome to BeezHive</p>
                <h1 className="display-4">Secure your perfect </h1>
                <h1 className="display-4">candidate quickly!</h1>
                <p className="strong">Each day, we add 1000+ new job postings.</p>
                <p className='pb-5'>Subscribe to get job updates directly to your email.</p>
                <Row className="justify-content-center">
                    <Col md={4}>
                    <div className='icons'> 
                        <FaUserGraduate size="5rem"/>
                    </div>
                   
                        <Card className="card-custom mb-4 p-3">
                            <Card.Body>
                                <Card.Title>Find a Good Job</Card.Title>
                                <Card.Text>
                                    Make your free account. Add a title, description, and location to your job post, and you're done. Get all relevant jobs sent to your email. Also, view and apply for jobs on the portal.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                    <div className='icons'> 
                        <RiTeamFill  size="5rem"/>
                    </div>
                        <Card className="card-custom mb-4 p-3">
                        
                            <Card.Body>
                                <Card.Title>To Market the Resume</Card.Title>
                                <Card.Text>
                                    You only need your work email to sign up and begin creating your job post. Get all relevant jobs sent to your email and also view and apply for jobs on the portal directly.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} >
                    <div className='icons'> 
                        <FaHandshake  size="5rem"/>
                    </div>
                        <Card className="card-custom mb-4 p-3">
                            <Card.Body>
                                <Card.Title>To fulfill your staffing needs</Card.Title>
                                <Card.Text>
                                    You only need your work email to sign up and begin creating your job post. Resume Marketing, Bulk Emailing without doing spam.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home
