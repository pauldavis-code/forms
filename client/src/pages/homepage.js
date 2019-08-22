import React, { Component } from "react";

import Signup from "../components/Signup";
import Login from "../components/Login";

import APIUser from "./../util/user/API";

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
  }

  render() {
    console.log("render")

      return(
        <div>
          <h1>Welcome to the homepage!</h1>

          <div className="row mt-4">
            <Signup />
            <Login 
              updateUser={this.props.updateUser}
            />
          </div>
        </div>
      );
    };
};

export default Homepage;