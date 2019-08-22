import React, { Component } from "react";

import { Input } from "./../components/Input";
import { Button } from "./../components/Button";

class Portal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.code)
    window.location.href = "/form" + "/guest/" + this.state.code
  }

  render() {
    return (
      <div>
          <div className="text-center">

            <h1>for<span className="highlight">m[e]</span></h1>
            <h3>forms made for<span className="highlight">m[e]</span></h3>

            <div className="card text-center mt-4">
              <div className="card-header">
              </div>
              <div className="card-body">
                <h5 className="card-title">Enter your shared code to acces your form</h5>
                <Input 
                  name="code"
                  value={this.state.code}
                  placeholder="ie. 5d5cb85257989353ffea31e9"
                  onChange={this.handleInputChange}
                />
                 <div className="text-center mb-2">
                  <Button className="btn btn-dark" onClick={this.handleFormSubmit}>Find Form</Button>
                </div>
                <div className="text-center">
                  <a href="/" className="btn btn-dark">If you need to log in or sign up click here...</a>
                </div>
              </div>
              <div className="card-footer text-muted">
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Portal;