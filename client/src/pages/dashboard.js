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

  logout = (event) => {
    axios.post('/api/users/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          isLoggedIn: false,
          username: null,
          id: null
        })
      }
    }).catch(error => {
        console.log('Logout error:')
        console.log(error)
    })
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
          <div>
          <span className="float-right"><a onClick={this.logout}>logout</a></span>
            <h1> hello, <span className="highlight">{this.props.username}</span></h1> 
          </div>
    

          <Link to={"/form/new"}>
            <Button className="btn btn-dark mt-2 mb-2">Create New Form</Button>
          </Link>

          <div className="row">
            <div className="col-md-8">
              <h2>Templated  <span className="highlight">forms</span></h2>
              <div className="row">
                {templates}
              </div>
            </div>

            <div className="col-md-4">
              <h2>completed <span className="highlight">forms</span></h2>
              {completed}
            </div>

          </div>

        </div> )
  }
}

export default Dashboard;