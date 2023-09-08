import ContactMe from "./components/ContactMe/ContactMe";
import Layout from "./components/Layout/Layout";
import Proyectos from "./components/Proyectos/Proyectos";
import Skills from "./components/Skills/Skills";
import SobreMi from "./components/SobreMi/SobreMi";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProviderContexto from "./context/Contexto";

const App = () => {
  return (
    <Router>
      <ProviderContexto>
        <Layout>
          <Routes>
            <Route path="/" element={<SobreMi></SobreMi>}></Route>
            <Route path="/projects" element={<Proyectos />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<ContactMe />}></Route>
          </Routes>
        </Layout>
      </ProviderContexto>
    </Router>
  );
};

export default App;
