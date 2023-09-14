import React from "react";
import VolumeSlider from "../components/VolumeSlider.js";
import { useDrumMachineContext } from "../context.js";

export default function VolumeSliderContainer() {
  const { power, volume, setVolume, setDisplay } = useDrumMachineContext();
  const handleChange = ({ target }) => {
    if (power) {
      setVolume(target.value);
      setDisplay("Volume: " + Math.round(100 * volume));
      setTimeout(() => setDisplay(""), 1000);
    }
  };
  return <VolumeSlider value={volume} onAdjustVolume={handleChange} />;
}
