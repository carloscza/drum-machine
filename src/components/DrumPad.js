import React from "react";
import "../styles/DrumPads.scss";

export default function DrumPad({
  audioId,
  drumPadStyle,
  id,
  key,
  audioSrc,
  onDrumPadClicked,
}) {
  return (
    <div className={drumPadStyle} onClick={onDrumPadClicked} id={id} key={key}>
      <p>{audioId}</p>
      <audio id={audioId} src={audioSrc} className="clip"></audio>
    </div>
  );
}
