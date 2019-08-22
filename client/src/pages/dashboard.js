import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Card } from "./../components/Card"
import { Button } from "./../components/Button"

import APIForms from "./../util/forms/API"

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      templateForms: null,
      selectedForm: null,
      completedForms: null
    }
  }
  
  componentDidMount() {
    this.findForms(this.props.userID)
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
      this.state.completedForms.map(forms => { return (
        <a key={forms._id} href={"/read/" + forms._id}><h5>{forms.form_title}</h5></a>
      )})
    ) : null
      return(
        <div>
          <h1> hello, {this.props.username} ({this.props.userID})! </h1>

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