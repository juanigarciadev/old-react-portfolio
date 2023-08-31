import "./App.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import HeroContainer from "./components/Certificates/CertificatesContainer";
import CertificatesContainer from "./components/Certificates/CertificatesContainer";
import HomeContainer from "./components/Home/HomeContainer";
import ProjectsContainer from "./components/Projects/ProjectsContainer";

function App() {
  return (
    <>
      <HomeContainer />
      <ProjectsContainer />
      <CertificatesContainer />
    </>
  );
}

export default App;
