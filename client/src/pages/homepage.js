import React, { Component } from "react";

import Signup from "../components/Signup";
import Login from "../components/Login";

import "../styles/Homepage.css"

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    }
  }

  componentDidMount() {
  }

  render() {

      return(
        <div className="text-center">
          <h1>for<span className="highlight">m[e]</span></h1>
          <h3>forms made for<span className="highlight">m[e]</span></h3>

          <div className="card text-center mt-4">
            <div className="card-header">
            </div>
            <div className="card-body">
              <h5 className="card-title">Completely customizable - available anywhere</h5>
              <p className="card-text">Dynamic forms that can be customized to your needs and shared on any device</p>
              <a href="/portal" className="btn btn-dark">If you have a form code, click here..</a>
            </div>
            <div className="card-footer text-muted">
            </div>
          </div>

            <h2 className="mt-4">Returning user? <span className="highlight">Want to be?</span></h2>
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