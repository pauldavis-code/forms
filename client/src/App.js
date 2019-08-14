import React, { Component } from "react";
import {Route} from "react-router-dom";

import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar"

import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: null,
      id: null
    };
  };

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/users/find').then(response => {
      console.log('Get user response: ')
      // console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        this.setState({
          isLoggedIn: true,
          username: response.data.user.username,
          id: response.data.user._id
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          isLoggedIn: false,
          username: null,
          id: null
        })
      }
    })
  }

  updateUser = (userObj) => {
    this.setState(userObj)
    console.log("logged in as: " + this.state.username)
  }


  render() {
      return (
        <div>
          <Navbar state={this.state.isLoggedIn} updateUser={this.updateUser}/>
          <div className="container-fluid">
            <Route 
              exact path="/"
              render={ (props) => <Homepage isLoggedIn={this.state.isLoggedIn} updateUser={this.updateUser} id={this.state.id}/>}
            />
            <Route 
              exact path="/dashboard/:id"
              render={ () => <Dashboard isLoggedIn={this.state.isLoggedIn} username={this.state.username} id={this.state.id}/> }
            />
          </div>
        </div>
      );
    }
}

export default App;
