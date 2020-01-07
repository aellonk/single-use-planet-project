const initialState => {
	name: '',
    material: '',
    alternative: '',
    instructions: '',
    img_url: ''
}

export default (state=initialState, action) => {
	switch(action.type) {
		case 'UPDATE_NEW_ITEM_FORM':
			return action.itemFormData
		default:
			return state;
	}
}
	
