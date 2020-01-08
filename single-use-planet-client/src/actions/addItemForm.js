export const updateAddItemForm = (name, value) => {
	const formData = { name, value }
	return {
		type: 'UPDATE_NEW_ITEM_FORM',
		formData
	}
}

export const addItem = item => {
	return {
		type: "ADD_ITEM",
		item
	};
}

export const createItem = (itemData) => {
	return dispatch => {
		const sendableItemData = {
			name: itemData.name,
			material: itemData.material,
			alternative: itemData.alternative,
			instructions: itemData.instructions,
			img_url: itemData.img_url
		};
		return fetch("http://localhost:3000/api/items", {
			credentials: "include",
			method: "POST",
	      	headers: {
	        	"Content-Type": "application/json"
	      	},
	      	body: JSON.stringify(sendableItemData)
	    })
	    .then(response => response.json())
	    .then(response => {
			dispatch(addItem(response.data))
		})
	   	.catch(error => console.log(error))
		}
	}
