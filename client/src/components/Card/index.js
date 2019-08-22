import React from "react";

import { Link } from "react-router-dom"
import {CopyToClipboard} from "react-copy-to-clipboard"

import "./../../styles/Card.css"

import doc from "./doc.jpg"

export function Card(props) {
  return(
    <div className="col-md-4">
      <div className="card mb-4">
        <img className="card-img-top mt-4" src={doc} alt="" />
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
        </div>
        <div className="text-center">
          <Link to={"/form/" + props.id} className="link">
            <button className="btn-sm btn-dark w-100">Edit</button>
          </Link>
            <button className="btn-sm btn-dark w-100" 
              data-target="#IDModal" 
              data-toggle="modal"
              onClick={() => alert("Shareable ID: " + props.id)}>Get ID</button>
        </div>
      </div>
    </div>
  )
}