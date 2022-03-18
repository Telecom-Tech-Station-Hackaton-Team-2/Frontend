import React, { useState, useEffect } from "react";
import Card from "./Card";
import TrainingServices from "../../services/training";

function ItemsListContainer({ itemType }) {
  const [cardData, setCardData] = useState({
    tecnica: [],
    soft: [],
    criticas: [],
  });

  useEffect(() => {
    const data = new TrainingServices();
    data.getData().then(({ data }) => {
      setCardData(data);
    });
  }, []);

  if (itemType === "training") {
    return (
      <>
        <div className="main-wrapper">
          <div className="section-title">
            <h1>Capacitaciones Disponibles</h1>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Criticas
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    {cardData.criticas.map((info, key) => {
                      return <Card data={info} key={key} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Soft
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    {cardData.soft.map((info, key) => {
                      return <Card data={info} key={key} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Tecnicas
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    {cardData.tecnica.map((info, key) => {
                      return <Card data={info} key={key} />;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="main-wrapper">
          <div className="section-title">
            <h1>Gestión de Accesos</h1>
          </div>
          <div className="row">
            {cardData.criticas.map((info, key) => {
              return <Card data={info} key={key} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

ItemsListContainer.propTypes = {};

export default ItemsListContainer;
