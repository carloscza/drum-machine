import React from "react";
import DrumPadContainer from "./DrumPadContainer";
import "../styles/DrumPads.scss";
import { audioBank1, audioBank2 } from "../data/audio";
import { useDrumMachineContext } from "../context";

export default function DrumPadsContainer() {
  const { bank } = useDrumMachineContext();

  const audioBank = bank ? audioBank1 : audioBank2;
  const generatedDrumPads = audioBank.map((elem, i) => (
    <DrumPadContainer
      key={i}
      id={elem.id}
      audioEId={elem.keyTrigger}
      audioSrc={elem.src}
    />
  ));

  return <div className="drum-pads-container">{generatedDrumPads}</div>;
}
