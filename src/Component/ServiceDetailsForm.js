import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ServiceDetailsForm = () => {
  const [venue, setVenue] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [duration, setDuration] = useState(''); // "day" or "night"

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to an API or updating state
    console.log({ venue, serviceDate, serviceTime, duration });
    // Reset the form
    setVenue('');
    setServiceDate('');
    setServiceTime('');
    setDuration('');
  };

  return (
    <div className="service-details-form">
      <h3>Service Details</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="venue">
          <Form.Label>Venue</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the venue"
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="serviceDate">
          <Form.Label>Service Date</Form.Label>
          <Form.Control
            type="date"
            value={serviceDate}
            onChange={(e) => setServiceDate(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="serviceTime">
          <Form.Label>Service Time</Form.Label>
          <Form.Control
            type="time"
            value={serviceTime}
            onChange={(e) => setServiceTime(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="duration">
          <Form.Label>Duration</Form.Label>
          <Form.Control
            as="select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          >
            <option value="">Select duration</option>
            <option value="day">Day</option>
            <option value="night">Night</option>
          </Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ServiceDetailsForm;
