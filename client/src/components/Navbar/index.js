import React, { Component } from "react";

import axios from "axios";


class Navbar extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentWillReceiveProps() {
    this.logOutButton()
  }

  logOutButton = ()  => {
    if (this.props.state) {
      return <button type="button" className="btn btn-primary float-right" onClick={this.logout}>Log Out</button>
    }
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
    if (this.props)
    return(
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        {this.logOutButton()}
      </nav>
    )
  }
}

export default Navbar;
