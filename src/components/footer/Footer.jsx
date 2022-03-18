import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div>
      <footer
        className="text-center text-white footerUpBGC"
      >
        <div className="container">

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Gestion de Capacitaciones y Accesos
                </p>
              </div>
            </div>
          </section>

        </div>

        <div
          className="text-center p-3 footerDownBGC"
        >
          © 2022 Copyright: Team 2

        </div>
      </footer>
    </div>
  );
};

export default Footer;
