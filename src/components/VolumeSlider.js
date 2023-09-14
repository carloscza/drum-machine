import React from "react";
import "../styles/Controls.scss";

function VolumeSlider({ value, onAdjustVolume }) {
  return (
    <div
      role="volume"
      aria-labelledby="volume-slider"
      className="volume-slider"
    >
      <input
        max="1"
        min="0"
        step="0.01"
        type="range"
        value={value}
        onChange={onAdjustVolume}
      />
    </div>
  );
}

export default VolumeSlider;
