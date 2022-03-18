import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="container m-4">
            <h2>¡Error! Página no encontrada :(</h2>
            <Link to='/'><button type="button" className="btn btn-primary">¡Ir al Inicio!</button></Link>
        </div>
    )
}

export default Error;
