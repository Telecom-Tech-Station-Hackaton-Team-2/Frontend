import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from 'axios';
// import {CurrentUserContext} from '../context/UserContext';
import UserServices from '../../services/user';

function Profile(props) {
    const [ userData, setUserData ] = useState();

    useEffect( () => {
        const data = new UserServices()
        data.getUserData( {
            "user": "Maxi"
        })
            .then( response => {
                console.log(response);
            })
    }, [])

    // const getUserData = async () => {
    //     // const data = await fetch("https://run.mocky.io/v3/f9690c25-38d8-4769-992c-fedc65244675")
    //     // const user = await data.json()

    //     // console.log(user);

    //     // setUserData(user)
    // }



    return (
        <div>
            <div>
                <h1>Mi Perfil</h1>
            </div>
            <div className="container rounded border border-secondary mt-4">
                <div className="d-flex mt-2">
                  <img src="https://ui-avatars.com/api/?name=John+Doe&rounded=true&size=38" alt="Imagen del usuario" />
                  <h2 className="mx-4">Nombre del colaborador | Legajo</h2>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">DNI</label>
                    <label for="" className="col-sm-2 col-form-label">32444555</label>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">Puesto</label>
                    <label for="" className="col-sm-2 col-form-label">Un puesto</label>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">Sector</label>
                    <label for="" className="col-sm-2 col-form-label">Un sector</label>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">Edificio</label>
                    <label for="" className="col-sm-2 col-form-label">Un edificio</label>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">Telefono</label>
                    <label for="" className="col-sm-2 col-form-label">1144445555</label>
                </div>
                <div className="mb-3 row mx-4">
                    <label for="" className="col-sm-2 col-form-label fw-bold">Email</label>
                    <label for="" className="col-sm-2 col-form-label">usuario@unemail.com</label>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {};

export default Profile;
