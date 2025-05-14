import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import navigate
import Header from './Component/Header';
import './style.css';
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
        <section className='blured-box'>
          
          <Header />
          <div className="inner-blurred-contactus-box">
            <h1 id='cont-box2-heading1'>Get in Touch</h1>
            <h2 id='cont-box2-heading2'>Your Journey to an Unforgettable Gathering Begins Here</h2>
            {/* New Contact Form Box */}
            <div className="contact-form-box">
              <form className='contactus' onSubmit={handleSubmit}>
                <div className="cont-lbl1">
                  <label>Name</label>
                  <input 
                    type="text" 
                    placeholder='Enter your Name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                  />
                </div>
                <div className="cont-lbl2">
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    placeholder='Phone number' 
                    value={phoneNumber} 
                    onChange={(e) => setPhoneNumber(e.target.value)} 
                    required 
                  />
                </div>
                <div className="cont-lbl2">
                  <label>Event Location</label>
                  <input 
                    type="text" 
                    placeholder='Event Location' 
                    value={eventLocation} 
                    onChange={(e) => setEventLocation(e.target.value)} 
                    required 
                  />
                </div>
                <div className="cont-lbl2">
                  <label>Number of Guests</label>
                  <input 
                    type="number" 
                    placeholder='Number of Guests' 
                    value={numberOfGuests} 
                    onChange={(e) => setNumberOfGuests(e.target.value)} 
                    required 
                  />
                </div>
                <div className="cont-lbl2">
                  <label>Event Details</label>
                  <textarea 
                    placeholder='Event Details' 
                    value={eventDetails} 
                    onChange={(e) => setEventDetails(e.target.value)} 
                    required 
                  />
                </div>
                <button type='submit'>Done</button>
              </form>
              {confirmationMessage && (
                <div className="confirmation-message">
                  {confirmationMessage}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;

