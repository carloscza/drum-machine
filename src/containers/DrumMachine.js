import React from "react";
import "../styles/DrumMachine.scss";
import Controls from "../components/Controls";
import DrumPadsContainer from "./DrumPadsContainer";

function DrumMachine() {
  return (
    <section
      role="region"
      aria-labelledby="drum-machine"
      className="drum-machine-container"
      id="drum-machine"
    >
      <DrumPadsContainer />
      <Controls />
    </section>
  );
}

export default DrumMachine;
