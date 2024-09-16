import React from 'react';
import { Card, Form, Accordion } from 'react-bootstrap';

const FilterSidebar = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Filter Results</Card.Title>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Work Settings</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="workSetting1">
                  <Form.Check type="checkbox" label="On-Site" />
                </Form.Group>
                <Form.Group controlId="workSetting2">
                  <Form.Check type="checkbox" label="Hybrid" />
                </Form.Group>
                <Form.Group controlId="workSetting3">
                  <Form.Check type="checkbox" label="Remote" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>Posted Date</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="postedDate1">
                  <Form.Check type="checkbox" label="Today" />
                </Form.Group>
                <Form.Group controlId="postedDate2">
                  <Form.Check type="checkbox" label="Last 3 days" />
                </Form.Group>
                <Form.Group controlId="postedDate3">
                  <Form.Check type="checkbox" label="Last 7 days" />
                </Form.Group>
                <Form.Group controlId="postedDate4">
                  <Form.Check type="checkbox" label="Last 14 days" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>Employment Type</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="employmentType1">
                  <Form.Check type="checkbox" label="Full-time" />
                </Form.Group>
                <Form.Group controlId="employmentType2">
                  <Form.Check type="checkbox" label="Part-time" />
                </Form.Group>
                <Form.Group controlId="employmentType3">
                  <Form.Check type="checkbox" label="Contract" />
                </Form.Group>
                <Form.Group controlId="employmentType4">
                  <Form.Check type="checkbox" label="Third Party" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>Work Authorization</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="workAuthorization1">
                  <Form.Check type="checkbox" label="Willing to Sponsor" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="4">
            <Accordion.Header>Employer Type</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="employerType1">
                  <Form.Check type="checkbox" label="Direct Hire" />
                </Form.Group>
                <Form.Group controlId="employerType2">
                  <Form.Check type="checkbox" label="Recruiter" />
                </Form.Group>
                <Form.Group controlId="employerType3">
                  <Form.Check type="checkbox" label="Agency" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="5">
            <Accordion.Header>Easy Apply</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group controlId="easyApply1">
                  <Form.Check type="checkbox" label="Easy Apply" />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

export default FilterSidebar;
