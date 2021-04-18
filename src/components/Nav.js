import React, { useState, useEffect } from "react";
import "./Nav.scss";

const Nav = ({ contactVisibleHandler }) => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <div className="link-wrapper link-wrapper-contact">
            <span className="inner-wrapper wrapper-15 inner-wrapper-contact wrapper-15-contact ">
              <a onClick={contactVisibleHandler} className="contact-link nav-link link hover-15" href="#">
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
    </div >
  );
};

export default Nav;
