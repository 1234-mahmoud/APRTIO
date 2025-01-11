import React from "react";
import "../style/Footer.css";
import Button from "./Button";
import logo from "../imgs/logo.png";
import user from "../imgs/user.png";
import tel from "../imgs/telephone.png";
import mail from "../imgs/mail.png";
import location from "../imgs/location.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_txt">
        <div className="txt1">
          <h1>Your Trusted Partner In Real Estate</h1>
          <p>
            Have Any Questions or Want to Schedule a Visit? We’re Ready To Help!
          </p>
        </div>
        <div className="txt1_btn">
          <Button />
        </div>
      </div>

      <div className="footer_ele">
        <div className="links_container">
          <div className="footer_logo">
            <img src={logo} alt="" />
          </div>

          <div className="footer_links">
            <a href="">Home</a>
            <a href="">About us</a>
            <a href="">Our Apartment</a>
            <a href="">Latest News</a>
            <a href="">Contact</a>
            <a href="">FAQ'S</a>
            <a href="">Schedule a Tour</a>
          </div>
        </div>
        <div className="container">
          
           
              <div className="agent">
                <h2>Our Agents</h2>
                <div className="ag">
                  <div className="ag_pic">
                    <img src={user} alt="" />
                  </div>
                  <div className="ag_contact">
                    <h2>Ms. Tina Sophia</h2>
                    <span className="cert">Certified Agent</span>
                    <div className="tel">
                      <img src={tel} alt="" />
                      <span>1-258-985-703</span>
                    </div>
                    <div className="mail">
                      <img src={mail} alt="" />
                      <span>johan@aprtio.com</span>
                    </div>
                  </div>
                </div>
{/* -------------------------------- */}
                <div className="ag">
                  <div className="ag_pic">
                    <img src={user} alt="" />
                  </div>
                  <div className="ag_contact">
                    <h2>Ms. Tina Sophia</h2>
                    <span className="cert">Certified Agent</span>
                    <div className="tel">
                      <img src={tel} alt="" />
                      <span>1-258-985-703</span>
                    </div>
                    <div className="mail">
                      <img src={mail} alt="" />
                      <span>johan@aprtio.com</span>
                    </div>
                  </div>
                </div>
              </div>
{/* -------------------------------- */}

              <div className="details">
                <h2>Get In Touch</h2>

                <h3>Visit Us Today:</h3>
                <p>31 Camden Place, Highland Mills NewYork 10930 - USA</p>
                <h3>Phone:</h3>
                <span>1-258-985-703</span>
                <h3>Email:</h3>
                <span>info@domain.com</span>
                <div className="location">
                  <img src={location} alt="" />
                  <a href="https://old4.commonsupport.com/apartio/home-page-04/#">
                    Location Map
                  </a>
                </div>
              </div>
{/* -------------------------------- */}

          

            <div className="form">
              <h2>Send An Inquiry</h2>
              <form action="">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Phone number" />
                <input type="text" placeholder="Subject" />
                <textarea name="" id="" placeholder="write message"></textarea>
                <Button />
              </form>
            </div>
          
        </div>
  
      </div>
      <div className="copyright">
        <p>&copy; 2024 All rights reserved. Privacy Policy | Booking Guide</p>
      </div>
    </div>
  );
}
