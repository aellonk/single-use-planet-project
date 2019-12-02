import React from 'react'

const SearchInput = () => {

	return (
		<div>
			<input type="text" value={this.state.input} placeholder={"Search for an Item"} onChange={this.handleOnChange.bind(this)} />
		</div>
		)
}


export default SearchInput;