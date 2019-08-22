import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import FormDisplay from "./pages/formdisplay";
import FormCreate from "./pages/formcreate"

import withAuth from "./util/withAuth"

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: null,
      id: null
    };
    // this.getUser()
  };

  // componentDidMount() {
  //   // this.getUser()
  // }

  // getUser() {
  //   APIUser.getUser()
  //     .then(res => {
  //       if (res.data.user) {
  //         console.log('Get User: There is a user saved in the server session: ')
  //         console.log(res.data.user)
  //         return true
  //         this.setState({
  //           isLoggedIn: true,
  //           username: res.data.user.username,
  //           id: res.data.user._id
  //         })
  //       } else {
  //         console.log('Get user: no user');
  //         this.setState({
  //           isLoggedIn: false,
  //           username: null,
  //           id: null
  //         })
  //       }
  //     })
  // }

  updateUser = (userObj) => {
    this.setState(userObj)
    console.log("logged in as: " + this.state.username)
  }

  render() {
    return (
      <div>
        <Navbar state={this.state.isLoggedIn} updateUser={this.updateUser}/>
        <div className="container-fluid">
          <Switch>
            <Route 
              exact path="/"
              render={ (props) => <Homepage isLoggedIn={this.state.isLoggedIn} updateUser={this.updateUser} id={this.state.id}/>} 
            />
            <Route 
              exact path="/dashboard"
              component={withAuth(Dashboard)}
              // id={this.state.id}
              />)}
            />
            <Route 
              exact path="/form/new"
              component={withAuth(FormCreate)}
              id={this.state.id}
              type={"fill"}
            />
            <Route 
              exact path="/form/:id"
              render={(props) => <FormDisplay id={props.match.params.id} type={"fill"}/>}
            />
            <Route 
              exact path="/read/:id"
              render={(props) => <FormDisplay id={props.match.params.id} type={"read"}/>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
