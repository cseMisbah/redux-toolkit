import "./App.css";
import CounterView from "./features/counter/CounterView";
import { useState } from "react";

// There are some recomendations to use redux-toolkit firstly, we have to install redux-toolkit

function App() {
  return (
    <div className="app">
      <CounterView></CounterView>
    </div>
  );
}

export default App;
