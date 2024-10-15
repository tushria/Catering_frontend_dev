import React from 'react';
import './AboutPage.css'; // Custom styling (optional)
import { Container, Row, Col, Card } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className="about-page my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow-sm border-0">
            <Card.Body>
              <Card.Title>Welcome to [Your Catering Website Name]</Card.Title>
              <Card.Text>
                At [Your Catering Website Name], we are dedicated to providing delicious food and impeccable service for all your special occasions, whether it’s a wedding, corporate event, or an intimate gathering.
              </Card.Text>
              <Card.Subtitle className="mt-3">Our Mission</Card.Subtitle>
              <Card.Text>
                Our mission is to create memorable dining experiences that delight the senses. Great food brings people together, and our team is committed to crafting menus that cater to every palate.
              </Card.Text>
              <Card.Subtitle className="mt-3">What We Offer</Card.Subtitle>
              <ul>
                <li><strong>Diverse Menu Selection:</strong> Our extensive menu features a variety of dishes made from fresh, high-quality ingredients.</li>
                <li><strong>Customized Catering Solutions:</strong> We offer customizable catering packages tailored to your specific needs and preferences.</li>
                <li><strong>Professional Staff:</strong> Our friendly and professional staff is here to ensure that your event runs smoothly.</li>
                <li><strong>Easy Online Ordering:</strong> Our user-friendly interface allows you to browse our menu and proceed to payment with ease.</li>
                <li><strong>Delivery and Setup:</strong> We offer prompt delivery and setup services, ensuring your food arrives fresh and ready to serve.</li>
              </ul>
              <Card.Subtitle className="mt-3">Our Commitment to Quality</Card.Subtitle>
              <Card.Text>
                We take pride in using only the finest ingredients and innovative cooking techniques to deliver mouthwatering dishes that will leave your guests raving.
              </Card.Text>
              <Card.Subtitle className="mt-3">Join Us in Celebrating</Card.Subtitle>
              <Card.Text>
                Let us be a part of your next celebration! Explore our menu, discover our services, and experience the difference that [Your Catering Website Name] can make. We look forward to serving you!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
