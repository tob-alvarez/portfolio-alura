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
            ? { backgroundColor: "#141414", height: "100vh" }
            : { backgroundColor: "#f4f4f4", height: "100vh" }
        }
      >
        <p className="tituloContact">Contact Me</p>
        <div className="d-flex flex-column">
          <label>Nombre</label>
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
            placeholder="texto@texto.com"
          />
        </div>
        <div className="d-flex flex-column">
          <label>Asunto</label>
          <input
            required
            className="inputContacto mt-1 mb-1"
            type="text"
            placeholder="Ej: Trabajo"
          />
        </div>
        <div className="d-flex flex-column">
          <label>Mensaje</label>
          <textarea
            required
            className="inputContacto textarea-input mt-1 mb-1"
            type="text"
            placeholder="Mensaje..."
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
