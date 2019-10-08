import React, { Component } from 'react';
import Items from './Items';
import './App.css';
import NavBar from '../components/NavBar'




class App extends Component {

	render() {
		return (
			<div> 
				App Container
				<NavBar/>
				<Items />
			</div>
		)
	}
}

export default App;