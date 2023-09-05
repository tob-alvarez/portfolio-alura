import "./Proyectos.css";
import fotoChallenge1 from "../../assets/Captura-C1.png";
import fotoChallenge2 from "../../assets/alurageek.png";
import fotoChallenge3 from "../../assets/Captura de pantalla 2023-08-28 185559.png";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Proyectos = () => {
  const [proyectoAbierto, setProyectoAbierto] = useState(null);

  const contenedorRef = useRef(null);

  useEffect(() => {
    // Agregar un manejador de eventos de clic al documento para cerrar el proyecto cuando se haga clic fuera de él.
    const handleClickOutside = (event) => {
      if (
        contenedorRef.current &&
        !contenedorRef.current.contains(event.target)
      ) {
        setProyectoAbierto(null);
      }
    };

    // Agregar el manejador de eventos de clic cuando se monta el componente.
    document.addEventListener("mousedown", handleClickOutside);

    // Eliminar el manejador de eventos de clic cuando se desmonta el componente.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const toggleProyecto = (proyecto) => {
    if (proyecto === proyectoAbierto) {
      setProyectoAbierto(null);
    } else {
      setProyectoAbierto(proyecto);
    }
  };

  const estaAbierto = (nombreProyecto) => proyectoAbierto === nombreProyecto;

  return (
    <section
      className="container-fluid d-flex flex-column align-items-center justify-content-center container1"
      style={{ backgroundColor: "#141414", minHeight: "100vh" }}
    >
      <div className="d-flex justify-content-around w-100">
        <div
          className="contenedorProyecto d-flex justify-content-around gap-5"
          ref={contenedorRef}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            onClick={() => toggleProyecto("proyecto1")}
            animate={
              estaAbierto("proyecto1")
                ? {
                    scale: 2,
                    translateX: 100,
                    translateY: 150,
                    zIndex: 1,
                  }
                : { scale: 1 }
            }
          >
            <img
              src={fotoChallenge1}
              alt="foto challenge alura #1"
              className="foto-challenge-1 proyecto"
            />
            {estaAbierto("proyecto1") ? (
              <span className="spanProyecto1">
                <h4>Encriptador de Texto</h4>
                <button className="botonSpan">
                  <a href="">Demo</a>
                </button>
                <button className="botonSpan">
                  <a href="">Repository</a>
                </button>
              </span>
            ) : (
              <></>
            )}
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            onClick={() => toggleProyecto("proyecto2")}
            animate={
              estaAbierto("proyecto2")
                ? {
                    scale: 2,
                    translateX: -450,
                    translateY: 150,
                    zIndex: 1,
                  }
                : { scale: 1 }
            }
          >
            {estaAbierto("proyecto2") ? (
              <span className="spanProyecto1">
                <h4>Alura Geek</h4>
                <button className="botonSpan">
                  <a href="">Demo</a>
                </button>
                <button className="botonSpan">
                  <a href="">Repository</a>
                </button>
              </span>
            ) : (
              <></>
            )}
            <img
              src={fotoChallenge2}
              alt="foto challenge alura #2"
              className="foto-challenge-1"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            onClick={() => toggleProyecto("proyecto3")}
            animate={
              estaAbierto("proyecto3")
                ? {
                    scale: 2,
                    translateX: 100,
                    translateY: -150,
                    zIndex: 1,
                  }
                : { scale: 1 }
            }
          >
            {estaAbierto("proyecto3") ? (
              <span className="spanProyecto1">
                <h4>Tobflix</h4>
                <button className="botonSpan">
                  <a href="">Demo</a>
                </button>
                <button className="botonSpan">
                  <a href="">Repository</a>
                </button>
              </span>
            ) : (
              <></>
            )}
            <img
              src={fotoChallenge3}
              alt="foto challenge alura #3"
              className="foto-challenge-1"
            />
          </motion.div>
          <motion.div
            initial={{ scale: 0.8 }}
            transition={{ duration: 1 }}
            onClick={() => toggleProyecto("proyecto4")}
            animate={
              estaAbierto("proyecto4")
                ? {
                    scale: 2,
                    translateX: -450,
                    translateY: -150,
                    zIndex: 1,
                  }
                : { scale: 1 }
            }
          >
            {estaAbierto("proyecto4") ? (
              <span className="spanProyecto1">
                <h4>Sistema COM</h4>
                <button className="botonSpan">
                  <a href="">Demo</a>
                </button>
                <button className="botonSpan">
                  <a href="">Repository</a>
                </button>
              </span>
            ) : (
              <></>
            )}
            <img
              src={fotoChallenge1}
              alt="foto challenge alura #1"
              className="foto-challenge-1"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
