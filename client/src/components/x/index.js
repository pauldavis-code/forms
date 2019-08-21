import React from "react";

export function X(props) {
  return (
    <span className="float-right mr-2 mt-2" key={props.index} onClick={() => props.removeField(props.index)}>x</span> 
  )
}