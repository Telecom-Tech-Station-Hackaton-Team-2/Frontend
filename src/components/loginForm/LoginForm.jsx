import React from "react";
import './loginForm.css';

function LoginForm() {
  return (
    <>
    <div className="form-container">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Usuario
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            Los datos ingresados son incorrectos.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Contraseña
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Recordarme
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
    </>
  );
}

export default LoginForm;
