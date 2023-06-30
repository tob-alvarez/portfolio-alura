import Header from "./components/Header/Header";
import Proyectos from "./components/Proyectos/Proyectos";
import Skills from "./components/Skills/Skills";
import SobreMi from "./components/SobreMi/SobreMi";
const App = () => {
  return (
    <>
      <div className="container1">
        <Header></Header>
        <SobreMi></SobreMi>
        <Skills></Skills>
        <Proyectos />
      </div>
    </>
  );
};

export default App;
