import React, { Component } from "react";
import {Route} from "react-router-dom";

import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Navbar from "./components/Navbar";
import FormDisplay from "./pages/formdisplay";

import APIUser from "./util/user/API";
import APIForms from "./util/forms/API";

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
    APIUser.getUser()
      .then(res => {
        if (res.data.user) {
          console.log('Get User: There is a user saved in the server session: ')
          console.log(res.data.user)
          this.setState({
            isLoggedIn: true,
            username: res.data.user.username,
            id: res.data.user._id
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

  findForm = (id) => {
    APIForms.findOneForm({id: id})
      .then(res => {
        window.location = ("/form/" + id)
        console.log(res)
      })
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
              exact path="/dashboard/"
              render={ () => <Dashboard isLoggedIn={this.state.isLoggedIn} findForm={this.findForm}/> }
            />
            <Route 
              exact path="/form/:id"
              render={() => <FormDisplay />}
            />
          </div>
        </div>
      );
    }
}

export default App;
