import { useEffect, useState } from "react";
import "./App.css";
import { getDid } from "./web5";

function App() {
  return (
    <div className="App">
      <h1>{`Your did is: ${getDid()}`}</h1>
    </div>
  );
}

export default App;
