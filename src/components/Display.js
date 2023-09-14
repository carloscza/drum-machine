import React from "react";
import "../styles/Controls.scss";
import { useDrumMachineContext } from "../context";

function Display() {
  const { display } = useDrumMachineContext();
  return (
    <div
      role="display"
      aria-labelledby="drum-machine-display"
      className="drum-machine-display"
      id="display"
    >
      <p>{display}</p>
    </div>
  );
}

export default Display;
