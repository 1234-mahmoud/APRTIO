import React, { useState,useEffect } from "react";
import "./MySlider.css";
import pic1 from "../imgs/pic1.webp";
import pic2 from "../imgs/pic2.webp";
import pic3 from "../imgs/pic3.webp";

export default function MySlider() {
  const [count, setCount] = useState(0);
  const imgs = [pic1, pic2, pic3];
  const extendedImgs = [imgs[imgs.length - 1], ...imgs, imgs[0]];

  const navigateToSlide = (index = count + 1) => {
    if (index >= imgs.length) {
      setCount(0); // Reset to the first slide
    } else {
      setCount(index);
    }
  };
  
  useEffect(() => {
    const intervalId = setInterval(() => navigateToSlide(), 5000); // Change slide every 3 seconds
    return () => clearInterval(intervalId); // Cleanup the interval on unmount
  }, [count]); // Dependency ensures `count` updates correctly


  return (
    <div className="slider">
      <div className="container">
        <div
          className="slider_img"
          
        >
          {extendedImgs.map((img, index) => (
            <div key={index} className={`img_com `} style={{
              transition: "transform 1s ease-in-out",
              transform: `translateY(-${count * 100}%)`,
            }}>
              <div className={`slider_content ${index===count + 2?'show_active_slider' : 'hide_active_slider'}`}>
                <div className="prod_img">
                  <img src={img} alt="" />
                </div>
                <div className={`slider_info`}>
                  <h3>
                  Landmark Apartments
                  <br/>
                  with 5-star rating
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="bullets">
          {imgs.map((_, index) => (
            <span
              key={index}
              className={`bullet ${index === count ? "active" : ""}`}
              onClick={() => navigateToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
