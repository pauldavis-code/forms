import React, { Component } from "react";
import API from "./../../util/user/API";

import { Input } from "./../Form"
import { SubmitBtn } from "./../Button"

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
      API.createNewUser({
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
      <div className="col-6">
        <h3>Make a new account</h3>
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

        <SubmitBtn 
          type="submit" 
          onClick={this.handleFormSubmit}>
            Submit Form
        </SubmitBtn>
      </div>
    );
  };
};

export default Signup;