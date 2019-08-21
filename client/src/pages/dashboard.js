import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card } from "./../components/Card"
import { Button } from "./../components/Button"

import APIUser from "./../util/user/API"
import APIForms from "./../util/forms/API"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      username: null,
      templateForms: null,
      isLoggedIn: false,
      selectedForm: null,
      completedForms: null
    }
  }

  componentDidMount() {
    if (!this.state.isLoggedIn) {
      this.getUser()
    }
  }

  getUser = () => {
    APIUser.getUser()
    .then(res => {
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ')
        // console.log(res.data.user)
        this.setState({
          isLoggedIn: true,
          id: res.data.user._id,
          username: res.data.user.username
        })
        this.findForms(this.state.id)
      } else {
        console.log('Get user: no user');
      }
    })
  }
  
  findForms = (id) => {
    APIForms.findUsersForms({id: id})
    .then(res => {
      this.setState({
        templateForms: res.data.templates,
        completedForms: res.data.completed
      })
    })
    .catch(err => console.log("ERROR: " + err ))
  }

  render() {
    let templates = this.state.templateForms ? (
      this.state.templateForms.map(forms => { return (
        <Card title={forms.form_title} id={forms._id} key={forms._id}/> 
      ) 
    })) : null

    let completed = this.state.completedForms ? (
      this.state.completedForms.map(forms => { console.log(forms.form_title)
        return (
        <h4>{forms.form_title}</h4>
      )})
    ) : null

    return(
      <div>
        <h1> hello, {this.state.username} ({this.state.id})! </h1>

        <Link to={"/form/new"}>
          <Button className="btn btn-primary mt-2 mb-2">Create New Form</Button>
        </Link>

        <div className="row">
          <div className="col-md-8">
            <h2>Templated forms</h2>
            {templates}
          </div>

          <div className="col-md-4">
            <h2>completed forms</h2>
            {completed}
          </div>

        </div>
      </div> )
  }
}

export default Dashboard;