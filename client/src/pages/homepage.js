import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Signup from "../components/Signup";
import Login from "../components/Login"

class Homepage extends Component {
  componentDidMount() {
  }
  render() {
    if (!this.props.isLoggedIn) {
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
    } else {
      return <Redirect to={{pathname: "/dashboard/" + this.props.id}} />
    }
  };
};

export default Homepage;