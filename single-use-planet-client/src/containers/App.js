import React, { Component } from 'react';
import Items from './Items';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			items: []
		}
	}

	componentDidMount() {
		fetch(`${API_URL}`)
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