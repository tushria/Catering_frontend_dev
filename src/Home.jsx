import React from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'
import './style.css';
import Card from './Component/Card';
import Slider from './Component/Slider';

import hotfresh from './assest/hotAndfresh.png';
import quantity from './assest/quantity.png';
import recipe from './assest/recipe.png';
import relax from './assest/relax.png';
import rupee from './assest/Rupee.png';

const Home = () => {
  
  return (
    <div>
      <div className='main-body'>
      <div className='inner-box1'>
            <section className='blured-box'>
                <div className="logo"></div>
                    <div className="nav-bar">
                        <ul className="menu">
                            <li>HOME</li>
                            <li>MENU</li>
                            <li>EVENT</li>
                            <li>ABOUT</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    
              {/* second section */}
              <div className="main-cont">
              <div className="left-sec">
                <div className="left-main">
                  <h1 id="web-name">MasalaMingle</h1>
                  <h1 id="tag-line">Where flavors meet and mingle</h1>
                </div>
                <div className="click-me">
                  <Link to= '/ContactUs'>
                  <button>Contact Us</button>
                  </Link>
                </div>
                <h3>Welcome to MasalaMingle, a food catering company in India. We <br /> provide event catering service across India</h3>
              </div>
              </div>
              <section className='second-sec'>
                <h1>Special Occassions</h1>
                <Card /> 
              </section>
              <section className='third-sec'>
                <div className='text-box'>
                <h1>~ Savor the Flavor ~</h1>
                </div>
                  <Slider/>
              </section>

              <section className='fourth-sec'>
              <h1>~ Why Book MasalaMingle? ~</h1>
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
            </section>
        </div>
        </div>
    </div>
  )
}

export default Home;
