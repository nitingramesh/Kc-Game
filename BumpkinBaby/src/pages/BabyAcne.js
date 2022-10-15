import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BabyAcne.css";

const BabyAcne = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="baby-acne-div">
      <div className="line-div4" />
      <button className="home-nav-button4" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div19" />
        <img className="vector-icon4" alt="" src="../vector.svg" />
        <div className="home-div4">Home</div>
      </button>
      <button className="scanner-nav-button4">
        <button className="rectangle-button" onClick={onRectangleButtonClick} />
        <img className="scan-w-icon4" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div4">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button4"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div19" />
        <img className="chat-b-icon3" alt="" src="../chat-w@2x.png" />
        <b className="chat-room-b3">Play Game</b>
      </button>
      <button className="profile-nav-button4" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div19" />
        <img className="profile-w-icon3" alt="" src="../profile-w@2x.png" />
        <div className="profile-div4">Profile</div>
      </button>
      <div className="acne-carousel-div1">
        <div className="component-1-div">
          <img
            className="acne2-img-1-icon"
            alt=""
            src="../acne2-img-1@2x.png"
          />
          <img
            className="baby-acne-1-icon"
            alt=""
            src="../acne2-img-1@2x.png"
          />
          <img
            className="acne3-img-1-icon"
            alt=""
            src="../acne3-img-1@2x.png"
          />
        </div>
      </div>
      <div className="baby-acne-div1">Baby acne</div>
      <div className="cause-the-cause-is-unknown-it">
        <p className="the-cause-is-unknown-it-typic">
          <b>Cause</b>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>
            The cause is unknown. It typically clears up on its own in about 3
            to 4 months without leaving marks.
          </span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>&nbsp;</span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <b>Treatment</b>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>
            To treat baby acne, don’t use any of the over-the-counter acne
            products you’d use on yourself. These can damage your baby’s
            delicate skin.
          </span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>&nbsp;</span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>Regular home care should be enough to treat baby acne:</span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span></span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>
            Wash your baby’s face daily with warm water. You may also try a
            gentle, unscented soap.
          </span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>Do not scrub hard or pinch irritated areas.</span>
        </p>
        <p className="the-cause-is-unknown-it-typic">
          <span>Avoid lotions and oily face products.</span>
        </p>
        <p className="if-youre-concerned-that-your">
          <span>
            If you’re concerned that your baby’s acne isn’t going away, their
            doctor can recommend or prescribe safe treatments.
          </span>
        </p>
      </div>
      <button className="button3">
        <div className="rectangle-div22" />
        <div className="log-in-div3">Play game</div>
      </button>
      <div className="logo-div4">
        <div className="baby-got-rash4">Bumpkin baby</div>
        <img className="group-icon4" alt="" src="../group4.svg" />
      </div>
    </div>
  );
};

export default BabyAcne;
