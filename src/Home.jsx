import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='inner-box1'>
            <section className='blured-box'>
                <div className="logo"></div>
                    <div className="nav-bar">
                        <ul class="menu">
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
                  <button>View Menu</button>
                </div>
                <h3>Welcome to MasalaMingle, a food catering company in India. We <br /> provide event catering service across India</h3>
              </div>
              </div>
              <section className=''>
                <div className='heading'>
                  <h1>Let's have a MasalaMingle</h1>
                </div>
                <div className=''></div>
              </section>
            </section>
        </div>
    </div>
  )
}

export default Home
