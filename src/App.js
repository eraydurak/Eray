import { useState } from 'react'
import "./App.scss";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const App = () => {
  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
    localStorage.setItem(isActive, 'theme selection')
  }
  return (
    <div className={isActive ? "App" : "lightApp"}>
      < Nav />
      <MainContent />
      <Contact />
      <a className="go-page-start" href="#">
        <FaArrowAltCircleUp className="go-start-icon" />
      </a>
      <button className="toggleBtn" onClick={handleToggle} >
        <FiSun className="sun" />
        <FaMoon className="crescent" />
      </button>
    </div >
  );
};
export default App;
