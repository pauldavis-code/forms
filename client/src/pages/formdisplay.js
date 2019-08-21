import React, { Component } from "react";

import APIForms from "./../util/forms/API";

import { Subheading } from "./../components/Subheading";
import { Input } from "./../components/Input-Sizeable";
import { BubbleSelect } from "./../components/BubbleSelect"

class FormDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
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
            contents: res.data.form_contents
          }
        })
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
              return <Input text={field.input.text} key={i}/>;
            case '["bubble_select"]':
              return <BubbleSelect contents={field.bubble_select} key={i} set={i}/>
            default: 
              console.log("none")
            }
          }) : console.log() }
      </div>
    )
  }
}

export default FormDisplay;