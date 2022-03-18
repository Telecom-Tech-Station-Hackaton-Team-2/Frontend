import React from "react";
import "./loginForm.css";
import UserServices from "../../services/user";

function LoginForm() {

  
  const login = () => {
    
    console.log('NO FUNCIONA')
    const data = new UserServices();
    data
      .login({
        user: "Maxi",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <>
      <div className="form-container">
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Los datos ingresados son incorrectos.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Recordarme
            </label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={login}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
