import { useContext } from "react";
import "./ContactMe.css";
import { Contexto } from "../../context/Contexto";

const ContactMe = () => {
  const { dark } = useContext(Contexto);

  return (
    <>
      <form
        id="Contact"
        className="container-fluid d-flex flex-column align-items-center justify-content-center container1"
        style={
          dark
            ? { backgroundColor: "#202020", height: "100vh" }
            : { backgroundColor: "#f2f2f2", height: "100vh" }
        }
      >
        <p className="tituloContact nombreHome">Contact Me</p>
        <div className="d-flex flex-column">
          <label>Name</label>
          <input
            required
            className="inputContacto mt-1 mb-1"
            type="text"
            placeholder="Ej: Tobias"
          />
        </div>
        <div className="d-flex flex-column">
          <label>E-mail</label>
          <input
            required
            className="inputContacto mt-1 mb-1"
            type="mail"
            placeholder="text@text.com"
          />
        </div>
        <div className="d-flex flex-column">
          <label>Topic</label>
          <input
            required
            className="inputContacto mt-1 mb-1"
            type="text"
            placeholder="Ej: Work"
          />
        </div>
        <div className="d-flex flex-column">
          <label>Message</label>
          <textarea
            required
            className="inputContacto textarea-input mt-1 mb-1"
            type="text"
            placeholder="Put your message here..."
          />
        </div>
        <button type="submit" className="botonEnviarForm mt-2">
          Enviar
        </button>
      </form>
    </>
  );
};

export default ContactMe;
