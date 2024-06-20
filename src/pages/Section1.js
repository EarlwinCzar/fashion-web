import React from "react";
import "../styles/pagesstyles/section1.css";
import section1dots from "../assets/section1dots.png";
import section1dots2 from "../assets/section1dots2.png";
import section1model from "../assets/section1model.png";
import section1rec from "../assets/section1rec.png";
import section1whiterec from "../assets/section1whiterec.png";
import section1whiterec2 from "../assets/section1whiterec2.png";

function Section1() {
  return (
    <section className="section1 container section">
      <article className="section1-container">
        <div className="section1-left">
          <div className="section1-left-container">
            <h1>
              Choose Perfect
              <br /> Fashion For You
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              doeiusmod
              <br /> tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="section1-left-footer">
              <button>Explore Now</button>
              <div className="section1-left-footer-chars">
                <i class="fa-regular fa-circle-play"></i>
                <i class="fa-solid fa-minus"></i>
              </div>

              <p>Live Demo...</p>
            </div>
          </div>
        </div>
        <div className="section1-right">
          <div className="section1-right-container">
            <img className="section1model" src={section1model} />
            <img className="section1rec" src={section1rec} />
            <img className="section1dots" src={section1dots} />
            <img className="section1whiterec" src={section1whiterec} />
            <img className="section1dots2" src={section1dots2} />
            <img className="section1whiterec2" src={section1whiterec2} />
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section1;
