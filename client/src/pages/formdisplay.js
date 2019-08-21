import React, { Component } from "react";

import APIForms from "./../util/forms/API";

import { Subheading } from "./../components/Subheading";
import { Input } from "./../components/Input-Sizeable";
import { BubbleSelect } from "./../components/BubbleSelect"

import { Button } from "./../components/Button";

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
    APIForms.findOneForm({id: formID})
      .then(res => {
        console.log(res.data)
        this.setState({
          form: {
            title: res.data.form_title,
            contents: res.data.form_contents,
            owner: res.data.form_owner
          }
        })
      })
  }

  handleInputChange = (userInput, key) => {
    let inputs = this.state.inputs
    inputs[key] = userInput
    this.setState({
      inputs: inputs
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    APIForms.submitCompletedForm({
      form_title: this.state.form.title,
      form_contents: this.state.form.contents,
      form_owner: this.state.form.owner,
      form_inputs: this.state.inputs
    })
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
              return <Input text={field.input.text} key={i} id={i} onChange={this.handleInputChange}/>;
            case '["bubble_select"]':
              return <BubbleSelect contents={field.bubble_select} key={i} set={i}/>
            default: 
              console.log("none")
            }
          }) : console.log() }

          <Button className="btn btn-primary mt-2" onClick={this.handleFormSubmit}>Submit</Button>
      </div>
    )
  }
}

export default FormDisplay;