import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './SwiperCube.css';
import {EffectCube, Pagination} from 'swiper/modules';
import birthdayImage from '../asset/birthday.jpg';
export default function App() {
  const images = [birthdayImage,birthdayImage,birthdayImage,birthdayImage];

  return (
    <Swiper
      effect={'cube'}
      grabCursor={true}
      cubeEffect={{
        shadow:true,
        slideShadows:true,
        shadowOffset:20,
        shadowScale:0.94,
      }}
      pagination={true}
      modules={[EffectCube, Pagination]}
      className="mySwiper"
    >
    
    {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Swiper ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}



