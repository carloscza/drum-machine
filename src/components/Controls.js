import React from "react";
import "../styles/Controls.scss";
import Display from "./Display";
import BankSwitchContainer from "../containers/BankSwitchContainer";
import PowerSwitchContainer from "../containers/PowerSwitchContainer";
import VolumeSliderContainer from "../containers/VolumeSliderContainer";

function Controls() {
  return (
    <section
      role="region"
      aria-labelledby="controls"
      className="controls-container"
    >
      <PowerSwitchContainer name="Power" />
      <Display />
      <VolumeSliderContainer />
      <BankSwitchContainer name="Bank" />
    </section>
  );
}

export default Controls;
