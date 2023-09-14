import React from "react";
import Switch from "../components/Switch";
import { useDrumMachineContext } from "../context";

export default function PowerSwitchContainer({ switchId, name }) {
  const { power, setPower, setDisplay } = useDrumMachineContext();

  const style = power ? "switch-right" : "switch-left";

  const handlePowerSwitchClick = () => {
    setPower((prev) => !prev);
    setDisplay("");
  };

  return (
    <Switch
      switchName={name}
      switchBtnStyle={style}
      onSwitchToggle={handlePowerSwitchClick}
    />
  );
}
