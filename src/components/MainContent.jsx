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
// import mail from "./../img/mail.svg";
// import mail from "./Icons.jsx";

const MainContent = ({ isActive }) => {
  return (
    <div className="container">
      <div className="imgBox">
        <img className="myPic" src={me} alt="alt" />
      </div>
      <div className="contact-div">
        <a href="#">
          <svg
            className="contact-icon"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            width="25px"
            height="25px"
          >
            <path
              fill="#f4f4f4"
              d="m256 0c-140.699219 0-256 116.300781-256 257 0 139.882812 114.25 255 256 255 141.574219 0 256-114.945312 256-255 0-140.699219-115.300781-257-256-257zm45 477.5c-14.398438 3-29.699219 4.5-45 4.5s-30.601562-1.5-45-4.5v-70.199219c0-16.800781 4.5-22.800781 10.5-30.902343 3.054688-3.492188 4.898438-6.625 18.597656-27.296876l-23.097656-3.601562c-59.402344-8.699219-82.800781-39.601562-92.101562-63.601562-12-32.097657-5.699219-72.300782 15.902343-97.796876 3.300781-3.902343 6-10.503906 3.601563-17.402343-4.503906-13.800781-3.902344-35.699219-.902344-44.101563 15.90625 2.273438 32.261719 13.667969 45.902344 21.902344 6.285156 3.667969 9.582031 2.699219 12.597656 3 10.960938-2.28125 28.058594-7.800781 54.300781-7.800781 16.199219 0 33.300781 2.398437 50.101563 7.199219 3.003906-.070313 7.832031 2.484374 16.199218-2.398438 14.257813-8.6875 30.058594-19.691406 45.898438-21.902344 3 8.402344 3.601562 30.300782-.898438 44.101563-2.402343 6.898437.296876 13.5 3.601563 17.402343 21.597656 25.5 27.898437 65.699219 15.898437 97.796876-9.300781 24-32.699218 54.902343-92.101562 63.601562l-23.097656 3.601562c14.160156 21.367188 15.652344 23.929688 18.601562 27.296876 5.996094 8.101562 10.496094 14.101562 10.496094 30.902343zm30-8.699219v-61.5c0-17.101562-3.601562-28.5-8.402344-36.902343 45.601563-12.296876 78.003906-39.300782 92.402344-78 15.300781-40.796876 8.402344-89.398438-17.101562-123 4.503906-20.097657 4.503906-52.199219-6.296876-67.199219-4.800781-6.597657-11.402343-10.199219-19.800781-10.199219-.300781 0-.300781 0-.300781 0-23.261719 1.257812-41.570312 12.972656-61.199219 24.898438-18-4.800782-36.300781-7.199219-54.601562-7.199219-18.597657 0-37.199219 2.699219-53.695313 7.199219-20.664062-12.460938-38.796875-23.671876-62.703125-24.898438-7.5 0-14.101562 3.601562-18.902343 10.199219-10.796876 15-10.796876 47.101562-6.296876 67.199219-25.503906 33.601562-32.402343 82.5-17.101562 123 14.398438 38.699218 46.800781 65.703124 92.402344 78-3.722656 6.511718-6.667969 14.914062-7.828125 26.285156-9.210938 3.175781-17.199219 4.210937-24.628907 2.027344-7.835937-2.316407-13.941406-7.546876-19.246093-16.46875-11.914063-20.015626-32.207031-36.355469-55.3125-34.230469l2.636719 29.882812c10.699218-.980469 21.347656 10.339844 26.878906 19.671875 9.125 15.367188 21.417968 25.445313 36.546875 29.914063 11.230469 3.308593 21.496093 3.230469 32.550781.871093v40.449219c-87.300781-30.601562-151-114-151-211.800781 0-124.199219 101.800781-227 226-227s226 102.800781 226 227c0 97.800781-63.699219 181.199219-151 211.800781zm0 0"
            />
          </svg>
        </a>
        <a href="https://twitter.com/eraydurakk">
          <svg
            height="25px"
            viewBox="0 -46 512.00005 512"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f4f4f4"
              d="m508.6875 51.714844c-4.148438-5.15625-11.191406-6.984375-17.324219-4.496094-.976562.394531-1.941406.78125-2.898437 1.160156 3.855468-6.644531 7.015625-13.699218 9.511718-21.199218 1.878907-5.65625.234376-11.886719-4.191406-15.875-4.421875-3.992188-10.789062-4.984376-16.21875-2.53125-.070312.03125-.4375.203124-1.0625.515624-23.789062 11.933594-42.339844 18.933594-50.773437 20.578126-.589844-.515626-1.214844-1.066407-1.753907-1.546876-10.445312-9.257812-32.179687-28.320312-76.113281-28.320312-23.914062 0-58.136719 9.386719-82.464843 36.289062-19.191407 21.230469-28.753907 49.03125-28.53125 82.832032-70.300782-8.609375-127.949219-40.265625-175.8125-96.429688-3.328126-3.90625-8.425782-5.835937-13.511719-5.121094-5.082031.714844-9.445313 3.984376-11.566407 8.660157-6.480468 14.296875-14.957031 36.335937-13.785156 62.558593.773438 17.207032 5.558594 33.488282 14.292969 48.710938-8.9375-.453125-16.324219 6.996094-15.730469 15.972656 2.484375 37.53125 16.261719 66.585938 41.09375 86.855469-4.722656 3.789063-6.703125 10.042969-5.03125 15.855469 7.8125 27.109375 30.675782 56.5625 65.621094 70.679687-31.582031 15.929688-67.707031 22.617188-106.207031 19.445313-6.929688-.566406-13.355469 3.707031-15.5 10.328125-2.144531 6.621093.546875 13.847656 6.503906 17.453125 49.878906 30.199218 103.957031 45.507812 160.730469 45.507812 122.257812 0 193.183594-60.71875 231.152344-111.652344 46.84375-62.84375 63.464843-136.554687 63.464843-180.582031 0-5.769531-.171875-6.941406.003907-8.570312 5.832031-5.144531 21.929687-12.925781 46.785156-49.195313 3.746094-5.457031 3.464844-12.726562-.683594-17.882812zm-76.152344 70.890625c.023438 1.039062.050782 2.429687.050782 4.757812 0 39.4375-15.066407 105.695313-57.519532 162.652344-33.867187 45.429687-97.285156 99.585937-207.097656 99.585937-31.855469 0-62.796875-5.359374-92.496094-15.984374 34.800782-6.070313 66.882813-20.070313 94.726563-41.566407 4.964843-3.832031 7.023437-10.347656 5.15625-16.332031-1.863281-5.988281-7.253907-10.183594-13.515625-10.519531-29.949219-1.605469-53.585938-18.039063-66.75-37.527344 5.160156-.332031 11.304687-1.144531 20.453125-2.753906 6.816406-1.199219 11.925781-6.90625 12.367187-13.816407.441406-6.90625-3.898437-13.21875-10.507812-15.277343-34.382813-10.707031-54.824219-30.238281-62.964844-60.667969 5.375 1.378906 11.816406 2.457031 22.476562 3.792969 6.589844.832031 12.9375-2.777344 15.605469-8.863281 2.664063-6.082032 1.011719-13.195313-4.0625-17.480469-38.273437-32.308594-40.285156-65.273438-33.238281-91.875 52.714844 53.613281 117.59375 84.515625 196.542969 89.933593 9.289062.636719 16.878906-7.253906 15.949219-16.46875-3.351563-33.269531 3.355468-59.4375 19.941406-77.78125 17.761718-19.644531 43.535156-26.613281 60.210937-26.613281 32.554688 0 46.792969 12.617188 56.214844 20.96875 5.496094 4.871094 10.683594 9.472657 18.511719 9.472657 5.476562 0 12.558594-1.554688 20.390625-4.042969-2.777344 2.355469-5.746094 4.625-8.914063 6.8125-5.570312 3.851562-7.867187 10.957031-5.609375 17.339843 2.257813 6.382813 8.507813 10.464844 15.265625 9.957032 2.59375-.195313 5.214844-.464844 7.859375-.8125-10.394531 7.894531-19.457031 12.703125-19.046875 33.109375zm0 0"
            />
          </svg>
        </a>
        <a href="mailto: eraydurak1@outlook.com">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="25px"
            height="25px"
            viewBox="0 0 511.626 511.627"
            // style={{enableBackground:new 0 0 511.626 511.627}}
          >
            <g>
              <path
                fill="#f4f4f4"
                d="M498.208,68.235c-8.945-8.947-19.701-13.418-32.261-13.418H45.682c-12.562,0-23.318,4.471-32.264,13.418
		C4.471,77.18,0,87.935,0,100.499v310.633c0,12.566,4.471,23.312,13.418,32.257c8.945,8.953,19.701,13.422,32.264,13.422h420.266
		c12.56,0,23.315-4.469,32.261-13.422c8.949-8.945,13.418-19.697,13.418-32.257V100.499
		C511.626,87.935,507.158,77.18,498.208,68.235z M475.078,411.125c0,2.475-0.903,4.616-2.714,6.424
		c-1.81,1.81-3.949,2.706-6.42,2.706H45.679c-2.474,0-4.616-0.896-6.423-2.706c-1.809-1.808-2.712-3.949-2.712-6.424V191.858
		c6.09,6.852,12.657,13.134,19.7,18.843c51.012,39.209,91.553,71.374,121.627,96.5c9.707,8.186,17.607,14.561,23.697,19.13
		c6.09,4.571,14.322,9.185,24.694,13.846c10.373,4.668,20.129,6.991,29.265,6.991h0.287h0.284c9.134,0,18.894-2.323,29.263-6.991
		c10.376-4.661,18.613-9.274,24.701-13.846c6.089-4.569,13.99-10.944,23.698-19.13c30.074-25.126,70.61-57.291,121.624-96.5
		c7.043-5.708,13.613-11.991,19.694-18.843V411.125L475.078,411.125z M475.078,107.92v3.14c0,11.229-4.421,23.745-13.271,37.543
		c-8.851,13.798-18.419,24.792-28.691,32.974c-36.74,28.936-74.897,59.101-114.495,90.506c-1.14,0.951-4.474,3.757-9.996,8.418
		c-5.514,4.668-9.894,8.241-13.131,10.712c-3.241,2.478-7.471,5.475-12.703,8.993c-5.236,3.518-10.041,6.14-14.418,7.851
		c-4.377,1.707-8.47,2.562-12.275,2.562h-0.284h-0.287c-3.806,0-7.895-0.855-12.275-2.562c-4.377-1.711-9.185-4.333-14.417-7.851
		c-5.231-3.519-9.467-6.516-12.703-8.993c-3.234-2.471-7.614-6.044-13.132-10.712c-5.52-4.661-8.854-7.467-9.995-8.418
		c-39.589-31.406-77.75-61.57-114.487-90.506c-27.981-22.076-41.969-49.106-41.969-81.083c0-2.472,0.903-4.615,2.712-6.421
		c1.809-1.809,3.949-2.714,6.423-2.714h420.266c1.52,0.855,2.854,1.093,3.997,0.715c1.143-0.385,1.998,0.331,2.566,2.138
		c0.571,1.809,1.095,2.664,1.57,2.57c0.477-0.096,0.764,1.093,0.859,3.571c0.089,2.473,0.137,3.718,0.137,3.718V107.92
		L475.078,107.92z"
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/eraydurak/">
          <svg
            height="25px"
            viewBox="0 0 512 512"
            width="25px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#f4f4f4"
              d="m160.007812 423h-70v-226h70zm6.984376-298.003906c0-22.628906-18.359376-40.996094-40.976563-40.996094-22.703125 0-41.015625 18.367188-41.015625 40.996094 0 22.636718 18.3125 41.003906 41.015625 41.003906 22.617187 0 40.976563-18.367188 40.976563-41.003906zm255.007812 173.667968c0-60.667968-12.816406-105.664062-83.6875-105.664062-34.054688 0-56.914062 17.03125-66.246094 34.742188h-.066406v-30.742188h-68v226h68v-112.210938c0-29.386718 7.480469-57.855468 43.90625-57.855468 35.929688 0 37.09375 33.605468 37.09375 59.722656v110.34375h69zm90 153.335938v-392c0-33.085938-26.914062-60-60-60h-392c-33.085938 0-60 26.914062-60 60v392c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60zm-60-412c11.027344 0 20 8.972656 20 20v392c0 11.027344-8.972656 20-20 20h-392c-11.027344 0-20-8.972656-20-20v-392c0-11.027344 8.972656-20 20-20zm0 0"
            />
          </svg>
        </a>
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
