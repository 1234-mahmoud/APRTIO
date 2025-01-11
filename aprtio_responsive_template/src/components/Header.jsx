import React, { useContext } from "react";
import "../style/Header.css";
import logo from "../imgs/logo.png";
import { AppContext } from "../context/AppProvider";
export default function Header() {
const{Hide} = useContext(AppContext)
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
       <div className="home">
       <span>Home</span>
        <div className="home_pages">
          <div className="only">
            <a href="">Home Page 01</a>
          </div>
          <div className="only">
            <a href="">Home Page 02</a>
          </div>
          <div className="only">
            {" "}
            <a href="">Home Page 03</a>
          </div>
          <div className="only">
            <a href="">Home Page 04</a>
          </div>
          <div className="only">
            <a href="">Home Page 05</a>
          </div>
        </div>
       </div>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Projects</a>
        <a href="">Testimonials</a>
        <a href="">Blog</a>
        <a href="">contact</a>
      </div>
      <div className="quote">
        <button>
          <span>GET QUOTE</span>
        </button>
      </div>
      <div className="sideNav">
        <div className="list" onClick={Hide}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
