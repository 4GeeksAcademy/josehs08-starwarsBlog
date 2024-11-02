const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			people: JSON.parse(localStorage.getItem("people") || "[]"),
			planets: JSON.parse(localStorage.getItem("planets") || "[]"),
			vehicles: JSON.parse(localStorage.getItem("vehicles") || "[]"),
			urlbase: "https://www.swapi.tech/api",
			endpoints: ["people", "planets", "vehicles"],
			likes: JSON.parse(localStorage.getItem("likes") || "{}")
		},
		actions: {
			getData: async () => {
				let store = getStore();
				try {
					for (let endpoint of store.endpoints) {
						if (store[endpoint].length > 0) continue;

						const response = await fetch(`${store.urlbase}/${endpoint}`);
						const data = await response.json();
						let results = [];

						for (let item of data.results) {
							let responseCharacter = await fetch(item.url);
							let dataCharacter = await responseCharacter.json();
							results.push(dataCharacter.result);
						}
						setStore({ [endpoint]: results });
						localStorage.setItem(endpoint, JSON.stringify(results));
					}
				} catch (error) {
					console.log(error);
				}
			},
			likeItem: (item) => {
				let store = getStore();
				let likes = store.likes;
				if (likes[item._id]) {
					delete likes[item._id];
				} else {
					likes[item._id] = item;
				}
				setStore({ likes });
				localStorage.setItem("likes", JSON.stringify(likes));
			}
		}
	}
};

export default getState;
