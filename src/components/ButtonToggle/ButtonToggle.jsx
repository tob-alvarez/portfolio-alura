import {
  faBars,
  faBrain,
  faBriefcase,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonToggle.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";
import { Contexto } from "../../context/Contexto";

const ButtonToggle = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { dark, setDark } = useContext(Contexto);
  const handleClick = () => {
    setMenuAbierto(!menuAbierto);
  };
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };
  const handleDark = () => {
    setDark(!dark);
  };

  return (
    <>
      <button className="boton-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuAbierto ? (
        <motion.div
          style={
            dark
              ? { backgroundColor: "#141414", height: "100vh" }
              : { backgroundColor: "#f4f4f4", height: "100vh" }
          }
          className=" d-flex flex-column justify-content-center align-items-center menuToggle"
        >
          <h1>TOB DEVELOPER</h1>
          <div className="linksLayout m-4">
            <Link
              style={dark ? { color: "white" } : { color: "black" }}
              onClick={cerrarMenu}
              className="cajaLink"
              to="/"
            >
              <FontAwesomeIcon icon={faUser} />
              <p>About</p>
            </Link>
            <Link
              style={dark ? { color: "white" } : { color: "black" }}
              onClick={cerrarMenu}
              className="cajaLink"
              to="/projects"
            >
              <FontAwesomeIcon icon={faBriefcase} />
              <p>Projects</p>
            </Link>
            <Link
              style={dark ? { color: "white" } : { color: "black" }}
              onClick={cerrarMenu}
              className="cajaLink"
              to="skills"
            >
              <FontAwesomeIcon icon={faBrain} />
              <p>Skills</p>
            </Link>
            <Link
              style={dark ? { color: "white" } : { color: "black" }}
              onClick={cerrarMenu}
              className="cajaLink"
              to="contact"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Contact</p>
            </Link>
          </div>
          <div className="contTema mb-5">
            {dark ? (
              <FontAwesomeIcon
                className="iconoTema"
                onClick={handleDark}
                icon={faMoon}
              />
            ) : (
              <FontAwesomeIcon
                className="iconoTema"
                onClick={handleDark}
                icon={faSun}
              />
            )}
          </div>
          <footer className="text-center">
            © 2023 Tob Develop <br /> Created by Tobias Alvarez
          </footer>
        </motion.div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ButtonToggle;
