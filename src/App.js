import "./App.scss";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";
import { FaArrowAltCircleUp } from "react-icons/fa";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Contact />
      <a className="go-page-start" href="#">
        <FaArrowAltCircleUp />
      </a>
    </div>
  );
};
export default App;
