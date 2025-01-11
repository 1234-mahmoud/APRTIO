import React from "react";
import "../style/LivingRoom.css";
import cup from "../imgs/coffee-cup.png";
import fur from "../imgs/armchair.png";
import user from "../imgs/user.png";
import map from "../imgs/map.png";
import smart from "../imgs/smart-city.png";
import food from "../imgs/food-tray.png";
import myPic from "../imgs/room.jpg";

export default function LivingRoom() {
  const arr_content = [
    { icon: cup, title1: "Innovative Spaces" },
    { icon: fur, title1: "Crafted Rooms" },
    { icon: user, title1: "24/7 Reception" },
    { icon: map, title1: "Quality Living" },
    { icon: smart, title1: "Smart Technology" },
    { icon: food, title1: "All Top Amenities" },
  ];
  return (
    <div className="living_room">
      <div className="living_content">
        {arr_content.map((c) => (
          <div className="card_cont" key={c.title1}>
            <div className="flip_card">
            
              <div className="face front">
                <div className="card_pic">
                  <img src={c.icon} alt="" />
                </div>
                <h1>{c.title1}</h1>
              </div>
              
              <div className="face back">
                <div className="card_pic">
                  <img src={c.icon} alt="" />
                </div>
                <h1>{c.title1}</h1>
                <p>Veniam sed quis nostrud ulamc</p>
              </div>
        
        </div>
          </div>
        ))}
      </div>
      <div className="living_room_pic">
        <img src={myPic} alt="" />
      </div>
    </div>
  );
}
