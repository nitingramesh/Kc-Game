import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./HeatRash.css";

const HeatRash = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="heat-rash-div">
      <div className="line-div2" />
      <button className="home-nav-button2" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div9" />
        <img className="vector-icon2" alt="" src="../vector.svg" />
        <div className="home-div2">Home</div>
      </button>
      <button className="scanner-nav-button2" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div9" />
        <img className="scan-w-icon1" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div2">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button2"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div9" />
        <img className="chat-b-icon" alt="" src="../chat-b@2x.png" />
        <b className="chat-room-b">Play Game</b>
      </button>
      <button className="profile-nav-button2" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div9" />
        <img className="profile-w-icon1" alt="" src="../profile-w@2x.png" />
        <div className="profile-div2">Profile</div>
      </button>
      <div className="cause-heat-rash-happens-when-s">
        <p className="cause-p">
          <b>Cause</b>
        </p>
        <p className="cause-p">
          <span>
            Heat rash happens when sweat ducts in the skin are blocked and sweat
            gets trapped, creating fluid-filled bumps on the skin.
          </span>
        </p>
        <p className="cause-p">
          <b>&nbsp;</b>
        </p>
        <p className="cause-p">
          <b>Treatment</b>
        </p>
        <p className="cause-p">
          <span>
            You can cool the skin by removing extra layers of clothing or by
            moving to a cooled indoor space.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Gently dab a cool, wet cloth on the rash to relieve tenderness and
            bring down the skin temperature.
          </span>
        </p>
        <p className="cause-p">
          <span>
            You can smooth some over-the-counter (OTC) 1 percent hydrocortisone
            cream onto the bumpy area.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Since steroids can have side effects, discuss their use with your
            child’s doctor beforehand.
          </span>
        </p>
        <p className="cause-p">
          <span>
            Avoid hydrocortisone ointments that contain petroleum or mineral
            oil.
          </span>
        </p>
        <p className="cause-p">
          <span>
            If your child has a more severe type of heat rash, calamine lotion
            can help stop any itching.
          </span>
        </p>
      </div>
      <button className="button1">
        <div className="rectangle-div13" />
        <div className="log-in-div1">Play game</div>
      </button>
      <div className="heat-rash-div1">Heat Rash</div>
      <div className="logo-div2">
        <div className="baby-got-rash2">Bumpkin baby</div>
        <img className="group-icon2" alt="" src="../group2.svg" />
      </div>
    </div>
  );
};

export default HeatRash;
