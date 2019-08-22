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
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <h3>Enter your shared code to acces your form</h3>
          <Input 
            name="code"
            value={this.state.code}
            placeholder="ie. 5d5cb85257989353ffea31e9"
            onChange={this.handleInputChange}
          />

          <Button className="btn btn-primary" onClick={this.handleFormSubmit}>Find Form</Button>
        </div>
      </div>
    )
  }
}

export default Portal;