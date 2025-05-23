import React from 'react'
// import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'
import './style.css';
import Card from './Component/Card';
import Slider from './Component/Slider';
import Header from './Component/Header';
import hotfresh from './assest/hotAndfresh.png';
import quantity from './assest/quantity.png';
import recipe from './assest/recipe.png';
import relax from './assest/relax.png';
import rupee from './assest/Rupee.png';

import food from './assest/food.png'
import CustomeCursor from './Component/CustomeCursor';
import RandomCollage from './Component/RandomCollage ';
import Birthday from './Birthday';

import Footer from './Component/Footer';
import ReviewInputCard from './Component/ReviewInputCard';

const Home = () => {
  
  return (
    <div>
      <div className='main-body'>
      <div className='inner-box1'>
        <CustomeCursor/>
            <section className='blured-box'>
                <div className="logo"></div>
                  <Header/>
                    
              {/* second section */}
              <div className="main-cont">
              <div className="left-sec">
                <div className="left-main">
                  <h1 id="web-name">FestiveFare</h1>
                  <h1 id="tag-line">Celebrate with a Feast, Crafted to Perfection</h1>
                </div>
                <div className="buttons-container">
                  <Link to= '/ContactUs'>
                  <button className="button-arounder">Contact Us</button>
                  </Link>
                </div>
              </div>
              
              <div className='right-sec'>
                  <div className='right-img'>
                    <img src={food} alt={food} className='img2' />
                  </div>
              </div>

              </div>
                <div className="marquee-container">
                  <div className="marquee-content">
                      <span>Welcome to FestiveFare, a food catering company in India. We provide event catering service across India.❤️🤍🩵</span>
                     
                  </div>
                </div>
              <section className='second-sec'>
                <h1> Special Occassions </h1>
                <Card/> 
              </section>
              <section className='third-sec'>
                <div className='text-box'>
                <h1> Savor the Flavor </h1>
                </div>
                  {/* <Slider/> */}
                  <RandomCollage/>
              </section>

              <section className='fourth-sec'>
              <h1> Why Book FestiveFare? </h1>
              <div className='fourth-detail'>
                <div className='first'>
                <img src={hotfresh} alt={hotfresh} />
                <h2>Hot & Fresh</h2>
                </div>
                <div className='second'>
                <img src={quantity} alt={quantity} />
                <h2>Good Quality</h2>
                </div>
                <div className='third'>
                <img src={rupee} alt={rupee} />
                <h2>Pocket Friendly</h2>
                </div>
                <div className='fourth'>
                <img src={relax} alt={relax} />
                <h2>Custom Made</h2>
                
                </div>
                <div className='fifth'>
                <img src={recipe} alt={recipe} />
                <h2>Professinals</h2>
                </div>
                <div className='sixth'>
                <img src={hotfresh} alt={hotfresh} />
                <h2>Home Comfort</h2>
                </div>
              </div>
              </section>
            <ReviewInputCard/>
            </section>
          <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Home;
