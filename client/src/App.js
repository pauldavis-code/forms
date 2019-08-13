import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";

import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar"

import axios from "axios";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: null
    };
  };

  componentDidMount() {
    this.getUser()
  }

  getUser() {
    axios.get('/api/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
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
          <Router>
            <Route 
              exact path={ () => "/"}
              render={ () => this.state.isLoggedIn ? <Dashboard name={this.state.username}/> : <Homepage updateUser={this.updateUser}/>}
            />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
