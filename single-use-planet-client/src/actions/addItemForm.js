export const updateAddItemForm = (name, value) => {
	const formData = { name, value }
	return {
		type: 'UPDATE_NEW_ITEM_FORM',
		formData
	}
}
