import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Payment = ({ onProceed, disabled }) => {
  return (
    <div>
      <h3>Proceed to Payment</h3>
      <Button variant="success" onClick={onProceed} disabled={disabled}>
        Pay Now
      </Button>
    </div>
  );
};

const ServiceDetailsForm = () => {
  const [venue, setVenue] = useState('');
  const [serviceDate, setServiceDate] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [duration, setDuration] = useState(''); // "day" or "night"
  const [isAvailable, setIsAvailable] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/check-service', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ location: venue, serviceDate, duration }),
      });
      const result = await response.json();
      if (result.available) {
        // Proceed with the booking process
        console.log('Service is available!');
        alert('Service is available!');
        setIsAvailable(true); // Update state to indicate service is available
      } else {
        alert('Sorry, the service is not available on this date.');
      }
    } catch (error) {
      console.error('Error checking service availability:', error);
      alert('An error occurred while checking service availability.');
    }
    // Reset the form
    resetForm();
  };

  const resetForm = () => {
    setVenue('');
    setServiceDate('');
    setServiceTime('');
    setDuration('');
    setIsAvailable(false); // Reset availability state
    setIsBooked(false); // Reset booking state
  };

  const handleBooking = () => {
    // Logic for booking confirmation and automatic submission
    setIsBooked(true);
    alert('Your booking has been confirmed!');
    // Here you could also send booking data to another endpoint if necessary
    resetForm();
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

      {isAvailable && !isBooked && (
        <Payment onProceed={handleBooking} disabled={isBooked} />
      )}
    </div>
  );
};

export default ServiceDetailsForm;
