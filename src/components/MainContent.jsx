import React from "react";
import "./Main.scss";
import { GoMarkGithub, GoStar } from "react-icons/go";
import { GoArrowSmallRight } from "react-icons/go";
import { GiCardPickup } from "react-icons/gi";
import { GiWesternHat } from "react-icons/gi";
import { WiCloudy } from "react-icons/wi";
import { AiFillCalculator } from "react-icons/ai";
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

const MainContent = () => {
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
          Currently improving Typescript.
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
              src={weatherapp}
              alt="memory-card-game"
            />
            <div className="itemPara">
              <h2>
                3-Day WeatherCast App with React {""}
                <WiCloudy />
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                iusto delectus tenetur deleniti dolorem quis illum recusandae
                reiciendis, sint ab?
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
              <h2>
                Memory Card Game with React.Js {""}
                <GiCardPickup />
              </h2>
              <br />
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                iusto delectus tenetur deleniti dolorem quis illum recusandae
                reiciendis, sint ab?
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
              <h2>
                Kanye West Quote Generator {""}
                <GiWesternHat />
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                iusto delectus tenetur deleniti dolorem quis illum recusandae
                reiciendis, sint ab?
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
              <h2>
                Calculator with ReactJS {""}
                <AiFillCalculator />
              </h2>
              <br />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                iusto delectus tenetur deleniti dolorem quis illum recusandae
                reiciendis, sint ab?
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
