import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import React from "react";

const Profile = () => {
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

  const onLogoutButtonClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="profile-div">
      <div className="line-div" />
      <button className="home-nav-button" onClick={onHomeNavButtonClick}>
        <div className="rectangle-div" />
        <img className="vector-icon" alt="" src="../vector.svg" />
        <div className="home-div">Home</div>
      </button>
      <button className="scanner-nav-button" onClick={onScannerNavButtonClick}>
        <div className="rectangle-div" />
        <img className="scan-w-icon" alt="" src="../scan-w@2x.png" />
        <div className="scanner-div">Diagnosis</div>
      </button>
      <button
        className="chatroom-nav-button"
        onClick={onChatroomNavButtonClick}
      >
        <div className="rectangle-div" />
        <img className="chat-w-icon" alt="" src="../chat-w@2x.png" />
        <div className="chat-room-div">Play Game</div>
      </button>
      <button className="profile-nav-button">
        <div className="rectangle-div" />
        <img className="profile-b-icon" alt="" src="../profile-b@2x.png" />
        <b className="profile-b">Profile</b>
      </button>
      <img className="ellipse-icon" alt="" src="../ellipse-13@2x.png" />
      <button className="edit-porfile-button">
        <div className="edit-btn-div" />
        <div className="edit-profile-div">Edit Profile</div>
        <img className="editpen-icon" alt="" src="../editpen@2x.png" />
      </button>
      <button className="account-settings-button">
        <div className="edit-btn-div" />
        <img className="editpen-icon" alt="" src="../set-img@2x.png" />
        <div className="edit-profile-div">Account Settings</div>
      </button>
      <button className="logout-button" onClick={onLogoutButtonClick}>
        <div className="edit-btn-div" />
        <div className="log-out-div">Log out</div>
        <img className="editpen-icon" alt="" src="../logout-img@2x.png" />
      </button>
      <button className="help-button">
        <div className="edit-btn-div" />
        <div className="help-div">Help</div>
        <img className="help-img-icon" alt="" src="../help-img@2x.png" />
      </button>
      <button className="about-button">
        <div className="help-div1">
          <div className="edit-btn-div" />
        </div>
        <div className="about-div">About</div>
        <img className="about-img-icon" alt="" src="../about-img@2x.png" />
      </button>
      <div className="random-white-guy">Steve</div>
      <div className="logo-div">
        <div className="baby-got-rash">Bumpkin baby</div>
        <img className="group-icon" alt="" src="../group.svg" />
      </div>
    </div>
  );
};

export default Profile;
