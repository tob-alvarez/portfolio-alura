import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Proyectos from "./components/Proyectos/Proyectos";
import Skills from "./components/Skills/Skills";
import SobreMi from "./components/SobreMi/SobreMi";
const App = () => {
  return (
    <>
      <Header></Header>
      <SobreMi></SobreMi>
      <Skills></Skills>
      <Proyectos />
      <ContactMe></ContactMe>
      <Footer></Footer>
    </>
  );
};

export default App;
