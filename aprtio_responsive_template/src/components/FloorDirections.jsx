import React from "react";
import "../style/FloorDirections.css";
import pic from "../imgs/shapes.png";
export default function FloorDirections() {
  return (
    <div className="fdirections">
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className="floor_info">
        <p>
          Enimad minim veniam quis nostrud exercitation ullamco laboris. Lorem
          ipsum dolor sit amet cons aetetur adipisicing elit eiusmod tempor
        </p>
        <br />
        <p>
          Incididunt labore et dolore magna aliqua. Ut enim sed ayd minim veniam
        </p>
        <button>DOWNLOAD BROCHURE</button>
      </div>
    </div>
  )
}
