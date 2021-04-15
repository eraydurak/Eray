import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a className="contact" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a href="#works">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
