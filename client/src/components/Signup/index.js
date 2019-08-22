import React, { Component } from "react";
import APIUser from "./../../util/user/API";

import { Input } from "./../Input"
import { Button } from "./../Button"

class Signup extends Component {
  state = {
    username: "",
    password: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if(this.state.username.length > 5) {
      APIUser.createNewUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => this.setState({
        username: "",
        password: ""
      }))
    }
  }

  render() {
    return(
      <div className="col">
        <h3>Make a <span className="highlight">new account</span></h3>
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
          type="submit" 
          onClick={this.handleFormSubmit}>
            Sign up
        </Button>
      </div>
    );
  };
};

export default Signup;