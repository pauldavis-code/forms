import React, { Component } from "react";
import API from "./../../util/user/API";

import { Input } from "./../Form"
import { SubmitBtn } from "./../Button"

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: "",
      redirectTo: null
    };
  };

  componentDidMount() {

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
      API.findCurrentUser({
        username: this.state.username,
        password: this.state.password
      })
      .then(res => { 
        // console.log("response: " + res.data)
        this.setState({
          username: "",
          password: "",
          redirectTo: "/dashboard"
        });
        this.props.updateUser({
          loggedIn: true,
          username: res.data.username
        })
        console.log(res)
      }).catch(error => {
        console.log("log in error: " + error)
      })
    }
  }

  render() {
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
  };
};

export default Login;