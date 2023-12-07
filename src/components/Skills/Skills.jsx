import "./Skills.css";
import htmlLogo from "../../assets/html.png";
import reactLogo from "../../assets/react.png";
import nodeLogo from "../../assets/nodejs.png";
import cssLogo from "../../assets/css.png";
import jsLogo from "../../assets/js.png";
import gitLogo from "../../assets/git.png";
import mongoLogo from "../../assets/mongo.png";
import { useContext } from "react";
import { Contexto } from "../../context/Contexto";

const Skills = () => {
  const { dark } = useContext(Contexto);

  return (
    <div
      style={
        dark
          ? { backgroundColor: "#202020", height: "100vh" }
          : { backgroundColor: "#f2f2f2", height: "100vh" }
      }
      className="container1 contenedorSkills d-flex justify-content-center flex-column align-items-center"
    >
      <h2 className="mb-5 nombreHome">Skills</h2>
      <div className="d-flex">
        <div className="d-flex gap-3 justify-content-center">
          <div className="d-flex justify-content-around skillsIconos">
            <img className="logoSkill" src={htmlLogo} alt="" />
            <img className="logoSkill" src={cssLogo} alt="" />
            <img className="logoSkill" src={jsLogo} alt="" />
            <img className="logoSkill" src={nodeLogo} alt="" />
            <img className="logoSkill" src={reactLogo} alt="" />
            <img className="logoSkill" src={gitLogo} alt="" />
            <img className="logoSkill" src={mongoLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
