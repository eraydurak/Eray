import { useState } from 'react'
import "./App.scss";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import { FaArrowAltCircleUp } from "react-icons/fa";

const App = () => {
  const [isActive, setActive] = useState('false');
  const handleToggle = () => {
    setActive(!isActive);
  }
  return (
    <div className={isActive ? "App" : "lightApp"}>
      < Nav />
      <MainContent />
      <Contact />
      <a className="go-page-start" href="#">
        <FaArrowAltCircleUp className="go-start-icon" />
      </a>
      <button className="toggleBtn" onClick={handleToggle} >Switch Theme</button>
    </div >
  );
};
export default App;
