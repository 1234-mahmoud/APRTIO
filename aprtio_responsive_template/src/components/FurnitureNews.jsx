import React from "react";
import "../style/FurnitureNews.css";
import pic1 from "../imgs/g1.jpg";
import pic2 from "../imgs/g2.jpg";
import Button from "./Button";
export default function FurnitureNews() {
  return (
    <div className="furNews">
    <div className="container">
    <div className="cardNews">
        <h1>Read All The News About The Stylish Living Space</h1>
        <p>
          Elit sed tempor incididunts laboret dolor magn aliqua enim veniam sed
          ipsum quis nostrud exercitation lamco
        </p>
        <Button />
      </div>
      <div className="cardNews cardNews_cont">
        <div className="cardNews_cont_pic">
          <img src={pic1} alt="" />
        </div>
        <div className="cardNews_cont_info">
          <h2>Get To Know The Area Best Places Around</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt utlabore et…
          </p>
          <a href="https://old4.commonsupport.com/apartio/465/">Read More</a>
        </div>
      </div>
      <div className="cardNews cardNews_cont">
        <div className="cardNews_cont_pic">
          <img src={pic2} alt="" />
        </div>

        <div className="cardNews_cont_info">
          <h2>Remain Productive During The Covid-19</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt utlabore et…
          </p>
          <a href="https://old4.commonsupport.com/apartio/464/">Read More</a>
        </div>
      </div>
    </div>
    </div>
  );
}
