import "./App.scss";
import Nav from "./components/Nav";
import MainContent from "./components/MainContent";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Contact />
    </div>
  );
};
export default App;
