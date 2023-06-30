import "./HeaderStyle.css";
import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="box-header">
      <div className="d-flex gap-3">
        <img src={logo} alt="" />
        <h2>Tobias Alvarez</h2>
      </div>
      <ul className="lista-links">
        <li>
          <a href="#">Sobre mi</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Hobbies</a>
        </li>
        <li>
          <a href="#">Formacion</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <a href="" className="mail">
          <strong>tosal1099@gmail.com</strong>
        </a>
      </ul>
    </div>
  );
};

export default Header;
