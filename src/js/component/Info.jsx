import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom"

export const Info = () => {

    const { store } = useContext(Context)
    const { type, id } = useParams()

    const [item, setItem] = useState(null)

    const findItem = () => {
        for (let endpoints of store.endpoints) {
            let result = store[endpoints].find((item) => item._id == id);
            setItem(result);
            break;
        }
    }

    useEffect(() => {
        findItem();
    }, [store.people]);

    return (
        <div>
            <div className="d-flex row p-5">
                <div className="col-6 p-5 d-flex mx-auto">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${item?.uid}.jpg`} className="mx-auto" alt="Imagen de prueba" />
                </div>
                <div className="col-6 p-5">
                    <h2>{item?.properties?.name}</h2>
                    <p>{item?.description}</p>
                </div>
            </div>
            <hr />
            <div>
                <div className="d-flex justify-content-between px-5">

                    <div className="d-flex flex-column">
                        <p>Name:</p>
                        <p>{item?.properties?.name}</p>
                    </div>

                    <div className="d-flex flex-column">
                        <p>Skin color:</p>
                        <p>{item?.properties?.skin_color}</p>
                    </div>

                    <div className="d-flex flex-column">
                        <p>Eye color:</p>
                        <p>{item?.properties?.eye_color}</p>
                    </div>

                    <div className="d-flex flex-column">
                        <p>Birth gender:</p>
                        <p>{item?.properties?.birth_year}</p>
                    </div>

                    <div className="d-flex flex-column">
                        <p>Height:</p>
                        <p>{item?.properties?.height}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}