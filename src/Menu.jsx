import React from 'react';
import { Link } from 'react-router-dom';
import indiandishes from './assest/file.png';
import Mitems from './Component/Mitems';
import Header from './Component/Header';
const Menu = () => {
  return (
    <div>
      <div className='main-body'>
      <div className='inner-box1'>
            <section className='blured-box'>
                <div className="logo"></div>
                   <Header/>
                    <section className='menu-sec'>
                        <h1>~ Worldwide Cuisines ~</h1>
                        <h3>Choose from 15+ cuisines and 500+ dishes</h3>
                        <div className='menus-item'>
                            <img src={indiandishes} alt="" />
                            <p>
                                <span className="highlight">Indian cuisine </span>is a tapestry of rich and diverse flavors,
                                reflecting the country's vast cultural and regional differences.
                                <br />
                                <br />
                                From the <span className="highlight">creamy, buttery delights</span> of North India, like <span className="dish-name">Butter Chicken</span>
                                and <span className="dish-name">Tandoori Chicken</span>, to the <span class="highlight">tangy, coconut-infused dishes</span> of South India,
                                such as <span className="dish-name">Dosa</span> and <span className="dish-name">Sambar</span>, the variety is immense.
                                <br />
                                <br />
                                The vibrant street foods, including <span className="dish-name">Pav Bhaji</span> from Mumbai
                                and the <span className="highlight">spicy Chaat</span>, offer a quick and delicious bite.
                                Desserts like the syrupy <span className="dish-name">Gulab Jamun</span> and the crispy <span className="dish-name">Jalebi</span>
                                provide a sweet ending to meals. Whether it's the aromatic
                                <span className="dish-name">biryanis</span>, the comforting <span className="dish-name">dals</span>, or the wide array of breads and
                                snacks, each dish tells a story of India's culinary heritage.
                                
                            </p>
                        </div>
                    </section>
                    <section className='main-menu'>
                        <h1>~ Menu ~</h1>
                            <Mitems/>
                    </section>
                    
              <section className='last-sec-menu-pg'></section>
            </section>
        </div>
        </div>
    </div>
  )
}

export default Menu
