import React, { Component } from "react";

import APIUser from "./../util/user/API";

class FormDisplay extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      id: null
    }
    this.getUser()
  }

  getUser() {
    APIUser.getUser()
    .then(res => {
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        console.log(res.data.user)
        this.setState({
          isLoggedIn: true,
          id: res.data.user._id,
        })
      } else {
        console.log('Get user: no user');
      }
    })
  }

  render() {
    return(
      <h1>form</h1>
    )
  }
}

export default FormDisplay;