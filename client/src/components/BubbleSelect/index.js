import React from "react";

export function BubbleSelect(props) {
  console.log(props.inputs)
  return(
    <div className="mb-2">
      <h3>{ props.contents.title.text }</h3>
      { props.contents.options.map((options, number) => {
        return (
          <div className="form-check" key={props.set + "." + number }>

            {
            props.type === "fill" ? 
            <input className="form-check-input" type="radio" name={"set" + props.set} value={"option1"} onChange={() => props.onChange(props.set + "." + number, props.set)}/>
            :
            props.inputs[props.set] === props.set + "." + number && props.type === "read" ? 
            <input className="form-check-input" type="radio" name={"set" + props.set} value={"option1"} checked={true} readOnly/>
            :
            <input className="form-check-input" type="radio" name={"set" + props.set} value={"option1"} checked={false} readOnly/>
            }
            <label className="form-check-label" >
              {options}
            </label>
          </div>
        )
      }) }
    </div>
  )
}