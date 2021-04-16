import React from "react";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <div className="link-wrapper">
            <span className="inner-wrapper wrapper-15">
              <a className="nav-link link hover-15" href="#contact">
                Contact
              </a>
            </span>
          </div>
        </li>
        <li>
          <div className="link-wrapper">
            <span className="inner-wrapper wrapper-15">
              <a className="nav-link link hover-15" href="#works">
                Projects
              </a>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
