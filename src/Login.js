import React, { Component } from "react";
import PropTypes from "prop-types";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedin: "",
      error: ""
    };
  }

  loginCheck() {
    console.log(this.state.uname + " " + this.state.pass);
    if (this.state.uname == "scott" && this.state.pass == "tiger") {
      this.setState({
        loggedin: true
      });
    } else {
      this.setState({
        loggedin: false,
        error: "Invalid user"
      });
    }
    console.log(this.state.loggedin + " " + this.state.error);
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <label for="uname">
          <b>Username: </b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          value={this.state.uname} 
        />
        <br />
        <br />
        <label for="pass">
          <b>Password: </b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="pass"
          value={this.state.pass} 
        />
        <br />
        <br />
        <button type="submit" onClick={this.loginCheck.bind(this)}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
