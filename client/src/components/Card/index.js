import React from "react";

// import "./../../styles/Card.css"
import doc from "./doc.jpg"

export function Card(props) {
  return(
    <div className="col-md-6">
      <div className="card mb-4">
        <img className="card-img-top mt-4" src={doc} alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
        </div>
        <a href={"/form/" + props.id} className="btn btn-primary ">Edit Document</a>
      </div>
    </div>
  )
}