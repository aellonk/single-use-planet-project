const itemsReducer = (state = { items: []}, action) => {
	switch(action.type) {
		case 'GET_ITEMS_SUCCESS':
			return {items: action.items};
	
		default:
			return state;
	}
}


export default itemsReducer;