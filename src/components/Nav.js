import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#works">Projects</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
