import React, { useRef } from "react";
import "./loginForm.css";
import UserServices from "../../services/user";

function LoginForm() {
  const login = (user) => {
    const data = new UserServices();
    data.login(user).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
        window.location.replace("http://localhost:3000/inicio");
      }
    });
  };
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      user: formData.get("user"),
      password: formData.get("password"),
    };
    login(data);
  };

  return (
    <>
      <div className="form-container main-wrapper">
        <form form ref={formRef} onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="user" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              name="user"
              id="user"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Los datos ingresados son incorrectos.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
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
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
