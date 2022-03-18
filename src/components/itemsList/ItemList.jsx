import React from "react";
import PropTypes from "prop-types";


function ItemList(props) {

  

  return (
    <div className="card-grid d-flex justify-content-center">

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">Inscribirme</button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">Inscribirme</button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">Inscribirme</button>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailModal">Inscribirme</button>
        </div>
      </div>
    </div>
  );
}

ItemList.propTypes = {};

export default ItemList;
