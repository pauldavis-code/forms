import React from "react";

export function Input(props) {
  return (
    <div className="input-group" >
      <div className="input-group-prepend">
        <span className="input-group-text">{props.text}</span>
      </div>
      <textarea className="form-control" aria-label="With textarea"></textarea>
  </div>
  )
}