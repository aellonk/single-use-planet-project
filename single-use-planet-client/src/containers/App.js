import React, { Component } from 'react';
import Items from './Items';
import FeedbackForm from './FeedbackForm';
import './App.css';



class App extends Component {

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