import React from 'react'
import { Link } from "react-router-dom";
import './welcome.css'

function Welcome() {
  return (
    <div className="container">
      <div className="row">
        <div className="card cardWelcome col-md-5 col-12 m-2">
      <Link exact="true" to="/capacitaciones">

              <img src="..." className="card-img-top" alt="..."/>

              <div className="card-body">
                <h5 className="card-title">Capacitaciones</h5>
                <p className="card-text">Aquí podrás encontrar las capacitaciones disponibles junto a las que ya realizaste</p>
              </div>
      </Link>
        </div>

        <div className="card cardWelcome col-md-5 col-12 m-2">
      <Link exact="true" to="/accesos">

              <img src="..." className="card-img-top" alt="..."/>

              <div className="card-body">
                <h5 className="card-title">Accesos</h5>
                <p className="card-text">Aquí podrás encontrar los accesos disponibles junto a las que ya tenés asignados</p>
              </div>
      </Link>
        </div>

        <div className="card cardWelcome col-md-5 col-12 m-2">
      <Link exact="true" to="/organigrama">

              <img src="..." className="card-img-top" alt="..."/>

              <div className="card-body">
                <h5 className="card-title">Organigrama</h5>
                <p className="card-text">Aquí podrás encontrar a tus compañeros, jefes y colaboradores con los que te vas a relacionar</p>
              </div>
      </Link>
        </div>
        </div>
    </div>
  )
}

export default Welcome