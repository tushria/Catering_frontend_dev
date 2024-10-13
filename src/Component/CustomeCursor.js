import React,{useEffect, useState} from 'react'

const CustomeCursor = () => {
    const[position, setPosition]=useState({x:0,y:0});

    useEffect(()=>{
        const handleMouseMove=(e)=>{
            setPosition({x:e.clientX, y:e.clientY});
        };
        window.addEventListener('mousemove', handleMouseMove);
        return()=>{
            window.removeEventListener("mousemove", handleMouseMove);
        };
    },[]);

  return (
  <div
      style={{
        position: 'fixed', // Positions relative to the viewport
        left: `${position.x}px`, // Horizontally aligns cursor with mouse X position
        top: `${position.y}px`,  // Vertically aligns cursor with mouse Y position
        width: '20px',           // Width of the cursor
        height: '20px',          // Height of the cursor
        backgroundColor: 'rgba(255, 0, 0, 0.7)', // Red color with opacity
        borderRadius: '50%',     // Makes the cursor circular
        pointerEvents: 'none',   // Ensures the cursor does not block clicks
        transform: 'translate(-50%, -50%)', // Centers the circle on the cursor
        transition: 'transform 0.15s ease-out', // Smooth transition effect
        mixBlendMode: 'difference', // Adds a contrast effect with the background
      }}
    />
  );
};

export default CustomeCursor;
