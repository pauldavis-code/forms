import React, { Component } from "react";
// import { Redirect } from "react-router-dom";

import { Card } from "./../components/Card"

import APIUser from "./../util/user/API"
import APIForms from "./../util/forms/API"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      username: null,
      ownedForms: null,
      borrowedForms: null,
      isLoggedIn: false,
      selectedForm: null
    }
    this.getUser()
  }

  getUser() {
    APIUser.getUser()
    .then(res => {
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        // console.log(res.data.user)
        this.setState({
          isLoggedIn: true,
          id: res.data.user._id,
          username: res.data.user.username
        })
        this.findForms(this.state.id)
      } else {
        console.log('Get user: no user');
      }
    })
  }
  
  findForms = (id) => {
    APIForms.findUsersForms({id: id})
    .then(res => {
      // console.log(res.data)
      this.setState({
        ownedForms: res.data.owned,
        borrowedForms: res.data.borrowed,
        loaded: true
      })
      // console.log(this.state.ownedForms)
    })
    .catch(err => console.log("ERROR: " + err ))
  }

  render() {
    // if (this.state.isLoggedIn) {
      return(
        <div>
          <h1> hello, {this.state.username} ({this.state.id})! </h1>

          { this.state.ownedForms ? ( 
            <div className="row">
              <div className="col-6">
                <h2>Owned Forms</h2>
                <div className="row">

                  { this.state.ownedForms.map(forms => 
                  { return <Card title={forms.form_title} id={forms._id} key={forms._id} /> }
                  )}

                </div>
                
              </div>
              <div className="col-6">
                <h2>Borrowed Forms</h2>
                { this.state.borrowedForms.map(forms => <h3 key={forms._id}>{forms.form_title}</h3>) }
              </div>
            </div>
          ) : ( 
            <h3>no forms</h3> )}
        </div>
      )
    // } else {
    //   return <Redirect to={{pathname: "/"}} />
    // }
  }

}

export default Dashboard;