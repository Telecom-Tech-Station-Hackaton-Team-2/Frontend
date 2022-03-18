import React, { useState, useEffect } from "react";
import UserServices from "../../services/user";

function Profile(props) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const data = new UserServices();
    data.getData().then(({ data }) => {
      setUserData(data);
    });
  }, []);

  if (localStorage.getItem("access_token")) {
    return (
      <div>
        <div>
          <h1>Mi Perfil</h1>
        </div>
        <div className="container rounded border border-secondary mt-4">
          <div className="d-flex mt-2">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe&rounded=true&size=38"
              alt="Imagen del usuario"
            />
            <h2 className="mx-4">Nombre del colaborador | Legajo</h2>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              DNI
            </label>
            <label for="" className="col-sm-2 col-form-label">
              32444555
            </label>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              Puesto
            </label>
            <label for="" className="col-sm-2 col-form-label">
              Un puesto
            </label>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              Sector
            </label>
            <label for="" className="col-sm-2 col-form-label">
              Un sector
            </label>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              Edificio
            </label>
            <label for="" className="col-sm-2 col-form-label">
              Un edificio
            </label>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              Telefono
            </label>
            <label for="" className="col-sm-2 col-form-label">
              1144445555
            </label>
          </div>
          <div className="mb-3 row mx-4">
            <label for="" className="col-sm-2 col-form-label fw-bold">
              Email
            </label>
            <label for="" className="col-sm-2 col-form-label">
              usuario@unemail.com
            </label>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

Profile.propTypes = {};

export default Profile;
