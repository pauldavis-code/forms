import React from "react";

export function Input(props) {
  return (
    <div className="input-group" >
      <div className="input-group-prepend">
        <span className="input-group-text">{props.text}</span>
      </div>
      {props.type === "fill" ? 
      <textarea className="form-control" aria-label="With textarea" onChange={(event) => props.onChange(event.target.value, props.id)}></textarea>
      :
      <textarea className="form-control" aria-label="With textarea" readOnly={props.inputs[props.id]} value={props.inputs[props.id]}></textarea>
      } 
  </div>
  )
}