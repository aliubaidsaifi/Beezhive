import React, { useState } from 'react';
import { Table, Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';

function EmailMerge() {
  const [recruiterType, setRecruiterType] = useState('');
  const [singleEmail, setSingleEmail] = useState('');
  const [bulkEmailInput, setBulkEmailInput] = useState('');
  const [errors, setErrors] = useState({});
  const [recruiterData, setRecruiterData] = useState({
    itRecruiter: [],
    healthcareRecruiter: [],
    engineeringRecruiter: [],
    benchSalesRecruiter: []
  });

  // Handle recruiter type change
  const handleRecruiterChange = (e) => {
    setRecruiterType(e.target.value);
    setSingleEmail('');
    setBulkEmailInput('');
    setErrors({});
  };

  // Helper function to extract name from email
  const extractNameFromEmail = (email) => {
    const emailPrefix = email.split('@')[0];
    // Replace periods and underscores with spaces, and capitalize each word
    return emailPrefix
      .split(/[\._]/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Email format validation (basic regex)
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Check for duplicate emails
  const isDuplicateEmail = (email, emails) => {
    return emails.some(existingEmail => existingEmail.email === email);
  };

  // Handle adding emails with validation
  const handleAddEmails = () => {
    if (!recruiterType) return;

    let newEmails = [];
    let validationErrors = {};

    // Single email validation
    if (singleEmail) {
      if (!isValidEmail(singleEmail)) {
        validationErrors.singleEmail = 'Invalid email format.';
      } else if (isDuplicateEmail(singleEmail, recruiterData[recruiterType])) {
        validationErrors.singleEmail = 'Email already exists.';
      } else {
        const name = extractNameFromEmail(singleEmail);
        newEmails.push({ email: singleEmail, name: name, status: 'Pending' });
      }
    }

    // Bulk email validation
    if (bulkEmailInput) {
      const bulkEmails = bulkEmailInput.split(',');
      bulkEmails.forEach(email => {
        const trimmedEmail = email.trim();
        if (!isValidEmail(trimmedEmail)) {
          validationErrors.bulkEmailInput = 'One or more emails have an invalid format.';
        } else if (isDuplicateEmail(trimmedEmail, recruiterData[recruiterType])) {
          validationErrors.bulkEmailInput = 'One or more emails already exist.';
        } else {
          const name = extractNameFromEmail(trimmedEmail);
          newEmails.push({ email: trimmedEmail, name: name, status: 'Pending' });
        }
      });
    }

    // If no validation errors, proceed to add emails
    if (Object.keys(validationErrors).length === 0) {
      setRecruiterData((prevState) => ({
        ...prevState,
        [recruiterType]: [...prevState[recruiterType], ...newEmails],
      }));
      // Clear input fields after adding
      setSingleEmail('');
      setBulkEmailInput('');
    }

    // Set validation errors state
    setErrors(validationErrors);
  };

  return (
    <Container>
      <Row className="my-4">
        <Col md={4}>
          <h4>Select Recruiter Type</h4>
          <Form>
            <Form.Check
              type="radio"
              label="IT Recruiter"
              value="itRecruiter"
              checked={recruiterType === 'itRecruiter'}
              onChange={handleRecruiterChange}
            />
            <Form.Check
              type="radio"
              label="Healthcare Recruiter"
              value="healthcareRecruiter"
              checked={recruiterType === 'healthcareRecruiter'}
              onChange={handleRecruiterChange}
            />
            <Form.Check
              type="radio"
              label="Engineering Recruiter"
              value="engineeringRecruiter"
              checked={recruiterType === 'engineeringRecruiter'}
              onChange={handleRecruiterChange}
            />
            <Form.Check
              type="radio"
              label="Bench Sales Recruiter"
              value="benchSalesRecruiter"
              checked={recruiterType === 'benchSalesRecruiter'}
              onChange={handleRecruiterChange}
            />
          </Form>
        </Col>

        <Col md={8}>
          <h4>Add Emails</h4>
          {recruiterType && (
            <>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter single email"
                    value={singleEmail}
                    onChange={(e) => setSingleEmail(e.target.value)}
                    className="mb-2"
                    isInvalid={!!errors.singleEmail}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.singleEmail}
                  </Form.Control.Feedback>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    placeholder="Enter bulk emails (comma separated)"
                    value={bulkEmailInput}
                    onChange={(e) => setBulkEmailInput(e.target.value)}
                    className="mb-2"
                    isInvalid={!!errors.bulkEmailInput}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.bulkEmailInput}
                  </Form.Control.Feedback>
                </Col>
              </Row>

              <Button variant="primary" onClick={handleAddEmails}>
                Add Emails
              </Button>
            </>
          )}

          {recruiterType && recruiterData[recruiterType].length > 0 && (
            <div className="mt-4">
              <h5>{recruiterType.replace(/([A-Z])/g, ' $1')} Emails</h5>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.N</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recruiterData[recruiterType].map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.email}</td>
                      <td>{entry.name}</td>
                      <td>{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default EmailMerge;
