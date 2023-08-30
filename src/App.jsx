import "./App.css";
import { Accordion, AccordionItem } from "@nextui-org/react";
import HeroContainer from "./components/Certificates/CertificatesContainer";
import CertificatesContainer from "./components/Certificates/CertificatesContainer";
import HomeContainer from "./components/Home/HomeContainer";

function App() {
  return (
    <>
      <HomeContainer />
      <CertificatesContainer />
    </>
  );
}

export default App;
