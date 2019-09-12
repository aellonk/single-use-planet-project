const itemsReducer = (state = { items: []}, action) => {
	switch(action.type) {
		case 'GET_ITEMS_SUCCESS':
			return {items: action.items};
		case 'GET_SEARCHED_ITEMS':
			return {items: action.items}
		default:
			return state;
	}
}


export default itemsReducer;