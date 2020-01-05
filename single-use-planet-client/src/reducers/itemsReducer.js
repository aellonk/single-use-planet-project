const itemsReducer = (state = { items: []}, action) => {
	switch(action.type) {
		case 'GET_ITEMS_SUCCESS':
			return { ...state, items: action.items};
		case 'ADD_ITEM':
			console.log({...state, items: [...state.items, action.item]} );
      		return {...state, items: [...state.items, action.item]} ;
		default:
			return state;
	}
}


export default itemsReducer;