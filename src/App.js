import "./styles/App.css";
import DrumMachineContextProvider from "./context";
import DrumMachine from "./containers/DrumMachine";

function App() {
  return (
    <DrumMachineContextProvider>
      <main className="App">
        <DrumMachine />
      </main>
    </DrumMachineContextProvider>
  );
}

export default App;
