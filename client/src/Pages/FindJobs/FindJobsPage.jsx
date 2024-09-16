import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
import FilterSidebar from '../../Components/FilterSidebar';
import axios from 'axios';

const FindJobsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); // Mock API endpoint
        const jobData = response.data.slice(0, 5).map((job, index) => ({
          id: job.id,
          title: `Job Title ${index + 1}`,
          company: `Company ${index + 1}`,
          location: `Location ${index + 1}`,
          description: job.body,
        }));
        setJobs(jobData);
      } catch (error) {
        console.error('Error fetching job data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container className='mb-5'>
      <h1 className="text-center my-4">Find Jobs</h1>
      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Control type="text" placeholder="Job Title, Keywords, Company" />
          </Col>
          <Col md={4}>
            <Form.Control type="text" placeholder="City, Country, Postal code" />
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit" block>
              Search Jobs
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col md={3}>
          <FilterSidebar />
        </Col>
        <Col md={9}>
          <ListGroup>
            {jobs.map((job, index) => (
              <ListGroup.Item key={job.id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {job.company} - {job.location}
                    </Card.Subtitle>
                    <Card.Text>{job.description}</Card.Text>
                    <Button variant="primary">View Full JD</Button>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FindJobsPage;
