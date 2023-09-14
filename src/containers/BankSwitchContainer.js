import React from "react";
import Switch from "../components/Switch";
import { useDrumMachineContext } from "../context";

export default function SwitchContainer({ switchId, name }) {
  const { power, bank, setBank, setDisplay } = useDrumMachineContext();

  const style = bank ? "switch-left" : "switch-right";

  const handleBankSwitchClick = () => {
    if (power) {
      setBank((prev) => !prev);
      setDisplay(bank ? "Smooth Piano Kit" : "Heater Kit");
    }
  };

  return (
    <Switch
      switchName={name}
      switchBtnStyle={style}
      onSwitchToggle={handleBankSwitchClick}
    />
  );
}
