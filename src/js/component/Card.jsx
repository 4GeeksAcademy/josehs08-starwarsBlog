import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Card = ({ type, item }) => {
  let displayProperty;

  const { actions } = useContext(Context);

  switch (type) {
    case "planets":
      displayProperty = (
        <>
          <p className="card-text">Name: {item.properties.name}</p>
          <p>Diameter:{item.properties.diameter}</p>
        </>
      );
      break;
    case "vehicles":
      displayProperty = (
        <>
          <p className="card-text">Name: {item.properties.name}</p>
          <p>model:{item.properties.model}</p>
        </>
      );
      break;
    case "characters":
      displayProperty = (
        <>
          <p className="card-text">Name: {item.properties.name}</p>
          <p className="card-text">Skin Color: {item.properties.skin_color}</p>
          <p className="card-text">Eye Color: {item.properties.eye_color}</p>
        </>
      );
      break;
    default:
      displayProperty = <p>No data available for this type.</p>;
  }
  return (
    <div className="card col-3" style={{ width: "18rem" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        {displayProperty}
        <div className="d-flex justify-content-between">
          <Link to={`info/${type}/${item._id}`}>
            <button className="btn btn-primary">Learn More!</button>
          </Link>
          <button
            className="btn btn-success"
            onClick={() => actions.likeItem(item)}
          >
            Like
          </button>
        </div>
      </div>
    </div>
  );
};
