import { useContext } from "react";
import "./SobreMi.css";
import Typewriter from "typewriter-effect";
import { Contexto } from "../../context/Contexto";

const SobreMi = () => {
  const { dark } = useContext(Contexto);

  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={
        dark
          ? { backgroundColor: "#141414", height: "100vh" }
          : { backgroundColor: "#f4f4f4", height: "100vh" }
      }
    >
      <div className="d-flex w-100">
        <div className="p-2 infoHome d-flex justify-content-center align-items-center">
          <Typewriter
            options={{
              strings: [
                "<span class='nombreHome'>I am Tobias, Frontend Developer</span>",
                "<span class='nombreHome'>Let's build something great !</span>",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            Apasionado de la tecnología y amante de la creatividad, destaco por
            mis habilidades blandas excepcionales en comunicación, colaboración
            y liderazgo. Mi pasión por crear aplicaciones es el motor que
            impulsa mi búsqueda constante de soluciones innovadoras y
            experiencias únicas.
          </p>
          <div className="d-flex gap-4 links-social pt-4">
            <a
              style={dark ? { color: "white" } : { color: "black" }}
              href="https://github.com/tob-alvarez"
              target="blank"
            >
              GitHub
            </a>
            <a
              style={dark ? { color: "white" } : { color: "black" }}
              href="https://www.linkedin.com/in/tobias-alvarez99/"
              target="blank"
            >
              Linkedin
            </a>
            <a style={dark ? { color: "white" } : { color: "black" }} href="#">
              CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
