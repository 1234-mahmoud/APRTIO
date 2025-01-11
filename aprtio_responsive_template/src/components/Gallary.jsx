import React from "react";
import pic1 from "../imgs/g1.jpg";
import pic2 from "../imgs/g2.jpg";
import pic3 from "../imgs/g3.jpg";
import pic4 from "../imgs/g4.jpg";
import pic5 from "../imgs/g5.jpg";
import pic6 from "../imgs/g6.jpg";
import "../style/gallary.css";
export default function Gallary() {
  return (
    <div className="gallary">
      <div className="gPic">
        <img src={pic1} alt="" />
      </div>
      <div className="gPic">
        <img src={pic2} alt="" />
      </div>
      <div className="gPic">
        <img src={pic3} alt="" />
      </div>
      <div className="gPic">
        <img src={pic4} alt="" />
      </div>
      <div className="gPic">
        <img src={pic6} alt="" />
      </div>
      <div className="gPic">
        <img src={pic5} alt="" />
      </div>
    </div>
  );
}
