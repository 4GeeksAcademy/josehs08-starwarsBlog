import React, { useContext } from "react";
import { Card } from "../component/Card.jsx";
import { Context } from "../store/appContext.js"

export const Home = () => {
	const { store } = useContext(Context)

	return (
		<div className="mt-5">
			<div className="d-flex overflow-auto" >
				{
					store.people.length <= 0 ? <p>Cargando datos...</p> :
						store.people.map((person) => {
							return <Card key={person.id} type="characters" item={person} />
						})
				}
			</div>
			<div className="d-flex overflow-auto">
				{store.planets.length <= 0 ? <p>Cargando datos...</p> :
					store.planets.map((planet) => {
						return <Card key={planet.id} type="planets" item={planet} />
					})
				}
			</div>
			<div className="d-flex overflow-auto">
				{store.vehicles.length <= 0 ? <p>Cargando datos...</p> :
					store.vehicles.map((vehicle) => {
						return <Card key={vehicle.id} type="vehicles" item={vehicle} />
					})
				}
			</div>

		</div>
	)
}

