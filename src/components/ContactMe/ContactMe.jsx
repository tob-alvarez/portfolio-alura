import "./ContactMe.css";

const ContactMe = () => {
  return (
    <>
      <form
        id="Contact"
        className="container1 d-flex flex-column contenedor-contact mt-5"
      >
        <p className="tituloContact">Contact Me</p>
        <label>Nombre</label>
        <input
          required
          className="inputContacto mt-1 mb-1"
          type="text"
          placeholder="Ej: Tobias"
        />
        <label>E-mail</label>
        <input
          required
          className="inputContacto mt-1 mb-1"
          type="mail"
          placeholder="texto@texto.com"
        />
        <label>Asunto</label>
        <input
          required
          className="inputContacto mt-1 mb-1"
          type="text"
          placeholder="Ej: Trabajo"
        />
        <label>Mensaje</label>
        <input
          required
          className="inputContacto mt-1 mb-1"
          type="text"
          placeholder="Mensaje..."
        />
        <button type="submit" className="botonEnviarForm mt-2">
          Enviar
        </button>
        <p className="mt-3">hola</p>
      </form>
    </>
  );
};

export default ContactMe;
