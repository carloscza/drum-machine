import React, { useState } from "react";

const DrumMachineContext = React.createContext({});

// Custom Hook for accessing the drum machine context.
export function useDrumMachineContext() {
  const drumMachine = React.useContext(DrumMachineContext);

  /* 
       Throw an error if 
       DrumMachineContext does not exist, 
       useDrumMachineContext() is being used outside its provider, 
       or an uninitialized DrumMachineContext.
  */
  if (drumMachine === undefined)
    throw new Error(
      "useDrumMachineContext must be used with DrumMachineContext"
    );

  return drumMachine;
}

// Context's provider component to allow components access context.
export default function DrumMachineContextProvider({ children }) {
  const [display, setDisplay] = useState("");
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);
  const [volume, setVolume] = useState(0.3);

  const contextValue = {
    power,
    setPower,
    display,
    setDisplay,
    bank,
    setBank,
    volume,
    setVolume,
  };

  return (
    <DrumMachineContext.Provider value={contextValue}>
      {children}
    </DrumMachineContext.Provider>
  );
}
