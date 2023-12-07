import "./Proyectos.css";
import fotoChallenge1 from "../../assets/encriptador.png";
import fotoChallenge2 from "../../assets/alurageek.png";
import fotoChallenge3 from "../../assets/toblfix.webp";
import fotoChallenge4 from "../../assets/sisCom.webp";
import fotoChallenge5 from "../../assets/xgames.png";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

const Proyectos = () => {
  const { dark } = useContext(Contexto);

  return (
    <section
      className="container-fluid d-flex flex-column align-items-center justify-content-center container1"
      style={
        dark
          ? { backgroundColor: "#202020", height: "100vh" }
          : { backgroundColor: "#f2f2f2", height: "100vh" }
      }
    >
      <h2 className="text-center pb-4 nombreHome">Projects</h2>
      <div className="d-flex flex-column justify-content-around w-100">
        <div className="row w-100 ps-2 d-flex justify-content-center">
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge4} alt="" className="fotoChallenge" />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge3} alt="" />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge2} alt="" />
            </div>
          </div>
        </div>
        <div className="row w-100 ps-2 mt-5 d-flex justify-content-center">
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge3} alt="" />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge5} alt="" />
            </div>
          </div>
          <div className="col-3">
            <div className="card">
              <img src={fotoChallenge1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
