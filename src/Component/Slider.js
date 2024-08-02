import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Slider.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import gulab_jamun from "../assest/gulab_jamun.jpg";
import starters from "../assest/starters.jpg";
import starter2 from "../assest/starter2.jpg"; 
import weddingfood from "../assest/weddingfood.jpg";
import food from "../assest/food.jpg";
import food2 from "../assest/food2.jpg";
import food1 from "../assest/food1.jpg";


export default function App() {
  const images = [starters, gulab_jamun, starter2,food1,weddingfood, food, food2];

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
