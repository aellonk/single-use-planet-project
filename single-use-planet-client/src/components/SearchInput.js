import React, { Component } from 'react'

class SearchInput extends Component {

	state = {
		input: ''
	}

	handleOnChange = event => {
		let inputValue = event.target.value;
		this.setState({
			input: inputValue
	});
	}
	

	render() {
		return(
			<div>
				<form>
					<input type="text" value={this.state.input} placeholder={"Search for an Item"} onChange={this.handleOnChange} />
				</form>
				
			</div>
		)
	}
}

export default SearchInput;