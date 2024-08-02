import React from 'react'
import './style.css';
import weddish from './assest/wedding_dish.jpg';
import { Link } from 'react-router-dom'
import wedimg1 from './assest/wed-img1.jpg';
import wedimg2 from './assest/wed-img2.jpg';
import wedimg3 from './assest/destinationwed.jpg';
import Header from './Component/Header';
const Wedding = () => {
  return (
    <div>
    <div className='main'>
  <div className='inner-box1'>
    <div className='blured-box'>
        <Header/>
        <section className='b-details'>
            <div className='b-heading'>
                <h1>~ Wedding ~</h1>
            </div>
            <div className="b-intro">
            <div className="b-img">
                <img src={weddish} alt="wedding" />
            </div>
            <div className='birthday-cont'>
                <p>Looking for catering services near you? Hire us for your 
                    wedding celebration and enjoy an exquisite range of delicious 
                    veg and non-veg dishes, delivered fresh and right to your venue. 
                    Make your special day even more memorable with our top-notch catering services.</p>
            <div className="click-me-w">
              <Link to= '/ContactUs'>
              <button>Contact Us</button>
              </Link>
            </div>
            </div>
            </div>
            <div className='food-details'>
                <h1>~ Services ~</h1>
                <div className='food'>
                <div className='food-img'>
                    <img src={wedimg1} alt={wedimg1}className='image-of-wed' />
                    <h4>Indoor Services</h4>
                    <h4 className='one'>Starts ₹ 349 per person</h4>
                </div>
                <div className='food-img1'>
                    <img src={wedimg2} alt={wedimg2} className='image-of-wed'/>
                    <h4>Outdoor Services</h4>
                    <h4 className='one'>Starts ₹ 349 per person</h4>
                </div>
                <div className='food-img3'>
                    <img src={wedimg3} alt={wedimg3} className='image-of-wed'/>
                    <h4>Destination wedding</h4>
                    <h4 className='one'>Starts ₹ 500 per person</h4>
                </div>
                </div>
            </div>

            <div className='services'>
                <h1>How It Works?</h1>

                <div className='service'>
                <div className='chef'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={44} height={44} color={"#000000"} fill={"none"}>
                <path d="M15.3979 4.40951C15.9703 4.02542 16.659 3.80138 17.4 3.80138C19.3882 3.80138 21 5.4144 21 7.40415C21 9.31828 19.5084 10.8838 17.625 11H17M15.3979 4.40951C14.9058 3.0062 13.5703 2 12 2C10.4297 2 9.09418 3.0062 8.60215 4.40951M15.3979 4.40951C15.5288 4.78297 15.6 5.18455 15.6 5.60277C15.6 5.91378 15.5606 6.21558 15.4866 6.50346M9.71838 5.60277C9.44207 5.12473 9.05914 4.71612 8.60215 4.40951M8.60215 4.40951C8.02968 4.02543 7.34099 3.80138 6.6 3.80138C4.61177 3.80138 3 5.4144 3 7.40415C3 9.31828 4.49159 10.8838 6.375 11H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 14V10M7 14V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M18 14.5C16.401 13.8776 14.3005 13.5 12 13.5C9.69952 13.5 7.59905 13.8776 6 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h3>Chef arrives at Home</h3>
                </div>
                <div className='cheffood'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={44} height={44} color={"#000000"} fill={"none"}>
                <path d="M10 9.25524C7.60631 7.95835 5.08056 5.71428 3 2M11.6155 4.41901C9.5805 3.0835 7.09742 3.64165 6.06938 5.66567C5.04134 7.68969 5.85764 10.4131 7.89263 11.7486C9.73497 12.9577 13.7672 14.2079 17 10.745C13.9706 9.45488 13.6505 5.75451 11.6155 4.41901Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 11C3.36093 11.4709 3 12.0054 3 12.572C3 14.4652 7.02944 16 12 16C16.9706 16 21 14.4652 21 12.572C21 12.0054 20.6391 11.4709 20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M21 13C21 16.5766 18.4936 19.7147 15.7951 21.4822C15.2402 21.8457 14.5804 22 13.9171 22H10.0829C9.41959 22 8.75976 21.8457 8.20486 21.4822C5.5064 19.7147 3 16.5766 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h3>Prepares dishes using your Ingredients and Applicances</h3>
                </div>
                <div className='chefclean'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={44} height={34} color={"#000000"} fill={"none"}>
                <path d="M11 9H19.9948C20.4907 9 20.7387 9 20.8843 9.16028C21.0299 9.32055 21.0108 9.57261 20.9728 10.0767L20.3518 18.3068C20.2196 20.0588 20.1535 20.9349 19.5893 21.4674C19.0252 22 18.1633 22 16.4396 22H11.9354C10.2116 22 9.34972 22 8.78559 21.4674C7.94616 20.675 8.08069 19.0693 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 8.90909V14.3636C11 16.0778 11 16.9349 10.4142 17.4675C9.82843 18 8.88562 18 7 18C5.11438 18 4.17157 18 3.58579 17.4675C3 16.9349 3 16.0778 3 14.3636V13.4545C3 10.8832 3 9.5976 3.87868 8.7988C4.75736 8 6.17157 8 9 8H10C10.4714 8 10.7071 8 10.8536 8.13313C11 8.26627 11 8.48054 11 8.90909Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 9C19 5.13401 16.75 2 13.9746 2C11.4428 2 9.34836 4.60771 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 14H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 13H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3>Cleans Kitchen after the services and leaves</h3>
                </div>
                </div>
            </div>

            
        </section>
    </div>
    </div>
  </div>
</div>
  )
}
export default Wedding
