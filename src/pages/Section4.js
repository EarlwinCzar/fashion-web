import React, { useState, useEffect } from "react";
import "../styles/pagesstyles/section4.css";
import section4bg from "../assets/section4bg.png";
import section4dots from "../assets/section4dots.png";
import section4model from "../assets/section4model.png";
import section4rec from "../assets/section4rec.png";

function Section4() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7); // Set deadline to 6 days from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const distance = deadline - now;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds, expired: false };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <section className="section4 container section">
      <article className="section4-container">
        <div className="section4-left">
          <div className="section4-left-container">
            <img className="section4-model" src={section4model} alt="Model" />
            <img className="section4-dots" src={section4dots} alt="Dots" />
            <img className="section4-rec" src={section4rec} alt="Rec" />
          </div>
        </div>
        <div className="section4-right">
          <div className="section4-right-container">
            <p className="section4-right-header">Exclusive Offer!</p>
            <p className="section4-right-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod tempor incididunt ut labore et dolore
              <br /> magna aliqua.
            </p>
            {timeLeft.expired ? (
              <p>Offer has expired</p>
            ) : (
              <>
                <div className="section4-right-date-container">
                  <div className="section4-right-date">
                    <p className="section4-right-date-p">{timeLeft.days}</p>
                    <p className="section4-right-date-d">Days</p>
                  </div>
                  <div className="section4-right-date">
                    <p className="section4-right-date-p">{timeLeft.hours}</p>
                    <p className="section4-right-date-d">Hours</p>
                  </div>
                  <div className="section4-right-date">
                    <p className="section4-right-date-p">{timeLeft.minutes}</p>
                    <p className="section4-right-date-d">Minutes</p>
                  </div>
                  <div className="section4-right-date">
                    <p className="section4-right-date-p">{timeLeft.seconds}</p>
                    <p className="section4-right-date-d">Seconds</p>
                  </div>
                </div>

                <div className="section4-right-button">
                  <button>BUY NOW</button>
                </div>
              </>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}

export default Section4;
