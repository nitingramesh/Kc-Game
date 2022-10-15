import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DiaperRash.css";

const DiaperRash = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="diaper-rash-div">
      <div className="line-div3" />
      <button className="home-nav-button3" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div14" />
        <img className="vector-icon3" alt="" src="../vector.svg" />
        <div className="home-div3">Home</div>
      </button>
      <button className="scanner-nav-button3" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div14" />
        <img className="scan-w-icon3" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div3">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button3"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div14" />
        <img className="chat-b-icon2" alt="" src="../chat-w@2x.png" />
        <b className="chat-room-b2">Play Game</b>
      </button>
      <button className="profile-nav-button3" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div14" />
        <img className="profile-w-icon2" alt="" src="../profile-w@2x.png" />
        <div className="profile-div3">Profile</div>
      </button>
      <div className="acne-carousel-div1">
        <div className="component-1-div">
          <img
            className="acne2-img-1-icon"
            alt=""
            src="../acne2-img-1@2x.png"
          />
          <img className="baby-acne-1-icon" alt="" src="../daiper.jpg" />
          <img className="acne3-img-1-icon" alt="" src="../daiper.jpg" />
        </div>
      </div>
      <div className="frame-div">
        <button className="button2">
          <div className="rectangle-div18" />
          <div className="log-in-div2">Play game</div>
        </button>
        <div className="cause-factors-that-can-make-di">
          <p className="factors-that-can-make-diaper-r">
            <b>Cause</b>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span> Factors that can make diaper rash more likely include:</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>diapers that are too tight</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>sensitive skin</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>irritated skin</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>antibiotics</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>introducing new foods</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>&nbsp;</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <b>Treatment</b>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>
              Keep your baby’s diaper dry and clean. When you change the diaper,
              clean the area gently with a soft cloth or a squirt of water from
              a bottle.
            </span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>Change diapers often.</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>Switch to disposable diapers.</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>{`Apply soothing creams - `}</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>Triple Paste</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>A+D</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>Balmex</span>
          </p>
          <p className="factors-that-can-make-diaper-r">
            <span>Desitin</span>
          </p>
          <p className="blank-line-p6">
            <span>&nbsp;</span>
          </p>
        </div>
        <div className="acne-carousel-div" />
        <div className="diaper-rash-div1">Diaper rash</div>
      </div>
      <div className="logo-div3">
        <div className="baby-got-rash3">Bumpkin baby</div>
        <img className="group-icon3" alt="" src="../group3.svg" />
      </div>
    </div>
  );
};

export default DiaperRash;
