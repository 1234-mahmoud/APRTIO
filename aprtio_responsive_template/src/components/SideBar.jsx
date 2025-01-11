import "../style/SideBar.css";
import logo from "../imgs/logo.png";
import close from "../imgs/close-square-svgrepo-com.svg";
import { AppContext } from "../context/AppProvider";
import { useContext } from "react";
export default function SideBar() {
const {show,Hide} = useContext(AppContext)
    

  return (
    <div className={show?'sidebar':'hide'}>
      <div className="close" onClick={Hide}>
        <img src={close} alt="" />
      </div>
      <div className="info">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="about">
          <h1>About Us</h1>
          <p>
            We must explain to you how all seds this mistakens idea off
            denouncing pleasures and praising pain was born and I will give you
            a completed accounts off the system and expound the actually
            teaching.
          </p>
        </div>
        <div className="contact">
            <h1>Contact Info</h1>
            <div className="address">
                <h2>Adress</h2>
                <p>
                Romanian 9520 Faires Farm Road, Carlsbad, NC 28213.
                </p>
            </div>
            <div className="phone">
                <h2>Phone</h2>
                <p>
                +1 555-7890-123
                </p>
            </div>
            <div className="mail">
                <h2>Email</h2>
                <p>
                supportyou@example.com
                </p>
            </div>
            <span>&copy;Apartio 2021, All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
