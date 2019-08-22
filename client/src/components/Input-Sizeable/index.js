import React from "react";

import { X } from "./../x"

export function Input(props) {
  return (
    <span className="w-50">
      <div className="input-group mb-4" >
        <div className="input-group-prepend">
          <span className="input-group-text">{props.text}</span>
        </div>
        {props.type === "fill" ? 
        <textarea className="form-control" aria-label="With textarea" onChange={(event) => props.onChange(event.target.value, props.id)}></textarea>
        :
        <textarea className="form-control" aria-label="With textarea" readOnly={props.inputs[props.id]} value={props.inputs[props.id]}></textarea>
        } 
    </div>
  </span>
  )
}