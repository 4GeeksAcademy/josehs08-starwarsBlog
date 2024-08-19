import React from "react";
import { Link } from "react-router-dom"

export const Card = ({ type, item }) => {
    let displayProperty;

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
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt="..." />
            <div className="card-body">
                {displayProperty}
                <Link to={`info/people/${item._id}`}>
                    <button className="btn btn-primary">Learn More!</button>
                </Link>
            </div>
        </div>
    )
}