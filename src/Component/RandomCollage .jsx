import React from "react";
import './RandomCollage.css'; // Import the CSS file for styling
import collage1 from '../assest/collage1.jpg';
import collage2 from '../assest/collage2.jpg';
import collage3 from '../assest/collage3.jpg';
import collage4 from '../assest/collage4.jpg';
import collage5 from '../assest/collage5.jpg';
const images = [collage1, collage5,collage3,collage2,collage4];

const RandomCollage = () => {
  return (
    <div className="collage-container">
      {images.map((src, index) => (
        <div key={index} className={`collage-item item-${index + 1}`}>
          <img
            src={src}
            alt={`Collage item ${index + 1}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }}
          />
        </div>
      ))}
    </div>
  );
};

export default RandomCollage;
