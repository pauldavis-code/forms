import React, { Component } from "react";
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Homepage from "./pages/homepage";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div className="container-fluid">
        <Router>
          <Route
          exact path="/"
          component={Homepage}
          />
        </Router>
      </div>
    );
  }
}

export default App;
