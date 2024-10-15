import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Create this file for additional styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">About Us</h5>
            <p>
              We provide the best catering services to make your events memorable. Our team is dedicated to offering top-notch services and mouth-watering cuisines.
            </p>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="/menu">Menu</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/AboutPage">About</a></li>
              <li><a href="/services">Our Services</a></li>
            </ul>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <p>123 Catering St., Food City, CA</p>
            <p>Email: info@catering.com</p>
            <p>Phone: (123) 456-7890</p>
          </Col>
        </Row>
        <Row className="footer-bottom">
          <Col>
            <p>&copy; {new Date().getFullYear()} Catering Services. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
