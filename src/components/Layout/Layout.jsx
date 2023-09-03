import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Layout.css";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import { faBrain, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center layoutHeight p-1">
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
        <div className="children">{children}</div>
      </div>
    </>
  );
};

export default Layout;
