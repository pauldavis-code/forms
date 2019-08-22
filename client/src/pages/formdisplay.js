import React, { Component } from "react";

import APIForms from "./../util/forms/API";
import APIUser from "./../util/user/API";

import { Subheading } from "./../components/Subheading";
import { Input } from "./../components/Input-Sizeable";
import { BubbleSelect } from "./../components/BubbleSelect"

import { Button } from "./../components/Button";
import API from "./../util/forms/API";

class FormDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
      inputs: []
    }
  }

  componentDidMount() {
    this.fetchForm(this.props.id)
  }

  fetchForm = (formID) => {
    if (this.props.type === "fill") {
      APIForms.findOneForm({id: formID})
        .then(res => {
          // console.log(res.data)
          this.setState({
            form: {
              title: res.data.form_title,
              contents: res.data.form_contents,
              owner: res.data.form_owner
            }
          })
        })
    } else {
      APIForms.readOneForm({id: formID})
      .then(res => {
        console.log(res.data)
        this.setState({
          form: {
            title: res.data.form_title,
            contents: res.data.form_contents,
            owner: res.data.form_owner
          },
          inputs: res.data.form_inputs
        })
      })
    }
  }

  handleInputChange = (userInput, key) => {
    console.log(userInput, key)
    let inputs = this.state.inputs
    inputs[key] = userInput
    this.setState({
      inputs: inputs
    })
    console.log(inputs)
  }

  handleFormSubmit = event => {
    event.preventDefault();
    APIForms.submitCompletedForm({
      form_title: this.state.form.title,
      form_contents: this.state.form.contents,
      form_owner: this.state.form.owner,
      form_inputs: this.state.inputs
    })
    if (this.props.user === "owner") {
      window.location.href = "/dashboard"
    } else {
      window.location.href = "/"
    }
  }

  render() {
    return(
      <div>
        {this.state.form ? <h1>{this.state.form.title}</h1> : <h1>No title</h1>}

        { this.state.form ?
        this.state.form.contents.map((field, i) => {
          switch (JSON.stringify(Object.keys(field))) {
            case '["sub_heading"]':
              return <Subheading text={field.sub_heading.text} key={i}/>;
            case '["input"]':
              return <Input type={this.props.type} text={field.input.text} inputs={this.state.inputs} key={i} id={i} onChange={this.handleInputChange}/>;
            case '["bubble_select"]':
              return <BubbleSelect type={this.props.type} inputs={this.state.inputs} contents={field.bubble_select} key={i} set={i} onChange={this.handleInputChange}/>
            default: 
              console.log("none")
            }
          }): console.log() }

          <Button className="btn btn-dark mt-2" onClick={this.handleFormSubmit}>Submit</Button>
      </div>
    )
  }
}

export default FormDisplay;