import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DroolRash.css";

const DroolRash = () => {
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

  return (
    <div className="drool-rash-div">
      <div className="line-div2" />
      <button className="home-nav-button2" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div9" />
        <img className="vector-icon2" alt="" src="../vector.svg" />
        <div className="home-div2">Home</div>
      </button>
      <button className="scanner-nav-button2" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div9" />
        <img className="scan-w-icon2" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div2">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button2"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div9" />
        <img className="chat-b-icon1" alt="" src="../chat-w@2x.png" />
        <b className="chat-room-b1">Play Game</b>
      </button>
      <button className="profile-nav-button2">
        <div className="rectangle-div9" />
        <img className="profile-w-icon1" alt="" src="../profile-w@2x.png" />
        <div className="profile-div2">Profile</div>
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
          <img className="acne3-img-1-icon" alt="" src="../drool.jpg" />
        </div>
      </div>
      <div className="cause-a-drool-rash-can-appear">
        <p className="a-drool-rash-can-appear-around">
          <b>Cause</b>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>
            A drool rash can appear around the mouth and cheeks, in the folds of
            your baby’s neck, and on your baby’s chest as a result of too much
            saliva causing wet skin.
          </span>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span></span>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>
            They can also have a chapped appearance. Drooling is the most likely
            culprit, but your baby may develop a drool rash if they use a
            pacifier that keeps the skin around the mouth wet or if there’s
            smeared food left on their face for too long.
          </span>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <b>Treatment</b>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>
            Twice daily, gently wash the afflicted areas with warm water, then
            pat dry. Don’t rub, which can be irritating to already sensitive
            skin.
          </span>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>
            Apply a thin coat of a healing ointment like Aquaphor or petroleum
            jelly, which will act as a barrier between your baby’s skin and the
            drool.
          </span>
          <b className="b">{` `}</b>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>
            At bath time, be sure to use a mild, unscented baby wash. Use a
            gentle, unscented lotion on your baby’s dry skin if necessary, but
            avoid using lotion on drool rashes.
          </span>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <b>&nbsp;</b>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <b>&nbsp;</b>
        </p>
        <p className="a-drool-rash-can-appear-around">
          <span>&nbsp;</span>
        </p>
        <p className="blank-line-p4">
          <span>&nbsp;</span>
        </p>
      </div>
      <button className="button1">
        <div className="rectangle-div13" />
        <div className="log-in-div1">Play game</div>
      </button>
      <div className="drool-rash-div1">Drool rash</div>
      <div className="logo-div2">
        <div className="baby-got-rash2">Bumpkin baby</div>
        <img className="group-icon2" alt="" src="../group2.svg" />
      </div>
    </div>
  );
};

export default DroolRash;
