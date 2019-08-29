import React, { Component } from 'react';
import Items from './Items';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3001/api/items')
		.then(response => response.json())
		.then(items => this.setState({ items}))
	}

	render() {
		return (
			<div> 
				App Container
				<Items items={this.state.items} />
			</div>
		)
	}
}

export default App;