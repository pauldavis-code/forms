import React, { Component } from "react";

import axios from "axios";

import APIUser from "./../../util/user/API"


class Navbar extends Component {
  // constructor(props) {
  //   super(props)
  // }


  logOutButton = ()  => {
  }

  logout = (event) => {
    event.preventDefault()
    console.log('logging out')
    axios.post('/api/users/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          isLoggedIn: false,
          username: null,
          id: null
        })
      }
    }).catch(error => {
        console.log('Logout error:')
        console.log(error)
    })
  }


  render() {

    let loggedIn = null
    let button
    APIUser.getUser()
      .then(res => {
        if (res.data.user._id) {
          console.log("is logged in")
          loggedIn = true
        }
        if (loggedIn) {
          console.log("yes")
          button = <h1>hi!</h1>
      }
    })

    return(
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">form(e)</span>
        {button}
      </nav>
    )
  }
}

export default Navbar;
