import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Biography from "./components/Bio/Biography";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Todotech from "./projects/Todotech";
import BeyondImagination from "./projects/BeyondImagination";
import Zolution from "./projects/Zolution";
import MyPortfolio from "./projects/MyPortfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Projects />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/work/todotech" element={<Todotech />} />
          <Route
            path="/work/beyond-imagination"
            element={<BeyondImagination />}
          />
          <Route path="/work/zolution" element={<Zolution />} />
          <Route path="/work/my-portfolio" element={<MyPortfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
