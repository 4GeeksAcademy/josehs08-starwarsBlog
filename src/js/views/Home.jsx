import React, { useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="m-5">
      <div className="col mx-5 mb-4 shadow p-3  border rounded">
        <h3>Personajes</h3>
        <div className="row">
          {
            <div className="d-flex overflow-auto gap-3">
              {store.people.length <= 0 ? (
                <p>Cargando datos...</p>
              ) : (
                store.people.map((person) => {
                  return (
                    <Card key={person.id} type="characters" item={person} />
                  );
                })
              )}
            </div>
          }
        </div>
      </div>
      <div className="col mx-5 mb-4 shadow p-3  border rounded">
        <h3>Planetas</h3>
        <div className="row">
          {
            <div className="d-flex overflow-auto gap-3">
              {store.planets.length <= 0 ? (
                <p>Cargando datos...</p>
              ) : (
                store.planets.map((planet) => {
                  return <Card key={planet.id} type="planets" item={planet} />;
                })
              )}
            </div>
          }
        </div>
      </div>
      <div className="col mx-5 mb-4 shadow p-3  border rounded">
        <h3>Vehículos</h3>
        <div className="row">
          {
            <div className="d-flex overflow-auto gap-3">
              {store.vehicles.length <= 0 ? (
                <p>Cargando datos...</p>
              ) : (
                store.vehicles.map((vehicle) => {
                  return (
                    <Card key={vehicle.id} type="vehicles" item={vehicle} />
                  );
                })
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};
