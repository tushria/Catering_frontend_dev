import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate
import Header from './Component/Header';
import './style.css';
import '.'
import { getDatabase, ref, set } from 'firebase/database'; // Import Firebase functions

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState('');
  const [eventDetails, setEventDetails] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const navigate = useNavigate(); // Navigate to Cart after form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase(); 
    const contactRef = ref(db, 'contacts/' + Date.now()); 

    set(contactRef, {
      name,
      phoneNumber,
      serviceType,
      eventLocation,
      numberOfGuests,
      eventDetails,
    })
      .then(() => {
        console.log('Data saved successfully!');
        setConfirmationMessage('Thank you! Your details have been sent successfully.');

        // After form submission, navigate back to Cart page
        navigate('/');
      })
      .catch((error) => {
        console.error('Error saving data: ', error);
        setConfirmationMessage('There was an error sending your details. Please try again.');
      });

    // Clear form fields after submission
    setName('');
    setPhoneNumber('');
    setServiceType('');
    setEventLocation('');
    setNumberOfGuests('');
    setEventDetails('');
  };

  return (
    <div>
      <div className='cont-main-box'>
        {/* <section className='blured-box'> */}
          
          <Header />
          {/* <div className="inner-blurred-contactus-box"> */}
            <h1 id='cont-box2-heading1'>Get in Touch</h1>
            <h2 id='cont-box2-heading2'>Your Journey to an Unforgettable Gathering Begins Here</h2>
           
            <div className="contact-form-box">
              <form
                className="contactus"
                onSubmit={(e) => {
                  e.preventDefault();
                  document.querySelector('.confirmation-message').style.display = 'block';
                }}
              >
                <div>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" required />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" required />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="Your message" required></textarea>
                </div>

                <button type="submit">Send Message</button>

                <div className="confirmation-message" style={{ display: 'none' }}>
                  Your message has been sent!
                </div>
              </form>
            </div>
          </div>
        {/* </section> */}
      </div>
    // </div>~
  );
}

export default ContactUs;
