import "./SobreMi.css";
import Typewriter from "typewriter-effect";

const SobreMi = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center"
      style={{ backgroundColor: "#141414", height: "100vh" }}
    >
      <div className="d-flex w-100">
        <div className="p-5 infoHome">
          <Typewriter
            options={{
              strings: [
                "<span class='nombreHome'>I am Tobias, Frontend Developer</span>",
                "<span class='nombreHome'>Let's build something great !</span>",
              ],
              autoStart: true,
              loop: true,
            }}
          />
          <p>
            Apasionado de la tecnología y amante de la creatividad, destaco por
            mis habilidades blandas excepcionales en comunicación, colaboración
            y liderazgo. Mi pasión por crear aplicaciones es el motor que
            impulsa mi búsqueda constante de soluciones innovadoras y
            experiencias únicas.
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
      </div>
    </div>
  );
};

export default SobreMi;
