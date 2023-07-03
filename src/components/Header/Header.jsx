import "./HeaderStyle.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="box-header">
      <div className="d-flex gap-3 contenedorHeader">
        <img src={logo} alt="" />
        <h2>Tobias Alvarez</h2>
      </div>
      <ul className="lista-links">
        <li>
          <a href="#SobreMi">Sobre mi</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
        <li>
          <a href="#Proyectos">Proyectos</a>
        </li>
        <a href="#Contact" className="mail">
          <strong>tosal1099@gmail.com</strong>
        </a>
      </ul>
    </div>
  );
};

export default Header;
