import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Signup from "../components/Signup";
import Login from "../components/Login"

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
    console.log(this.state.isLoggedIn)
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