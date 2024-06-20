import React from "react";
import "../styles/componentsstyles/herobrands.css";
import section20 from "../assets/section20.png";
import section21 from "../assets/section21.png";
import section22 from "../assets/section22.png";
import section23 from "../assets/section23.png";

function Herobrands() {
  return (
    <div className="herobrands container section">
      <div className="herobrands-container">
        <ul>
          <li>
            <img src={section20} alt="brand 1" />
          </li>
          <li>
            <img src={section21} alt="brand 2" />
          </li>
          <li>
            <img src={section22} alt="brand 3" />
          </li>
          <li>
            <img src={section23} alt="brand 4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Herobrands;
