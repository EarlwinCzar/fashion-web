import React from "react";
import "../styles/pagesstyles/section2.css";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";
import girl3 from "../assets/girl3.png";

function Section2() {
  return (
    <section className="section2 container section">
      <article className="section2-container">
        <div className="section2-left">
          <div className="section2-left-container">
            <p className="section2-left-title">
              Still classic with
              <br /> modern style
            </p>
            <p className="section2-left-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              <br /> enim ad minim veniam.
            </p>
            <div className="section2-left-btn">
              <button>Shop Now</button>
            </div>
          </div>
        </div>
        <div className="section2-right">
          <div className="section2-right-container">
            <img className="section2-right-girl1" src={girl1} alt="girl-1" />
            <img className="section2-right-girl2" src={girl2} alt="girl-2" />
            <img className="section2-right-girl3" src={girl3} alt="girl-3" />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section2;
