import React from "react";

import { Input } from "../Input"

export function InputModal(props) {
  return (
    <div className="modal fade" id="inputModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >{props.text}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Enter text that will accompany an input field
            <Input 
              name="input"
              onChange={props.handleInputChange}
              value={props.value}
              placeholder='ie. "First Name", "Favorite Foods", etc.'
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              data-dismiss="modal"
              onClick={props.addField}
            >Add Input Box</button>
          </div>
        </div>
      </div>
    </div>
  )
}