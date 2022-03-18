import React from "react";
import { Link } from "react-router-dom";
import "./welcome.css";
import capa from './capacitacion.png'
import access from './accesos.png'
import orga from './orga.png'

function Welcome() {
    return (
        <div className="container">
            <h1>¡Bienvenido!</h1>
            <div className="row">
              <div className="col-md-4 col-12 mt-2">
                <div className="card cardWelcome ">
                    <Link exact="true" to="/capacitaciones" className="link">
                        <img src={capa} className="card-img-top overflow-hidden" alt="foto capacitacion" />

                        <div className="card-body">
                            <h5 className="card-title">Capacitaciones</h5>
                            <p className="card-text">
                                Aquí podrás encontrar las capacitaciones
                                disponibles junto a las que ya realizaste
                            </p>
                        </div>
                    </Link>
                </div>
              </div>
              <div className="col-md-4 col-12 mt-2">
                <div className="card cardWelcome">
                    <Link exact="true" to="/accesos" className="link">
                        <img src={access} className="card-img-top overflow-hidden" alt="foto accesos" />

                        <div className="card-body">
                            <h5 className="card-title">Accesos</h5>
                            <p className="card-text">
                                Aquí podrás encontrar los accesos disponibles
                                junto a las que ya tenés asignados
                            </p>
                        </div>
                    </Link>
                </div>
              </div>
              <div className="col-md-4 col-12 mt-2">
                <div className="card cardWelcome">
                    <Link exact="true" to="/organigrama" className="link">
                        <img src={orga} className="card-img-top overflow-hidden" alt="foto organigrama" />

                        <div className="card-body">
                            <h5 className="card-title">Organigrama</h5>
                            <p className="card-text">
                                Aquí podrás encontrar a tus compañeros, jefes y
                                colaboradores con los que te vas a relacionar
                            </p>
                        </div>
                    </Link>
                </div>
              </div>
            </div>
        </div>
    );
}

export default Welcome;
