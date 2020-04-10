const API_URL = process.env.REACT_APP_API_URL;

// Action Creators (functions that get sent to reducer)
export const setItems = items => {
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
	return dispatch => {
		return fetch(`${API_URL}`)
		.then(response => response.json())
		.then(items => {
			dispatch(setItems(items))
		})
		.catch(error => console.log(error));
	}
}




export const createItem = (itemData, history) => {
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
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(addItem(response))
          history.push(`/items/${response.id}`)
        }
      })
      .catch(console.log)
	}
}