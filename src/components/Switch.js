import React from "react";
import "../styles/Controls.scss";

export default function Switch({ switchName, switchBtnStyle, onSwitchToggle }) {
  return (
    <div className="switch-container">
      <p className="switch-label">{switchName}</p>
      <div className={switchBtnStyle}>
        <div className="switch-btn" onClick={onSwitchToggle}></div>
      </div>
    </div>
  );
}
