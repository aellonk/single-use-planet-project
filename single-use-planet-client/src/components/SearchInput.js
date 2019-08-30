import React, { Component } from 'react'

class SearchInput extends Component {

	state = {
		name: ''
	}

	handleOnChange = event => {
		this.setState({
			name: event.target.value
		});
	}

	handleOnSubmit = event => {
		event.preventDefault();

	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<input type="text" value={this.state.name} onChange={this.handleOnChange} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default SearchInput;