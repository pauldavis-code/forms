import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import FormDisplay from "./pages/formdisplay";
import FormCreate from "./pages/formcreate"
import Portal from "./pages/portal"

import withAuth from "./util/withAuth"

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      id: null
    };
  };

  updateUser = (userObj) => {
    this.setState(userObj)
    console.log("logged in as: " + this.state.id)
    console.log(this.state.id)
  }

  render() {
    return (
      <div>
        <Navbar state={this.state.isLoggedIn} updateUser={this.updateUser}/>
        <div className="container-fluid">
          <Switch>
            <Route 
              exact path="/"
              render={ (props) => <Homepage updateUser={this.updateUser}/>} 
            />
            <Route 
              exact path="/dashboard"
              component={withAuth(Dashboard)}
              />)}
            />
            <Route 
              exact path="/form/new"
              component={withAuth(FormCreate)}
            />
            <Route 
              exact path="/form/:id"
              // component={withAuth(FormDisplay)} 
              render={(props) => <FormDisplay id={props.match.params.id} type={"fill"} user={"owner"}/>}
            />
            <Route 
              exact path="/form/guest/:id"
              render={(props) => <FormDisplay id={props.match.params.id} type={"fill"} user={"guest"}/>}
            />
            <Route 
              exact path="/read/:id"
              render={(props) => <FormDisplay id={props.match.params.id} type={"read"}/>}
            />
            
            <Route 
              exact path="/portal"
              render={() => <Portal />}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
