import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Layout.css";
import {
  faEnvelope,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faBrain, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonToggle from "../ButtonToggle/ButtonToggle";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  const { dark, setDark } = useContext(Contexto);

  const handleDark = () => {
    setDark(!dark);
  };
  const updateWindowWidth = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);
    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);
  return (
    <>
      <div
        className={
          dark ? "contenedorMenu layoutHeight" : "contenedorMenu layoutHeight2"
        }
      >
        {windowsWidth <= 768 ? (
          <ButtonToggle></ButtonToggle>
        ) : (
          <div className=" d-flex flex-column justify-content-around align-items-center contenedorLayout">
            <div className="linksLayout">
              <Link className="cajaLink" to="/">
                <FontAwesomeIcon
                  style={dark ? { color: "white" } : { color: "black" }}
                  icon={faUser}
                />
                <p style={dark ? { color: "white" } : { color: "black" }}>
                  About
                </p>
              </Link>
              <Link className="cajaLink" to="/projects">
                <FontAwesomeIcon
                  style={dark ? { color: "white" } : { color: "black" }}
                  icon={faBriefcase}
                />
                <p style={dark ? { color: "white" } : { color: "black" }}>
                  Projects
                </p>
              </Link>
              <Link className="cajaLink" to="skills">
                <FontAwesomeIcon
                  style={dark ? { color: "white" } : { color: "black" }}
                  icon={faBrain}
                />
                <p style={dark ? { color: "white" } : { color: "black" }}>
                  Skills
                </p>
              </Link>
              <Link className="cajaLink" to="contact">
                <FontAwesomeIcon
                  style={dark ? { color: "white" } : { color: "black" }}
                  icon={faEnvelope}
                />
                <p style={dark ? { color: "white" } : { color: "black" }}>
                  Contact
                </p>
              </Link>
            </div>
            <div className="contTema">
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
          </div>
        )}
        <div className="children">{children}</div>
      </div>
    </>
  );
};

export default Layout;
