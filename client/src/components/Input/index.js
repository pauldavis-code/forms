import React from "react";

export function Input(props) {
  return(
    <div className="form-group mt-2">
      <input className="form-control" {...props}></input>
    </div>
  )
}