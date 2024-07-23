import React,{useEffect,useState} from 'react'
import "./Slider.css"
import drinks from "../assest/drinks.jpg"
import starters from "../assest/starters.jpg"
import starter2 from "../assest/starter2.jpg" 
import weddingfood from "../assest/weddingfood.jpg"
import food from "../assest/food.jpg"



const Slider = () => {

    const [slider,SetSlider]=useState(0)
    const imgdata=[drinks,starters,starter2,weddingfood,food]
    const HandlePlus =()=>{
        SetSlider(slider === imgdata.length-1? 0:slider+1)
    }
    const HandleMinus =()=>{
        SetSlider(slider === 0? imgdata.length-1:slider-1)
    }

    useEffect(()=>{
        const sliderclear = setInterval(()=>{
            HandlePlus()
        },2000)
        return()=>clearInterval(sliderclear)
    },[slider])
  return (
    <div className='slider'>
       {
            imgdata.map((img,i)=>(
                <div className={`slider-img ${slider === i? "block":"hidden"}`} key={i}>
                    <img src={img} alt='' style={{width:"60%", height:"70%"}} />
                <div className='btn'>
                    <button onClick={HandleMinus}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></button>
                    <button onClick={HandlePlus}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M10.5 8C10.5 8 13.5 10.946 13.5 12C13.5 13.0541 10.5 16 10.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg></button>
                </div>
                </div>
            ))
      } 
    </div>
  )
}

export default Slider
