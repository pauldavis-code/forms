import React from "react";

import { Input } from "../Input"

export function TitleModal(props) {
  return (
    <div className="modal fade" id="titleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >{props.text}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Give your form a title to save it by name!
            <Input 
              name="formTitle"
              onChange={props.handleInputChange}
              value={props.value}
              placeholder='ie. "Employee Engagement Survey" etc.'
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              data-dismiss="modal"
              onClick={props.handleFormSubmit}
            >Save and complete</button>
          </div>
        </div>
      </div>
    </div>
  )
}