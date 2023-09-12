import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Biography from "./components/Bio/Biography";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/biography" element={<Biography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
