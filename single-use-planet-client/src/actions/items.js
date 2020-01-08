const API_URL = process.env.REACT_APP_API_URL;

// Action Creators (functions that get sent to reducer)
const setItems = items => {
	return {
		type: 'GET_ITEMS_SUCCESS',
		items
	}
}

export const addItem = item => {
	return {
		type: "ADD_ITEM",
		item
	};
}

// Async Actions (Actions that make async calls)
export const getItems = () => {
	console.log("c")
	return dispatch => {
		return fetch(`${API_URL}`)
		.then(response => response.json())
		.then(items => {
			console.log("d")
			dispatch(setItems(items))
		})
		.catch(error => console.log(error));
	}
	console.log("e")
}

export const createItem = (itemData) => {
	return dispatch => {
		const sendableItemData = {
			name: itemData.name,
			material: itemData.material,
			alternative: itemData.alternative,
			instructions: itemData.instructions,
			img_url: itemData.img_url
		}
		return fetch(`${API_URL}`, {
			method: "POST",
	      	headers: {
	        	"Content-Type": "application/json"
	      	},
	      	body: JSON.stringify(sendableItemData)
	    })
	    .then(response => response.json())
	    .then(response => {
			dispatch(addItem(response.data))
			window.history.push(`/items/${response.data.id}`)
		})
	   	.catch(error => console.log(error))
		}
	}
