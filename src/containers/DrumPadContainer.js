import React from "react";
import DrumPad from "../components/DrumPad";
import { useDrumMachineContext } from "../context";

export default function DrumPadContainer({ id, audioEId, key, audioSrc }) {
  const [style, setStyle] = React.useState("drum-pad");
  const { volume, power, setDisplay } = useDrumMachineContext();

  const handleDrumPadClicked = () => {
    setStyle("drum-pad drum-pad-activated");

    if (power) {
      setDisplay(id);
      const audioElement = document.getElementById(audioEId);
      audioElement.currentTime = 0;
      audioElement.volume = volume;
      audioElement.play();
    }

    setTimeout(() => {
      setStyle("drum-pad");
    }, 100);
  };

  const handleKeyPress = (event) => {
    if (event.key.toLowerCase() === audioEId.toLowerCase()) {
      setStyle("drum-pad drum-pad-activated");

      if (power) {
        setDisplay(id);
        const audioElement = document.getElementById(audioEId);
        audioElement.currentTime = 0;
        audioElement.volume = volume;
        audioElement.play();
      }

      setTimeout(() => {
        setStyle("drum-pad");
      }, 100);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <DrumPad
      audioId={audioEId}
      drumPadStyle={style}
      id={id}
      key={key}
      audioSrc={audioSrc}
      onDrumPadClicked={handleDrumPadClicked}
    />
  );
}
