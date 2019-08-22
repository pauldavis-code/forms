import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import API from "./../user/API"

export default function withAuth(ProtectedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
        user: null
      };
    }

    componentDidMount() {
      console.log("withAUth mounted")
      API.getUser()
        .then(res => {
          console.log("status: " + res.status)
          if (res.status !== 401) {
            this.setState({ user: res.data.user, loading: false });
            console.log("loaded: " + res.data.user.username)
          } else {
            console.log("no user")
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          this.setState({ loading: false, redirect: true })
          console.error(err);
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        console.log("redirect to home page")
        return <Redirect to="/" />;
      }
      return (
        <React.Fragment>
          <ProtectedComponent username={this.state.user.username} userID={this.state.user._id} {...this.props} />
        </React.Fragment>
      );
    }
  }
}
