import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Chatroom.css";

const Chatroom = () => {
  const navigate = useNavigate();

  const onHomeNavButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  const onScannerNavButtonClick = useCallback(() => {
    navigate("/scanner");
  }, [navigate]);

  const onProfileNavButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="chatroom-div">
      <div className="line-div5" />
      <button className="home-nav-button5" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div23" />
        <img className="vector-icon5" alt="" src="../vector.svg" />
        <div className="home-div5">Home</div>
      </button>
      <button className="scanner-nav-button5" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div23" />
        <img className="scan-w-icon5" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div5">Diagnosis</div>
      </button>
      <button className="chatroom-nav-button5">
        <div className="rectangle-div23" />
        <img className="chat-b-icon4" alt="" src="../chat-w@2x.png" />
        <b className="chat-room-b4">Play Game</b>
      </button>
      <button className="profile-nav-button5" onClick={onProfileNavButtonClick}>
        <div className="rectangle-div23" />
        <img className="profile-w-icon4" alt="" src="../profile-w@2x.png" />
        <div className="profile-div5">Profile</div>
      </button>
      <div className="logo-div5">
        <div className="baby-got-rash5">Bumpkin baby</div>
        <img className="group-icon5" alt="" src="../group5.svg" />
      </div>
    </div>
  );
};
export default Chatroom;
