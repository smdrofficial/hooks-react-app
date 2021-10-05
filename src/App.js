import React from "react";

// components
import BasicLayout from "components/layouts/basic";

import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="app-wrapper" tabIndex="-1">
      <BasicLayout>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </BasicLayout>
    </div>
  );
}

export default App;
