import React from "react";
import "../style/Statistics.css";
import pic4 from "../imgs/pic4.jpg";
import Button from "./Button";
export default function Statistics() {
  return (
    <div className="content">
      <div className="img_txt">
        <img src={pic4} alt="" />
        <div className="img_info">
          <h1>Modern Place With Luxury Amenities</h1>
          <p>
            Duis aute irure dolor in reprehend voluptate cillum dolor eu fugiat
            nulla pariatur. Excepteur sint ocaecat cupidatat proid in culpa qui
            officia deserunt ipsum mollit anim laborum.
          </p>
          <Button />
        </div>
      </div>
      <div className="stat">
        <div className="container">
          <div className="stat_info">
            <span className="txt">Total Area Sq</span>
            <span className="num">560</span>
          </div>
          <div className="stat_info">
            <span className="txt">Apartments Sold</span>
            <span className="num">197</span>
          </div>
          <div className="stat_info">
            <span className="txt">Total Constructions</span>
            <span className="num">268</span>
          </div>
          <div className="stat_info">
            <span className="txt">Apartio Rooms</span>
            <span className="num">340</span>
          </div>
        </div>
      </div>
    </div>
  );
}
