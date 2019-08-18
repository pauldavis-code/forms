import React from "react";

export function BubbleSelect(props) {
  return (
    <div className="form-check">
      <input className="form-check-input" type="radio" name={"set" + props.set} id="" value={"option1"} />
      <label className="form-check-label" >
        {props.text}
      </label>
    </div>
  )
}