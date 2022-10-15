import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterStep2.css";

const RegisterStep2 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="registerstep-2-div">
      <div className="rectangle-div40" />
      <img className="rectangle-icon" alt="" src="../rectangle@2x.png" />
      <div className="register-div">Register</div>
      <input
        className="component-input"
        type="text"
        placeholder="Username"
        minLength={5}
        required
      />
      <button className="button4" onClick={onButtonClick}>
        <div className="rectangle-div41" />
        <div className="log-in-div4">Sign up</div>
      </button>
      <div className="policy-div">
        {`By signing up, you agree to Baby Got Rash’s `}
        <span className="terms-of-service">Terms of Service</span>
        {` and  `}
        <span className="terms-of-service">Privacy Policy.</span>
      </div>
      <div className="logo-div8">
        <div className="baby-got-rash8">Bumpkin baby</div>
        <img className="group-icon8" alt="" src="../group8.svg" />
      </div>
    </div>
  );
};

export default RegisterStep2;
