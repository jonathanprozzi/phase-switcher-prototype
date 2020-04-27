import React, { useState } from "react";
import "./App.css";
import PhaseOne from "./components/PhaseOne";
import PhaseTwo from "./components/PhaseTwo";

function App() {
  const [phase, setPhase] = useState(0);

  return (
    <div className="App">
      <h1>Phase Switching</h1>
      <p>Current phase: {phase}</p>
      <button onClick={() => setPhase(phase + 1)}>Move forward</button>

      <div>{phase === 1 && <PhaseOne />}</div>
      <div>{phase === 2 && <PhaseTwo />}</div>
    </div>
  );
}

export default App;
