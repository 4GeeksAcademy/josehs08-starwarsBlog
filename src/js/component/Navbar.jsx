import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {
  const { store } = useContext(Context);

  const getTypeForItem = (item) => {
    for (const endpoint of store.endpoints) {
      if (store[endpoint].some((storeItem) => storeItem._id === item._id)) {
        return endpoint === "people" ? "characters" : endpoint;
      }
    }
    return null;
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to={`/`} className="text-decoration-none">
          <p className="navbar-brand text-white">Star wars</p>
        </Link>
        <div className="dropdown me-5">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Likes
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {Object.keys(store.likes).length <= 0 ? (
              <li className="dropdown-item">No hay items liked</li>
            ) : (
              Object.entries(store.likes).map(([key, value]) => {
                const type = getTypeForItem(value);
                return (
                  type && (
                    <li key={key}>
                      <Link
                        to={`/info/${type}/${value._id}`}
                        className="dropdown-item"
                      >
                        {`${capitalizeFirstLetter(type)}: ${
                          value.properties.name
                        }`}
                      </Link>
                    </li>
                  )
                );
              })
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default Navbar;
