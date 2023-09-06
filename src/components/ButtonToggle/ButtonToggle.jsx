import {
  faBars,
  faBrain,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonToggle.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { motion } from "framer-motion";

const ButtonToggle = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleClick = () => {
    setMenuAbierto(!menuAbierto);
  };
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <>
      <button className="boton-toggle" onClick={handleClick}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {menuAbierto ? (
        <motion.div className=" d-flex flex-column justify-content-center align-items-center menuToggle">
          <h1>TOB DEVELOPER</h1>
          <div className="linksLayout m-4">
            <Link onClick={cerrarMenu} className="cajaLink" to="/">
              <FontAwesomeIcon icon={faUser} />
              <p>About</p>
            </Link>
            <Link onClick={cerrarMenu} className="cajaLink" to="/projects">
              <FontAwesomeIcon icon={faBriefcase} />
              <p>Projects</p>
            </Link>
            <Link onClick={cerrarMenu} className="cajaLink" to="skills">
              <FontAwesomeIcon icon={faBrain} />
              <p>Skills</p>
            </Link>
            <Link onClick={cerrarMenu} className="cajaLink" to="contact">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Contact</p>
            </Link>
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
