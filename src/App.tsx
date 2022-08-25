import React from 'react';
import './App.css';
import { ExceptionFormatter } from "./ExceptionFormatter";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="ex">ex</span>.prettyPrint()
      </h1>
      <ExceptionFormatter/>
    </div>
  );
}

export default App;
