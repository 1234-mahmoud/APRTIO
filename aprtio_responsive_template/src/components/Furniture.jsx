import React from "react";
import pic1 from "../imgs/fur1.jpg";
import pic2 from "../imgs/fur2.jpg";
import pic3 from "../imgs/fur3.jpg";
import pic4 from "../imgs/fur4.jpg";
import "../style/furniture.css";
import Button from "./Button";
export default function Furniture() {
  return (
    <div className="furniture">
      <div className="furImage">
        <img src={pic1} alt="" />
        <div className="flip">
          <div className="face front">
           <div className="front_info">
             <h1>Duplex/Triplex</h1>
            <span>START FROM 120 Sq ft</span>
           </div>
          </div>
          <div className="face back">
          <div className='back_info'>
              <h2>Duplex / Triplex</h2>
            <span>STARTS FROM 120 Sq ft</span>
            <p>
              Enimad minim veniam quis nostrud exercit ation ullamco laboris.
              Lorem ipsum dolor sit amet cons aetetur adipisicing.
            </p>
           <Button/>
          </div>
          </div>
        </div>
      </div>
      <div className="furImage">
        <img src={pic2} alt="" />
        <div className="flip">
          <div className="face front">
           <div className="front_info">
             <h1>Duplex/Triplex</h1>
            <span>START FROM 120 Sq ft</span>
           </div>
          </div>
          <div className="face back">
        <div className='back_info'>
              <h2>Duplex / Triplex</h2>
            <span>STARTS FROM 120 Sq ft</span>
            <p>
              Enimad minim veniam quis nostrud exercit ation ullamco laboris.
              Lorem ipsum dolor sit amet cons aetetur adipisicing.
            </p>
           <Button/>
        </div>
          </div>
        </div>
      </div>
      <div className="furImage">
        <img src={pic3} alt="" />
        <div className="flip">
          <div className="face front">
           <div className="front_info">
             <h1>Duplex/Triplex</h1>
            <span>START FROM 120 Sq ft</span>
           </div>
          </div>
          <div className="face back">
        <div className='back_info'>
              <h2>Duplex / Triplex</h2>
            <span>STARTS FROM 120 Sq ft</span>
            <p>
              Enimad minim veniam quis nostrud exercit ation ullamco laboris.
              Lorem ipsum dolor sit amet cons aetetur adipisicing.
            </p>
           <Button/>
        </div>
          </div>
        </div>
      </div>
      <div className="furImage">
        <img src={pic4} alt="" />
        <div className="flip">
          <div className="face front">
           <div className="front_info">
             <h1>Duplex/Triplex</h1>
            <span>START FROM 120 Sq ft</span>
           </div>
          </div>
          <div className="face back">
        <div className='back_info'>
              <h2>Duplex / Triplex</h2>
            <span>STARTS FROM 120 Sq ft</span>
            <p>
              Enimad minim veniam quis nostrud exercit ation ullamco laboris.
              Lorem ipsum dolor sit amet cons aetetur adipisicing.
            </p>
           <Button/>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
