import React from "react";
import DetailModal from "./DetailModal";

export default function Card({ data }) {
  // const [ titulo, detalle, done ] = data;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{data.titulo}</h5>
        <p className="card-text">{data.detalle}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ver mas
        </button>
      </div>
      <DetailModal data={data}/>
    </div>
  );
}
