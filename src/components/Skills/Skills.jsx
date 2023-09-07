import "./Skills.css";
import htmlLogo from "../../assets/html.svg";
import reactLogo from "../../assets/react.svg";
import nodeLogo from "../../assets/nodejs.svg";
import cssLogo from "../../assets/css.svg";
import jsLogo from "../../assets/js.svg";

const Skills = () => {
  return (
    <div className="container1 contenedorSkills d-flex justify-content-center flex-column align-items-center">
      <h2 className="mb-5">Skills</h2>
      <div className="d-flex gap-5 skillsIconos">
        <div>
          <img className="logoSkill" src={htmlLogo} alt="" />
        </div>
        <div>
          <img className="logoSkill" src={cssLogo} alt="" />
        </div>
        <div>
          <img className="logoSkill" src={jsLogo} alt="" />
        </div>
        <div>
          <img className="logoSkill" src={nodeLogo} alt="" />
        </div>
        <div>
          <img className="logoSkill" src={reactLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
