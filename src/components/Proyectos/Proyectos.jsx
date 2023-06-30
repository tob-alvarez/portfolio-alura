import "./Proyectos.css";
import fotoChallenge1 from "../../assets/Captura-C1.png";

const Proyectos = () => {
  return (
    <div className="container1  d-flex justify-content-center mt-5 flex-column align-items-center">
      <h2 className="mb-5">Proyectos</h2>
      <div className="d-flex">
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
      </div>
    </div>
  );
};

export default Proyectos;
