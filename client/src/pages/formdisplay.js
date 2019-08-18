import React, { Component } from "react";

import APIForms from "./../util/forms/API";

import { Subheading } from "./../components/Subheading";
import { Input } from "./../components/Input";
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
        // console.log(res.data)
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

        {this.state.form ? <h1>{this.state.form.title}</h1> : <h1>No Title</h1>}

        { this.state.form ?
        this.state.form.contents.map((section, i) => {
          // console.log(JSON.stringify(Object.keys(section)))
          switch (JSON.stringify(Object.keys(section))) {
            case '["sub_heading"]':
              // console.log("hit");
              return <Subheading text={section.sub_heading.text} key={i}/>;
            case '["input"]':
              // console.log("hit");
              return <Input text={section.input.text} key={i}/>;
            case '["bubble_select"]':
              return section.bubble_select.text.map((text, option) => {
                return <BubbleSelect text={text} set={i} key={i + "." + option} option={option}/>
              })
            default: 
              console.log("none")
            }
            return console.log("loaded")

          }
          ) : console.log() }
      </div>
    )
  }
}

export default FormDisplay;