import "./SobreMi.css";

const SobreMi = () => {
  return (
    <div className="container1 d-flex justify-content-between contenedorSobreMi">
      <div className="infoSobreMi">
        <h1>Hola soy Tobias, Frontend Developer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
          facilis quod, eaque adipisci omnis officiis asperiores voluptatum
          itaque aut accusantium consequatur mollitia labore, quibusdam
        </p>
        <div className="d-flex gap-4 links-social pt-4">
          <a href="https://github.com/tob-alvarez" target="blank">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tobias-alvarez99/"
            target="blank"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/tob.alvarez/?hl=es-la"
            target="blank"
          >
            Instagram
          </a>
          <a href="#">CV</a>
        </div>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/89598971?v=4"
        alt="Foto Perfil"
        className="fotoPerfil"
      />
    </div>
  );
};

export default SobreMi;
