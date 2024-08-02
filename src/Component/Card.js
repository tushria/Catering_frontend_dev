// src/Component/Card.js
import React from 'react';
import './Card.css';
import cateringImage from '../assest/b-dy2_catering.jpg';
import cateringImage1 from '../assest/in-wed.jpg';
import cateringImage2 from '../assest/official_catering.jpg';
import birthday from "../assest/birthday.jpg"
const Card = () => {
  return (
    <div className="cards-of-Cards">
      <div className='card1-of-card-comp'>
      <img src={birthday}  alt={birthday}/>
      <h2>Birthday</h2>
      <a href='/birthday' className='styling-of-card-comp'>Check out!</a>
      </div>


      <div className='card1-of-card-comp'>
      <img src={cateringImage1}  alt={cateringImage}/>
      <h2>Weddings</h2>
      <a href='/wedding' className='styling-of-card-comp'>Check out!</a>
      </div>

      <div className='card1-of-card-comp'>
      <img src={cateringImage2}  alt={cateringImage}/>
      <h2>Meetings</h2>
      <a href='/Meeting' className='styling-of-card-comp'>Check out!</a>
      </div>
    </div>
    
  );
};

export default Card;
