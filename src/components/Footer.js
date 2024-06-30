import React from "react";
import "../styles/componentsstyles/footer.css";

function Footer() {
  return (
    <footer className="footer container section">
      <div className="footer-container">
        <div className="footer-first">
          <p className="footer-first-icon">FS.</p>
          <p>Social Media</p>
          <div className="footer-socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="footer-second">
          <div className="footer-header">
            <p>Shop</p>
          </div>
          <ul>
            <li>Products</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
        </div>
        <div className="footer-second">
          <div className="footer-header">
            <p>Company</p>
          </div>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-fourth">
          <div className="footer-header">
            <p>Stay up to date</p>
          </div>
          <div>
            <input />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <ul>
          <li>Term</li>
          <li>Privacy</li>
          <li>Cookies</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
