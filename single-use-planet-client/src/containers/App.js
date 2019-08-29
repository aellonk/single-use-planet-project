import React, { Component } from 'react';
import Items from './Items';
import FeedbackForm from './FeedbackForm'
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {

	componentDidMount() {
		fetch(`${API_URL}`)
		.then(response => response.json())
		.then(items => this.setState({ items}))
	}

	render() {
		return (
			<div> 
				App Container
				<Items />
				<FeedbackForm />
			</div>
		)
	}
}

export default App;