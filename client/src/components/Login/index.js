import React, { Component } from "react";
import APIUser from "./../../util/user/API";

import { Input } from "./../Input"
import { Button } from "./../Button"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      id: "",
    };
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.username.length > 5) {
      APIUser.findCurrentUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => {
        console.log("Logged in")
        console.log("response: " + res.data.id)
        this.props.updateUser({
          username: res.data.username,
          id: res.data.id
        })
        console.log(res.data.id)
        window.location.href = "/dashboard"
      }).catch(error => {
        return console.log("log in error: " + error)
      })
    }
  }

  render() {
    return(
      <div className="col mb-2">
        <h3>..or <span className="highlight">Login</span></h3>
        <Input 
          value={this.state.username}
          onChange={this.handleInputChange}
          name="username"
          placeholder="Enter your username"
        />

        <Input 
          value={this.state.password}
          onChange={this.handleInputChange}
          name="password"
          placeholder="Enter your password"
          type="password"
        />

        <Button
          className="btn btn-dark"
          onClick={this.handleFormSubmit}
        >
          Login
        </Button>
      </div>
    );
  };
};

export default Login;