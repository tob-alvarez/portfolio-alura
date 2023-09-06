import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Layout.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBrain, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ButtonToggle from "../ButtonToggle/ButtonToggle";

const Layout = ({ children }) => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

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
      <div className="contenedorMenu layoutHeight">
        {windowsWidth <= 768 ? (
          <ButtonToggle></ButtonToggle>
        ) : (
          <div className=" d-flex flex-column justify-content-around align-items-center contenedorLayout">
            <h1>TOB DEVELOPER</h1>
            <div className="linksLayout">
              <Link className="cajaLink" to="/">
                <FontAwesomeIcon icon={faUser} />
                <p>About</p>
              </Link>
              <Link className="cajaLink" to="/projects">
                <FontAwesomeIcon icon={faBriefcase} />
                <p>Projects</p>
              </Link>
              <Link className="cajaLink" to="skills">
                <FontAwesomeIcon icon={faBrain} />
                <p>Skills</p>
              </Link>
              <Link className="cajaLink" to="contact">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>Contact</p>
              </Link>
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
