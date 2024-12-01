import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGit, FaTwitter, FaInstagram} from 'react-icons/fa';
import './Footer.css'; 

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
            <h5 className="footer-title">For More Projects</h5>
            <h6>
                <a href='https://tushria.github.io/Personal_portfolio/' className="custom-link">Visit Website
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="rgb(117, 212, 244)" fill="none">
                  <path d="M19.1918 9.44118L17.2265 7.46899C15.8104 6.04799 15.2554 5.28357 14.4886 5.55381C13.5325 5.89077 13.8472 8.01692 13.8472 8.73471C12.3607 8.73471 10.8152 8.60259 9.34985 8.87787C4.51259 9.78664 3 13.7153 3 18C4.3691 17.0302 5.73683 15.997 7.38233 15.5476C9.43637 14.9865 11.7304 15.2542 13.8472 15.2542C13.8472 15.972 13.5325 18.0982 14.4886 18.4351C15.3575 18.7413 15.8104 17.9409 17.2265 16.5199L19.1918 14.5477C20.3973 13.338 21 12.7332 21 11.9945C21 11.2558 20.3973 10.6509 19.1918 9.44118Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </a>
            </h6>
          </Col>
         
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Follow Us</h5>
            <div className="footer-social-icons">
              <a href="https://github.com/tushria/frontend-proj1" target="_blank" rel="noopener noreferrer"><FaGit /></a>
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
            <p>Designed By Sakshi  &copy;{new Date().getFullYear()}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
