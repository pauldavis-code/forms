import React, { Component } from "react";
import APIUser from "./../../util/user/API";
import { Redirect } from "react-router-dom";

import { Input } from "./../Form"
import { SubmitBtn } from "./../Button"

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
        this.setState({
          username: "",
          password: "",
          id: res.data.id
        });
        this.props.updateUser({
          loggedIn: true,
          username: res.data.username,
          id: res.data.id
        })
        // console.log(res)
      }).catch(error => {
        console.log("log in error: " + error)
      })
    }
  }

  render() {
    if (this.state.id) {
      console.log("redirect")
      return <Redirect to={{ pathname: "/dashboard/"}} />
    } else {
      return(
        <div className="col-6">
          <h3>or Login</h3>
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
    }
  };
};

export default Login;