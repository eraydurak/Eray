import React from "react";
import "./Contact.scss";
import { GrTwitter } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <h3>Contact Me</h3>
      <div className="contact-list">
        <a
          target="_blank"
          className="link-icon"
          href="https://twitter.com/eraydurakk"
        >
          <GrTwitter className="icon-icon" /> <span>Twitter</span>
        </a>
        <a
          target="_blank"
          className="link-icon"
          href="https://github.com/eraydurak"
        >
          <VscGithub className="icon-icon" />
          <span>GitHub</span>
        </a>
        <a
          target="_blank"
          className="link-icon"
          href="https://www.linkedin.com/in/eraydurak/"
        >
          <SiLinkedin className="icon-icon" />
          <span>Linkedin</span>
        </a>
        <a
          target="_blank"
          className="link-icon"
          href="mailto:eraydurak1@outlook.com"
        >
          <FaMailBulk className="icon-icon" />
          <span>Mail</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
