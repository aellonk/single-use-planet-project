const API_URL = process.env.REACT_APP_API_URL;

// Action Creators (functions that get sent to reducer)
const setItems = items => {
	return {
		type: 'GET_ITEMS_SUCCESS',
		items
	}
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

