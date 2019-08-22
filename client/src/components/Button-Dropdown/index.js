import React from "react";

import { DropdownItem } from "./../Button-Dropdown/Dropdown-Item"

export function ButtonDropdown(props) {
  return (
    <div className="btn-group">   
      <button type="button" className="btn btn-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Add new field..
      </button>
      <div className="dropdown-menu">

        <DropdownItem 
          text={props.aText}
          type={"subHeading"}
          getType={props.getType}
        />
        <DropdownItem 
          text={props.bText}
          type={"input"}
          getType={props.getType}
        />
        <DropdownItem 
          text={props.cText}
          type={"bubbleSelect"}
          getType={props.getType}
        />

        {/* <a className="dropdown-item" onClick={props.bFunction}>{props.bText}</a>
        <a className="dropdown-item" onClick={props.cFunction}>{props.cText}</a> */}
      </div>
    </div>
  )
}