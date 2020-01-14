const initialState = {
	name: '',
    material: '',
    alternative: '',
    instructions: '',
    img_url: ''
}

export default (state=initialState, action) => {
	switch(action.type) {
		case 'UPDATE_NEW_ITEM_FORM':
			return {
				...state, 
				[action.formData.name] : action.formData.value
			}
		default:
			return state;
	}
}
	
