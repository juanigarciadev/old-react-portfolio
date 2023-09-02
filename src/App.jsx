import "./App.css";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import Contact from "./components/Contact/Contact";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <NavbarContainer />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
