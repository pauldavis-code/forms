import React, { Component } from "react";

import { SubHeadingModal } from "./../components/Modal/SubHeadingModal";
import { InputModal } from "./../components/Modal/InputModal";
import { BubbleSelectModal } from "./../components/Modal/BubbleSelectModal";
import { TitleModal } from "../components/Modal/TitleModal";

import { ButtonDropdown } from "./../components/Button-Dropdown";
import { Button } from "./../components/Button"
import { Subheading } from "./../components/Subheading";
import { Input } from "./../components/Input-Sizeable";
import { BubbleSelect } from "./../components/BubbleSelect";
import { X } from "./../components/x";

import APIForms from "./../util/forms/API";

class FormCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adding: "",
      subHeading: "",
      input: "",
      bubbleSelectTitle: "",
      bubbleSelectOptions: "",
      formTitle: "",
      form: null
    }
  }


  getType = type => {
    this.setState({
      adding: type
    })
    console.log(type)
  }

  addField = event => {
    event.preventDefault();
    let form;
    let field;

    if (this.state.form) {
      form = this.state.form
    } else {
      form = []
    }

    switch (this.state.adding) {
      case "subHeading": 
        field = {
          sub_heading: {
            text: this.state.subHeading
          }
        }
        break;
      case "input": 
        field = {
          input: {
            text: this.state.input
          }
        }
        break;
      case "bubbleSelect":
        let options = this.state.bubbleSelectOptions.split('~')
        field = {
          bubble_select: {
            title: { text: this.state.bubbleSelectTitle },
            options: options
          }
        }
        break;
      }

    form.push(field)
    this.setState({
      form: form,
      adding: "",
      subHeading: "",
      input: "",
      bubbleSelectTitle: "",
      bubbleSelectOptions: "",
    })
  }

  removeField = (index) => {
    let form = this.state.form
    form.splice(index, 1)
    this.setState({
      form: form
    })
  }

  handleInputChange = event => {
    console.log(this.state)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let id = this.props.id
    APIForms.createNewForm({
      form_title: this.state.formTitle,
      form_contents: this.state.form,
      form_owner: this.props.id
    })
    .then(res => {
      console.log(res)
    })
  }

  render() {

    const form = () => this.state.form ? this.state.form.map((field, i) => {
      console.log(field)
      switch (JSON.stringify(Object.keys(field))) {
        case '["sub_heading"]':
          return ( 
            <div key={"container" + i}>
              <X index={i} removeField={this.removeField}/>
              <Subheading text={field.sub_heading.text} key={"SubHeading-" + i}/>
            </div> );
        case '["input"]':
          return ( 
            <div key={"container" + i}>              
              <X index={i} removeField={this.removeField}/>
              <Input text={field.input.text} key={"Input-" + i}/>
            </div> );
        case '["bubble_select"]':
          console.log(field)
          return (
            <div key={"container" + i}>
              <X index={i} removeField={this.removeField}/>
              <BubbleSelect contents={field.bubble_select} set={i} />
            </div> );
        default: 
          console.log("none")
        }
        return console.log("loaded")
    }) : console.log()

    return(
      <div>
        <h1>Create new form</h1>

        <div className="form">
          { form() }
        </div>

        <TitleModal 
          text="Add Title"
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
          value={this.state.formTitle}
          addField={this.addField}
        />

        <ButtonDropdown 
          aText="Sub Heading"
          bText="User Input"
          cText="Bubble Select"
          getType={this.getType}
        />

        <Button
          className="btn btn-primary ml-2"
          onClick={this.addTitleField}
          submit={this.handleFormSubmit}
          data-toggle={"modal"}
          data-target={"#titleModal"}
        >Save and complete form</Button>

        <SubHeadingModal 
          text="Add Sub Heading Field"
          handleInputChange={this.handleInputChange}
          addField={this.addField}
          value={this.state.subHeading}
        />

        <InputModal 
          text="Add Input Field"
          handleInputChange={this.handleInputChange}
          addField={this.addField}
          value={this.state.input}
        />

        <BubbleSelectModal 
          text="Add Bubble Select Field"
          handleInputChange={this.handleInputChange}
          addField={this.addField}
          valueTitle={this.state.bubbleSelectTitle}
          valueOptions={this.state.bubbleSelectOptions}
        />
      </div>
    )
  }
}

export default FormCreate;