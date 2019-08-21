import React from "react";

import { Input } from "../Input"

export function BubbleSelectModal(props) {
  return (
    <div className="modal fade" id="bubbleSelectModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" >{props.text}</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <div className="form-group">
            Enter a title for your bubble selector input
            <Input 
              name="bubbleSelectTitle"
              onChange={props.handleInputChange}
              value={props.valueTitle}
              placeholder='ie. "I love food", "I can be fairly independent", etc.'
            />
            
            Enter a label for each bubble in order from top or bottom with each option seperated by a tilde (~)
            <Input 
              name="bubbleSelectOptions"
              onChange={props.handleInputChange}
              value={props.valueOptions}
              placeholder='ie. Strongly Agree~Agree~Disagree~Strongly Disagree etc.'
            />
          </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button 
              type="submit" 
              className="btn btn-primary" 
              data-dismiss="modal"
              onClick={props.addField}
            >Add Bubble Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}