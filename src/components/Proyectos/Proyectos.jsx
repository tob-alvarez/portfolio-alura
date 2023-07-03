import "./Proyectos.css";
import fotoChallenge1 from "../../assets/Captura-C1.png";

const Proyectos = () => {
  return (
    <div
      id="Proyectos"
      className="container1  d-flex justify-content-center mt-5 flex-column align-items-center"
    >
      <h2 className="mb-5">Proyectos</h2>
      <div className="d-flex flex-column">
        <div className="proyecto">
          <div className="d-flex gap-5">
            <img
              src={fotoChallenge1}
              alt="foto challenge alura #1"
              className="foto-challenge-1"
            />
            <div>
              <h3>Encriptador de Texto</h3>
              <p className="descripcion-challenge">Challenge #1 Alura</p>
              <div>
                <button className="boton-repo">
                  <a
                    href="https://github.com/tob-alvarez/encriptador-de-texto"
                    target="blank"
                  >
                    Repositorio
                  </a>
                </button>
                <button className="boton-demo">
                  <a
                    href="https://tob-alvarez.github.io/encriptador-de-texto/"
                    target="blank"
                  >
                    Ver Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="proyecto mt-5">
          <div className="d-flex gap-5">
            <img
              src={fotoChallenge1}
              alt="foto challenge alura #1"
              className="foto-challenge-1"
            />
            <div>
              <h3>Proyecto 2</h3>
              <p className="descripcion-challenge">Proyecto 2</p>
              <div>
                <button className="boton-repo">
                  <a href="#" target="blank">
                    Repositorio
                  </a>
                </button>
                <button className="boton-demo">
                  <a href="#" target="blank">
                    Ver Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="proyecto mt-5">
          <div className="d-flex gap-5">
            <img
              src={fotoChallenge1}
              alt="foto challenge alura #1"
              className="foto-challenge-1"
            />
            <div>
              <h3>Proyecto 3</h3>
              <p className="descripcion-challenge">Challenge #1 Alura</p>
              <div>
                <button className="boton-repo">
                  <a href="#" target="blank">
                    Repositorio
                  </a>
                </button>
                <button className="boton-demo">
                  <a href="#" target="blank">
                    Ver Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
