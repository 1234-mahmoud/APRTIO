import React from "react";
import "../style/Floor.css";
import floor from "../imgs/floor.jpg";
import FloorDirections from "./FloorDirections";
export default function Floor() {
  return (
    <div className="floor_container">
      <div className="floor">
        <div className="sideBar">
          <ul>
            <li>Studio</li>
            <li>Duplex</li>
            <li>Penthouse</li>
            <li>Convertible (Flex)</li>
            <li>Railroad</li>
            <li>Townhouse</li>
          </ul>
        </div>
        <div className="pic">
          <img src={floor} alt="" />
        </div>
      </div>
      <FloorDirections />
    </div>
  );
}
