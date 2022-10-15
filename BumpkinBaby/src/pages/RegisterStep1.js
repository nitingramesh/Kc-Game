import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterStep1.css";

const RegisterStep1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/registerstep2");
  }, [navigate]);

  return (
    <div className="registerstep-1-div">
      <div className="rectangle-div42" />
      <img className="rectangle-icon1" alt="" src="../rectangle@2x.png" />
      <div className="register-div1">Register</div>
      <input
        className="component-input1"
        type="text"
        placeholder="Username"
        minLength={5}
        required
      />
      <input
        className="component-input2"
        type="text"
        placeholder="Password"
        minLength={5}
        required
      />
      <button className="button5" onClick={onButtonClick}>
        <div className="rectangle-div43" />
        <div className="log-in-div5">Next</div>
      </button>
      <div className="logo-div9">
        <div className="baby-got-rash9">Bumpkin baby</div>
        <img className="group-icon9" alt="" src="../group9.svg" />
      </div>
    </div>
  );
};

export default RegisterStep1;
