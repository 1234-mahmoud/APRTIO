import React, { useState } from "react";
import "../style/Video.css";
import pic from "../imgs/g3.jpg";
import btn from "../imgs/play-button.png";
import exit from "../imgs/cross.png";
export default function Video() {
  const [showVid, setShowVid] = useState(true);
  const displayVid = () => {
    setShowVid(!showVid);
  };
  return (
    <div className="video_">
      <div className="pic">
        <img src={pic} alt="" />
      </div>
      <div className={showVid ? "vid_frame" : "show_vid"}>
        <div className="exit" onClick={displayVid}>
          <img src={exit} alt="" />
        </div>
        <iframe
          src="https://www.youtube.com/embed/W68CB72hjdw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video_thubnail">
        <div className="btn" onClick={displayVid}>
          <img src={btn} alt="" />
        </div>
        <p> Apartio offers excellent combination of location & quality</p>
        <span>Take a Full Video Tour</span>
      </div>
    </div>
  );
}
