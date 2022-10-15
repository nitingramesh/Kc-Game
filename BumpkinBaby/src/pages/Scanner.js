import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Scanner.css";

const Scanner = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onChatroomNavButtonClick = useCallback(() => {
    navigate("/chatroom");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/profile");
  }, [navigate]);

  return (
    <div className="scanner-div">
      <div className="line-div" />
      <button className="home-nav-button" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div" />
        <img className="vector-icon" alt="" src="../vector.svg" />
        <div className="home-div">Home</div>
      </button>
      <button className="scanner-nav-button">
        <div className="rectangle-div" />
        <img className="scan-b-icon" alt="" src="../scan-b@2x.png" />
        <b className="scanner-b">Diagnosis</b>
      </button>
      <button
        className="chatroom-nav-button"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div" />
        <img className="chat-w-icon" alt="" src="../chat-w@2x.png" />
        <div className="chat-room-div">Play Game</div>
      </button>
      <button className="profile-nav-button" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div" />
        <img className="profile-w-icon" alt="" src="../profile-w@2x.png" />
        <div className="profile-div">Profile</div>
      </button>
      <button className="image-16-button" />
      <button className="image-17-button" />
      <div className="choose-any-method-of-scanning">
        Choose any method of scanning
      </div>
      <div className="logo-div">
        <div className="baby-got-rash">Bumpkin baby</div>
        <img className="group-icon" alt="" src="../group.svg" />
      </div>
      <div className="answer-a-few-questions-for-mor">
        Answer a few questions for more accurate results
      </div>
      <input
        className="group-input"
        type="text"
        placeholder="Enter Baby’s gender"
      />
      <input
        className="group-input1"
        type="text"
        placeholder="Enter Baby’s AGE"
      />
      <input
        className="group-input2"
        type="text"
        placeholder="Enter Baby’s SKIN-TYPE"
      />
      <button className="button">
        <div className="rectangle-div4" />
        <div className="log-in-div">GET RESULTS</div>
      </button>
    </div>
  );
};

export default Scanner;
