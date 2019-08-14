import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import APIUser from "./../util/user/API"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      ownedForms: null,
      borrowedForms: null,
      loaded: false
    }
  }

  componentDidUpdate() {
    console.log(this.props.id)
    if (this.state.loaded === false) {
      this.findForms(this.props.id)
    }
  }

  
  findForms = (id) => {
    APIUser.findFormIDs({id: id})
    .then(res => {
      // console.log(res)
      this.setState({
        ownedForms: res.data.owned,
        borrowedForms: res.data.borrowed,
        loaded: true
      })
      console.log(this.state.ownedForms)
    })
    .catch(err => console.log("ERROR: " + err ))
  }
  
  render() {
    return(
      <div>
        <h1> hello, {this.props.username} ({this.props.id})! </h1>

        { this.state.ownedForms ? ( 
          <div className="row">
            <div className="col-6">
              <h2>Owned Forms</h2>
                { this.state.ownedForms.map(forms => <h3 key={forms.id}>{forms.id}</h3>) }
            </div>
            <div className="col-6">
              <h2>Borrowed Forms</h2>
              { this.state.borrowedForms.map(forms => <h3 key={forms}>{forms}</h3>) }
            </div>
          </div>
        ) : ( 
          <h3>no forms</h3> )}
      </div>
    )
  }

}

export default Dashboard;