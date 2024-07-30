const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			urlbase: "https://www.swapi.tech/api",
			endpoints: ["people", "planets", "vehicles"]
		},
		actions: {
			getData: async () => {
				let store = getStore();
				try {
					for (let endpoints of store.endpoints) {
						const response = await fetch(`${store.urlbase}/${endpoints}`);
						const data = await response.json();
						for (let item of data.results) {
							let responseCharacter = await fetch(item.url);
							let dataCharacter = await responseCharacter.json();
							setStore({ [endpoints]: [...store[endpoints], dataCharacter.result] });
						}
					}
				} catch (error) {
					console.log(error)
				}
			},
		}
	}
};


export default getState;
