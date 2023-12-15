import "./Proyectos.css";
import fotoChallenge1 from "../../assets/encriptador.webp";
import fotoChallenge2 from "../../assets/alurageek.webp";
import fotoChallenge3 from "../../assets/toblfix.webp";
import fotoChallenge4 from "../../assets/sisCom.webp";
import fotoChallenge5 from "../../assets/xgames.webp";
import fotoChallenge6 from "../../assets/teloreservo.webp";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

const Proyectos = () => {
  const { dark } = useContext(Contexto);

  return (
    <section
      className=" d-flex flex-column align-items-center justify-content-center container1"
      style={
        dark ? { backgroundColor: "#202020" } : { backgroundColor: "#f2f2f2" }
      }
    >
      <h2 className="text-center nombreHome pb-2">Projects</h2>
      <div className="d-flex flex-column gap-2 align-items-center justify-content-center proyectos-container">
        <div className="row w-100 ps-2 d-flex justify-content-center gap-2">
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge4} alt="" className="fotoChallenge" />
            </div>
          </div>
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge3} alt="" className="fotoChallenge" />
            </div>
          </div>
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge2} alt="" className="fotoChallenge" />
            </div>
          </div>
        </div>
        <div className="row w-100 ps-2 d-flex justify-content-center gap-2">
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge6} alt="" className="fotoChallenge" />
            </div>
          </div>
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge5} alt="" className="fotoChallenge" />
            </div>
          </div>
          <div className="col-8 col-md-3">
            <div className="cardProyecto">
              <img src={fotoChallenge1} alt="" className="fotoChallenge" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
