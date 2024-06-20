import React from "react";

import "../styles/componentsstyles/header.css";

function Header() {
  return (
    <nav className="header-nav container">
      <div className="header-nav-container">
        <p>FS.</p>
        <ul className="header-nav-menu">
          <li>Home</li>
          <li>Shop</li>
          <li>Feature</li>
          <li>Contact</li>
        </ul>
        <ul className="header-nav-btns">
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
            <button>LOGIN</button>
          </li>
        </ul>
      </div>
      <div className="header-nav-bar-container">
        <button className="header-nav-bar">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
}

export default Header;
