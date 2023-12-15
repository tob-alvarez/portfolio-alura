/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import "./SobreMi.css";
import { Contexto } from "../../context/Contexto";

const SobreMi = () => {
  const { dark } = useContext(Contexto);

  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={
        dark
          ? { backgroundColor: "#202020", height: "100vh" }
          : { backgroundColor: "#f2f2f2", height: "100vh" }
      }
    >
      <div className="d-flex w-100">
        <div className="infoHome d-flex justify-content-center align-items-center">
          <h2 className="nombreHome1 pb-3">
            I am Tobias, Frontend Developer <br />
            Let's build something great !
          </h2>
          <p>
            "Passionate about technology and a lover of creativity, I stand out
            for my exceptional soft skills in communication, collaboration, and
            leadership. My passion for creating applications is the driving
            force behind my constant pursuit of innovative solutions and unique
            experiences."
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
