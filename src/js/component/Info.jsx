import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Info = () => {
  const { store } = useContext(Context);
  const { type, id } = useParams();

  const [item, setItem] = useState(null);

  const findItem = () => {
    for (let endpoints of store.endpoints) {
      let result = store[endpoints].find((item) => item._id == id);
      if (result) {
        setItem(result);
        break;
      }
    }
  };

  useEffect(() => {
    findItem();
  }, [store.people, store.planets, store.vehicles, type, id]); // Include type and id as dependencies

  const renderProperties = (properties) => {
    if (!properties) return null;

    return Object.entries(properties)
      .filter(([key, value]) => key !== "description" && key !== "name")
      .map(([key, value]) => (
        <div key={key}>
          <p>
            <strong>{`${capitalizeFirstLetter(key)}:`}</strong> {value}
          </p>
        </div>
      ));
  };

  return (
    <div className="container w-50 d-flex gap-3 mt-5 mx-auto border rounded shadow p-3">
      <div className="col-6 mx-auto mt-3">
        <img
          src={`https://starwars-visualguide.com/assets/img/${type}/${item?.uid}.jpg`}
          className="rounded-circle img-fluid"
          alt="Imagen de prueba"
        />
      </div>
      <div className="me-auto card">
        <div className="card-header">
          <h2>{item?.properties?.name}</h2>
          <p>{item?.description}</p>
        </div>
        <div className="card-body">{renderProperties(item?.properties)}</div>
      </div>
    </div>
  );
};

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
