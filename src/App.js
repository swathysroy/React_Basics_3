import React, { Component } from "react";
import "./style.css";
import Login from "./Login";
import Employee from "./Employee";

class App extends React.Component {
  render() {
    return (
      <div>
        <Login uname="Swathy" pass="******"/>
        <Employee />
      </div>
    );
  }
}

export default App;
