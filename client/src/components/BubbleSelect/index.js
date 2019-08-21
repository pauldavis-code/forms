import React from "react";

export function BubbleSelect(props) {
  return(
    <div>
      <h3>{ props.contents.title.text }</h3>
      { props.contents.options.map((options, number) => {
        return (
          <div className="form-check" key={props.set + "." + number }>
            <input className="form-check-input" type="radio" name={"set" + props.set} id="" value={"option1"} />
            <label className="form-check-label" >
              {options}
            </label>
          </div>
        )
      }) }
    </div>
  )
}