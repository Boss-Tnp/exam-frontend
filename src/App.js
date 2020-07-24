import React from "react";
import logo from "./assets/images/logo.png";
import MainController from "./controllers/mainController";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
        <MainController />
      </div>
    </div>
  );
};

export default App;
