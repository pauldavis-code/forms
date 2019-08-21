import React from "react";


export function DropdownItem(props) {
  return (
      <div 
        className="dropdown-item" 
        data-toggle="modal" 
        data-target={"#" + props.type + "Modal"} 
        onClick={() => props.getType(props.type)}
      >
        {props.text}
      </div>
  )
}

