import React from "react";
import "./Main.scss";
import { GoMarkGithub } from "react-icons/go";
import { GiCardPickup } from "react-icons/gi";
import { GiWesternHat } from "react-icons/gi";
import { WiCloudy } from "react-icons/wi";
import { AiFillCalculator } from "react-icons/ai";
import { FaArrowCircleUp } from "react-icons/fa";
import {
  SiCss3,
  SiGit,
  SiJavascript,
  SiNpm,
  SiReact,
  SiRedux,
  SiSass,
  SiStackoverflow,
  SiWebpack,
} from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import calculator from "./../img/calculator.png";
import memorycard from "./../img/memorycard.png";
import quotegen from "./../img/quotegen.png";
import weatherapp from "./../img/weatherapp.png";
import me from "./../img/MyPicture.png";
import triwow from "./../img/triwow.png";

const MainContent = ({ isActive }) => {
  return (
    <div className="container">
      <div className="imgBox">
        <img className="myPic" src={me} alt="alt" />
      </div>
      <div className="paraDiv">
        <p className="headText">
          I am a self-taught Front-End Developer.While studying Metallurgical
          and Materials Engineering, I chose a different career path that led me
          to the JavaScript. <br />
          <br />
          <span>Technologies I use :</span> <br />
          <br />
          HTML5, CSS3, SASS, JavaScript(ES6), ReactJS, Redux, Webpack, NPM, Git,
          Bootstrap, Restful API, Fetch API, Redux-Thunk, CSS-in-JS. <br />
          <br />
          Currently working with Typescript.
        </p>
        <p className="headText">
          <br />
          <span>Specializing following areas :</span>
          <br />
          <br />
          • Functional and OO Programming in JavaScript
          <br /> • Teamwork and Cross-functional Communication
          <br /> • Entrepreneurship
          <br /> • Problem Solving in Complex Projects
        </p>
      </div>
      <div className="icon-div">
        <SiHtml5 className="icon" />
        <SiCss3 className="icon" />
        <SiJavascript className="icon" />
        <SiSass className="icon" />
        <SiReact className="icon" />
        <SiRedux className="icon" />
        <SiWebpack className="icon" />
        <SiNpm className="icon" />
        <SiGit className="icon" />
        <SiStackoverflow className="icon" />
      </div>
      <div id="works" className="works">
        <h3 className="headingThree">My Works</h3>
        <div className="wrapper">
          <div className="item">
            <img
              style={{ width: "150px", height: "150px" }}
              src={triwow}
              alt="triwow"
            />
            <div className="itemPara">
              <h2>Triwow {""}</h2>
              <br />
              <p className="lightModPara">
                Built a quiz game with ReactJs. Inspired by Trivia Crack mobile
                game and tried to adapt it to web browsers. Used
                https://opentdb.com/api_category.php for question APIs. We used
                many technologies in this project such as JavaScript, React,
                Redux, SASS, React-router-dom, Firebase(Firestore). We will
                create a database for questions/answers in the future.
              </p>
            </div>
            <ul>
              <li>
                <a target="_blank" href="https://github.com/eraydurak/triwow">
                  Source <GoMarkGithub class="github-icon" />
                </a>
                <a target="_blank" href="https://triwow.vercel.app/">
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <img
              style={{ width: "150px", height: "150px" }}
              src={weatherapp}
              alt="memory-card-game"
            />
            <div className="itemPara">
              <h2 className="lightModPara">
                3-Day WeatherCast App with React {""}
                <WiCloudy />
              </h2>
              <br />
              <p className="lightModPara">
                The project will show you 3-days weathercast. There is a input
                area that you can search for your city. Used axios to get
                weather apis. <br />
                Techs in this project : React, SASS, JavaScript, Fetch API
              </p>
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/eraydurak/react-weather-app"
                >
                  Source
                  <GoMarkGithub class="github-icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <img
              style={{ width: "150px", height: "150px" }}
              src={memorycard}
              alt="memory-card-game"
            />
            <div className="itemPara">
              <h2 className="lightModPara">
                Memory Card Game with React.Js {""}
                <GiCardPickup />
              </h2>
              <br />
              <p className="lightModPara">
                {" "}
                It is a memory card game. Choose 2 cards if they match then they
                stay open. Otherwise they return back to their first states
                which is close. <br />
                Techs in this project: React, JavaScript, SASS
              </p>
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/eraydurak/memory-card-game"
                >
                  Source <GoMarkGithub class="github-icon" />
                </a>
                <a
                  target="_blank"
                  href="https://kodluyoruz-3-project-1-30c6nc0o9-eraydurak.vercel.app/"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <img
              style={{ width: "150px", height: "150px" }}
              src={quotegen}
              alt="quotegenerator"
            />
            <div className="itemPara">
              <h2 className="lightModPara">
                Kanye West Quote Generator {""}
                <GiWesternHat />
              </h2>
              <br />
              <p className="lightModPara">
                This is my first try for fetching some API from certain
                websites. <br />
                It has HTML, CSS, Vanilla JavaScript in it. Not responsive yet.
              </p>
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/eraydurak/kanye-rest-quote-generator"
                >
                  Source <GoMarkGithub class="github-icon" />
                </a>
                <a
                  target="_blank"
                  href="https://kodluyoruz2odev-ggk6zs5c0-eraydurak.vercel.app/"
                >
                  Demo
                </a>
              </li>
            </ul>
          </div>
          <div className="item">
            <img
              style={{ width: "150px", height: "150px" }}
              src={calculator}
              alt="calculator"
            />
            <div className="itemPara">
              <h2 className="lightModPara">
                Calculator with ReactJS {""}
                <AiFillCalculator />
              </h2>
              <br />
              <p className="lightModPara">
                Simple calculator created with ReactJS. I did not use ant other
                library like math.js. All the functions and operations written
                by me. I used SASS and JavaScript mostly.
              </p>
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/eraydurak/kanye-rest-quote-generator"
                >
                  Source <GoMarkGithub class="github-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
